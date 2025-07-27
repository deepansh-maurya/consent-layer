package internal

import (
	"bufio"
	"context"
	"fmt"
	"github.com/chromedp/chromedp"
	"go.mongodb.org/mongo-driver/mongo"
	"os"
	"strings"
	"time"
)

type PopupDocument struct {
	URL            string            `bson:"url"`
	ScanTimestamp  string            `bson:"scan_timestamp"`
	PopupText      string            `bson:"popup_text"`
	PopupHTML      string            `bson:"popup_html"`
	PopupCSS       map[string]string `bson:"popup_css"`
	AIPrompt       string            `bson:"ai_prompt"`
	AIResponse     AIResponse        `bson:"ai_response"`
	ScreenshotPath string            `bson:"screenshot_path,omitempty"`
	HumanLabel     *string           `bson:"human_label,omitempty"`
	Notes          *string           `bson:"notes,omitempty"`
}

func IngestDomain(filepath string, colec *mongo.Collection) error {

	file, err := os.Open((filepath))
	if err != nil {
		return err
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	if err := scanner.Err(); err != nil {
		return err
	}

	for scanner.Scan() {
		line := scanner.Text()
		parts := strings.Split(line, ",")
		if len(parts) < 2 {
			continue
		}

		domain := strings.TrimSpace(parts[1])
		extractPopups(domain, colec)

	}
	return nil
}

func extractPopups(domain string, coll *mongo.Collection) {

	// Build URL
	url := "https://" + domain

	// Create context and chromedp instance
	ctx, cancel := chromedp.NewContext(context.Background())
	defer cancel()
	// Increase timeout (websites can be slow)
	ctx, cancel = context.WithTimeout(ctx, 15*time.Second)
	defer cancel()

	var popups []map[string]interface{}

	err := chromedp.Run(ctx,
		chromedp.Navigate(url),
		chromedp.Sleep(2*time.Second), // Wait for popups

		chromedp.Evaluate(`
      Array.from(document.body.querySelectorAll("*")).filter(el => {
        const style = window.getComputedStyle(el);
        const isFloating = (style.position === "fixed" || style.position === "absolute");
        const isVisible = el.offsetParent !== null && style.display !== "none" && style.opacity !== "0" && style.visibility !== "hidden";
        const area = el.offsetWidth * el.offsetHeight;
        const isLarge = area > 5000;
        const isZHigh = parseInt(style.zIndex) > 10 || isNaN(parseInt(style.zIndex));
        return isFloating && isVisible && isLarge && isZHigh;
      }).map(el => {
        const style = window.getComputedStyle(el);
        return {
          text: el.innerText,
          html: el.outerHTML,
          css: {
            position: style.position,
            zIndex: style.zIndex,
            display: style.display,
            opacity: style.opacity,
            visibility: style.visibility,
            width: style.width,
            height: style.height,
            background: style.background
          }
        }
      })
    `, &popups),
	)

	if err != nil {
		return
	}

	for _, popup := range popups {

		text, ok := popup["text"].(string)
		if !ok {
			continue // or handle error/log
		}
		html, ok := popup["html"].(string)
		if !ok {
			continue
		}

		css := make(map[string]string)

		if popup["css"] != nil {
			for k, v := range popup["css"].(map[string]interface{}) {
				css[k] = fmt.Sprint(v)
			}
		}

		aiResp, promt, err := AskDeepSeekWithSdk(text, html, css)

		if err != nil {
			fmt.Println("DeepSeek AI error:", err)
			// Optionally: skip this popup, or log and continue to next one
			continue
		}

		ProcessPopup(aiResp, promt, url, text, html, css, time.Now().UTC().Format(time.RFC3339) , coll)

	}
}

func ProcessPopup(aiResp AIResponse, prompt, url, popupText, popupHTML string, popupCSS map[string]string, timestamp string, coll *mongo.Collection) error {

	popupDoc := PopupDocument{
		URL:            url,
		ScanTimestamp:  timestamp,
		PopupText:      popupText,
		PopupHTML:      popupHTML,
		PopupCSS:       popupCSS,
		AIPrompt:       prompt,
		AIResponse:     aiResp,
		ScreenshotPath: "",
	}

	_, err := coll.InsertOne(context.Background(), popupDoc)

	if err != nil {
		return fmt.Errorf("MongoDB insert error: %v", err)
	}
	return nil

}
