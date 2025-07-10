import { chromium, ChromiumBrowser } from "playwright"

export class Playright {

    protected browser: ChromiumBrowser

    static _instance: Playright
    static get instance() {
        if (!this._instance) {
            this._instance = new Playright()
        }
        return this._instance
    }

    private constructor() {
        this.launchBrowser()
    }

    async launchBrowser() {
        this.browser = await chromium.launch({ headless: true })
    }
}