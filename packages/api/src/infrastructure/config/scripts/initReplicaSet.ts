import { MongoReplicaSet } from "../mongo_replica_set_config";

(async () => {
  await MongoReplicaSet.instance.initiateReplicaSet();
})();
