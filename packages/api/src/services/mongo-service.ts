import { Collection } from "mongodb"
import { MongoDb } from "../infrastructure/config/mongodb"
import { ChromaService } from "../infrastructure/config/chroma"
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
        super(process.env.MONGO_CLUSTER_URL)
    }

    async createCollection(name: string) {
        this.collection = this.db.collection(name)

        // Watch for inserts (you can also listen to updates, deletes, etc)
        const changeStream = this.collection.watch([{ $match: { operationType: "insert" } }]);

        for await (const change of changeStream) {
            if (change.operationType === "insert") {
                const newDoc = change.fullDocument;
                console.log("New document inserted:", newDoc);
                // ... your processing here

                let strForChromaCollection = ''
                Object.entries(newDoc).forEach(([key, val]) => {
                    strForChromaCollection += `${key}: ${val}; `
                });

                (await ChromaService.getInstance()).upsert(
                    [newDoc._id.toString()], 
                    [strForChromaCollection],
                    [newDoc])
            }
        }
    }

    async insertData(json: JSON) {
        await this.collection.insertOne(json)
    }
}