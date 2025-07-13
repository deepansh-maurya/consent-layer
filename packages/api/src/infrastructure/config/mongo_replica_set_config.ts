import fs from "fs";
import { MongoDb } from "./mongodb";
import { MongoClient } from "mongodb";

export class MongoReplicaSet {

    private flag_file = "./replset-initialized.flag";

    static _instance: MongoReplicaSet
    static get instance() {
        if (!this._instance) {
            this._instance = new MongoReplicaSet()
        }
        return this._instance
    }

    private constructor() {
    }

    async initiateReplicaSet() {
        if (fs.existsSync(this.flag_file)) {
            console.log("Replica set already initialized (flag file).");
            return;
        }
        const client = new MongoClient(process.env.MONGO_CLUSTER_URL!);
        await client.connect();
        const admin = client.db().admin()
        try {
            await admin.command({ replSetInitiate: {} });
            console.log("Replica set initiated!");
            fs.writeFileSync(this.flag_file, "initialized");
        } catch (err) {
            if (err.codeName === "AlreadyInitialized") {
                console.log("Replica set already initialized (from MongoDB).");
                fs.writeFileSync(this.flag_file, "initialized");
            } else {
                throw err;
            }
        } finally {
            await client.close();
        }
    }
}