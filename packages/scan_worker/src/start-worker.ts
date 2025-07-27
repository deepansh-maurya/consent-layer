import KafkaConfig from "@repo/shared/kafka"
import Producer from "./queue/producer"
import { ScanBatchRequest } from "@repo/shared/type"
import { KafkaTopics } from "@repo/shared/enums"
import ScanWorker, { ScanTask } from "./worker/scanWorker"

(() => {
    KafkaConfig.instance.startConsumer(
        process.env.KAFKA_GROUP_ID!,
        process.env.KAFKA_TOPIC!,
        async ({ topic, partition, message }) => {
            if (process.env.KAFKA_TOPIC! === KafkaTopics.scan_tasks){
                const data = JSON.parse(message.value?.toString() ?? "{}") as ScanBatchRequest
                await Producer.instance.splitter(data)}
            else{
                 const data = JSON.parse(message.value?.toString() ?? "{}") as ScanTask
                await ScanWorker.instance.scanner(data)}
        }
    )
})()