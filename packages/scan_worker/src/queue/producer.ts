import Playright from "@repo/shared/browser";
import kafka from "@repo/shared/kafka"
import { ScanBatchRequest } from "@repo/shared/type";



export default class Producer  {

    private static _instance: Producer
    static get instance() {

        if (!this._instance) {
            this._instance = new Producer()
        }
        return this._instance
    }

    async splitter(data: ScanBatchRequest) {
        if (!data) return

        data.regions.map(async (region) => {
            let pages: string[] = []

            if (data.specificPages && Array.isArray(data.specificPages) && data.specificPages.length > 0) {
                pages = data.specificPages
            } else {
                // Call your crawling logic here (should return an array of URLs)
                pages = await Playright.instance.getAllPagesToScanWithPlaywright(data.startUrl, data.scanDepth)
            }

            for (const page of pages) {
                if (data.scanType && Array.isArray(data.scanType) && data.scanType.length > 0) {
                    for (const type of data.scanType) {
                        const scanData = {
                            region: region,
                            page: page,
                            scanType: type,
                            scanDepth: data.scanDepth,
                            metaData: data.metaData,
                        }
                        await kafka.instance.sendMessage(process.env.KAFKA_TOPIC!, JSON.stringify(scanData))
                    }
                }
            }
        })
    }
}