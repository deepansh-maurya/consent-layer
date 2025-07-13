import { Db, MongoClient } from "mongodb";

export class MongoDb {
    public db: Db
    protected client: MongoClient
    constructor(url?: string) {
        this.main(url!)
    }

    async main(url: string) {
        if (!url) return
        this.client = await MongoClient.connect(url)
        this.db = this.client.db('trakers-data')
    }
}