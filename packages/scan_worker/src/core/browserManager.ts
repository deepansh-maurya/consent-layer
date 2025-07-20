import Playright  from "@repo/shared/browser";
import { ProxyByCountry } from "../config/proxyPool";

export default class BrowserManager extends Playright {

    protected startUrl: string //
    protected scanDepth: number  //
    protected maxPages: number
    protected specificPages: string[]  // 
    protected scanType: string[]  // 
    protected regions: string[] //
    protected userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36'
    protected metaData:any
    
    constructor(startUrl: string,
        scanDepth: number,
        maxPages: number,
        specificPages: string[],
        regions: string) {
        super(ProxyByCountry[regions])

        this.startUrl = startUrl
        this.scanDepth = scanDepth
        this.maxPages = maxPages
        this.specificPages = specificPages
    }

    async run() {
        const context = await this.browser.newContext({
            userAgent: this.userAgent
        })
        const page = await context.newPage()
    }

    async ifUrlsSpecified() {
        const urlsToVisit = [this.startUrl];
        const visited = new Set<string>();
    }

    async allPageScan() {

    }
}