import { Playright } from "@repo/shared/browser";

export const ProxyByCountry = {
    IN: {
        server: 'http://103.252.6.176:8080', // 🇮🇳 Thāne, Maharashtra
        username: '',
        password: '',
    },
    US: {
        server: 'http://154.16.146.46:80', // 🇺🇸 Buffalo, New York
        username: '',
        password: '',
    },
    UK: {
        server: 'http://138.199.31.173:80', // 🇬🇧 Poplar, Tower Hamlets
        username: '',
        password: '',
    },
};

export default class BaseScan extends Playright {

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