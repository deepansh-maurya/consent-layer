import { ScanType, ScanTypeRegistry } from "../core/scanTypeRegistry";


export interface ScanTask {
    region: string;
    page: string;
    scanType: string;
    scanDepth: number;
    metaData: any; // Replace 'any' with a more specific type if you know the structure!
}

export default class ScanWorker {

    private static _instance?: ScanWorker

     static get instance() {
        if (!this._instance) {
            this._instance = new ScanWorker()
        }
        return this._instance
    }

    async scanner(data: ScanTask) {

        try {
            const scanTypeRegistry = ScanTypeRegistry[data.scanType as ScanType]
            scanTypeRegistry
            
        } catch (error) {
            
        }

    }




}