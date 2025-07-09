import { Collection } from "mongodb"
import { MongoDb } from "../infrastructure/config/mongodb"

export class MongoService extends MongoDb {

    static _instance: MongoService
    private collection: Collection<any>

    static get instance() {
        if (!this._instance) {
            this._instance = new MongoService()
        }
        return this._instance
    }

    private constructor() {
        super(process.env.MONGO_CLUSTER_URL!)
    }

    async createCollection(name: string) {
        this.collection = this.db.collection(name)
    }

    async insertData(json: JSON) {
        await this.collection.insertOne(json)
    }
}