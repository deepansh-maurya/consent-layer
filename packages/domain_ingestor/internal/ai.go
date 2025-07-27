package internal

import (
	"context"
	"encoding/json"
	"fmt"
	"os"

	"github.com/go-deepseek/deepseek"
	"github.com/go-deepseek/deepseek/request"
)

type AIResponse struct {
	IsCookieBanner bool     `json:"is_cookie_banner" bson:"is_cookie_banner"`
	Confidence     float64  `json:"confidence" bson:"confidence"`
	Reason         string   `json:"reason,omitempty" bson:"reason,omitempty"`
	ActionsFound   []string `json:"actions_found,omitempty" bson:"actions_found,omitempty"`
}




func AskDeepSeekWithSdk(text, html string, css map[string]string) (AIResponse, string, error) {
	apiKey := os.Getenv("DEEPSEEK_API_KEY")
	if apiKey == "" {
		return AIResponse{}, "", fmt.Errorf("DeepSeek API key not set")
	}

	// Marshal CSS as JSON for the prompt
	cssJson, err := json.Marshal(css)
	if err != nil {
		return AIResponse{}, "", fmt.Errorf("Failed to marshal CSS: %v", err)
	}

	// Build the prompt
	prompt := `Is the following popup a cookie consent/privacy banner? Reply only in JSON like {"is_cookie_banner": true, "confidence": 0.95, "reason": "...", "actions_found": ["Accept","Reject"]}` + "\n"
	prompt += "Popup text: " + text + "\n"
	prompt += "Popup html: " + html + "\n"
	prompt += "Popup css: " + string(cssJson) + "\n"

	// Create DeepSeek client
	client, err := deepseek.NewClient(apiKey)
	if err != nil {
		return AIResponse{}, prompt, fmt.Errorf("Failed to create DeepSeek client: %v", err)
	}

	chatReq := &request.ChatCompletionsRequest{
		Model:  deepseek.DEEPSEEK_CHAT_MODEL,
		Stream: false,
		Messages: []*request.Message{
			{
				Role:    "user",
				Content: prompt,
			},
		},
	}

	chatResp, err := client.CallChatCompletionsChat(context.Background(), chatReq)
	if err != nil {
		return AIResponse{}, prompt, fmt.Errorf("DeepSeek error: %v", err)
	}

	if len(chatResp.Choices) == 0 {
		return AIResponse{}, prompt, fmt.Errorf("No choices returned from DeepSeek")
	}

	content := chatResp.Choices[0].Message.Content

	// Parse the JSON AI output
	var aiResult AIResponse
	err = json.Unmarshal([]byte(content), &aiResult)
	if err != nil {
		return AIResponse{}, prompt, fmt.Errorf("Failed to parse AI JSON: %v | Raw: %s", err, content)
	}

	return aiResult, prompt, nil
}
