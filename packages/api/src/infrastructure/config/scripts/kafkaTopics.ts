import kafka from "@repo/shared/kafka"
const topics = [
    { topic: "scan-jobs", numPartitions: 10, replicationFactor: 2 },
    { topic: "analytics-jobs", numPartitions: 10, replicationFactor: 2 },
    { topic: "audit-events", numPartitions: 10, replicationFactor: 2 },
];

async function run() {
    const admin = kafka.instance.kafka.admin();
    await admin.connect();
    await admin.createTopics({ topics, waitForLeaders: true });
    console.log("Topics created or already exist!");
    await admin.disconnect();
}

run().catch(e => {
    console.error("Error creating topics:", e);
    process.exit(1);
});