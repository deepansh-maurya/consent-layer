import { Db, MongoClient } from "mongodb";

export class MongoDb {
    public db: Db
    constructor(url: string) {
        this.main(url)
    }

    async main(url: string) {
        const client = await MongoClient.connect(url)
        this.db = client.db('trakers-data')
    }

}