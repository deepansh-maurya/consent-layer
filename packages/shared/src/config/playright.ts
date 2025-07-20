import { chromium, ChromiumBrowser } from "playwright"

export  default class Playright {

    protected browser: ChromiumBrowser

   private static _instance: Playright
    static get instance() {
        if (!this._instance) {
            this._instance = new Playright()
        }
        return this._instance
    }

    protected constructor(proxy?: any) {
        this.launchBrowser(proxy)
    }

    async launchBrowser(proxy?: any) {
        if(this.browser) return
        this.browser = await chromium.launch({ headless: true, proxy })
    }


    async getAllPagesToScanWithPlaywright(startUrl: string, scanDepth: number): Promise<string[]> {
        this.launchBrowser()
        const visited = new Set<string>();
        const toVisit: Array<{ url: string, depth: number }> = [{ url: startUrl, depth: 1 }];
        const urlObj = new URL(startUrl);
        const originHost = urlObj.hostname;

        try {
            while (toVisit.length > 0) {
                const { url, depth } = toVisit.shift()!;
                if (visited.has(url) || depth > scanDepth) continue;
                visited.add(url);

                const context = await this.browser.newContext();
                const page = await context.newPage();
                try {
                    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });
                    // Only extract links if we haven't hit max depth yet
                    if (depth < scanDepth) {
                        const links: string[] = await page.$$eval("a[href]", anchors =>
                            anchors.map(a => (a as HTMLAnchorElement).href)
                        );
                        for (const link of links) {
                            try {
                                const linkUrl = new URL(link);
                                if (
                                    linkUrl.hostname === originHost &&
                                    !visited.has(linkUrl.href) &&
                                    !toVisit.some(v => v.url === linkUrl.href)
                                ) {
                                    toVisit.push({ url: linkUrl.href, depth: depth + 1 });
                                }
                            } catch (e) {
                                // Ignore malformed URLs
                                console.log(e);

                            }
                        }
                    }
                } catch (e) {
                    // Optionally log navigation errors
                    console.log(e);
                    
                } finally {
                    await page.close();
                    await context.close();
                }
            }
        } finally {
            await this.browser.close();
        }

        return Array.from(visited);
    }

}