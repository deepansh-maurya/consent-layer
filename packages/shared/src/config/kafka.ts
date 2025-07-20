import { Kafka, logLevel, Producer, Consumer, EachMessagePayload } from "kafkajs";

export default class KafkaService {
  public kafka: Kafka;
  public producer: Producer;
  private static _instance: KafkaService;
  private connectedProducers = false;
  private consumers: { [groupId: string]: Consumer } = {};

  static get instance() {
    if (!this._instance) {
      this._instance = new KafkaService();
    }
    return this._instance;
  }

  private constructor() {
    this.kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENT_ID,
      brokers: process.env.KAFKA_BROKERS!.split(","),
      logLevel: logLevel.INFO,
    });
    this.producer = this.kafka.producer();
  }

  // Producer methods
  async sendMessage(topic: string, value: string) {
    if (!this.connectedProducers) {
      await this.producer.connect();
      this.connectedProducers = true;
    }
    await this.producer.send({
      topic,
      messages: [{ value }],
    });
    // You can optionally not disconnect here for performance (batching)
    // await this.producer.disconnect();
  }

  // Consumer methods
  async startConsumer(
    groupId: string,
    topic: string,
    handler: (payload: EachMessagePayload) => Promise<void>
  ) {
    let consumer = this.consumers[groupId];
    if (!consumer) {
      consumer = this.kafka.consumer({ groupId });
      this.consumers[groupId] = consumer;
      await consumer.connect();
      await consumer.subscribe({ topic, fromBeginning: true });
      await consumer.run({ eachMessage: handler });
      console.log(`Consumer for group '${groupId}' started on topic '${topic}'`);
    } else {
      console.log(`Consumer for group '${groupId}' already running.`);
    }
  }

  // Optionally, add graceful shutdown for producer and all consumers
  async shutdown() {
    if (this.connectedProducers) {
      await this.producer.disconnect();
    }
    for (const consumer of Object.values(this.consumers)) {
      await consumer.disconnect();
    }
  }
}
