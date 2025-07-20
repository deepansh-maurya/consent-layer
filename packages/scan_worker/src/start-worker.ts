import KafkaConfig from "@repo/shared/kafka"
import Producer from "./queue/producer"
import { ScanBatchRequest } from "@repo/shared/type"
import { KafkaTopics } from "@repo/shared/enums"

(() => {
    KafkaConfig.instance.startConsumer(
        process.env.KAFKA_GROUP_ID!,
        process.env.KAFKA_TOPIC!,
        async ({ topic, partition, message }) => {
            const data = JSON.parse(message.value?.toString() ?? "{}") as ScanBatchRequest
            if (process.env.KAFKA_TOPIC! === KafkaTopics.scan_tasks)
                await Producer.instance.splitter(data)
            else{}
        }
    )
})()