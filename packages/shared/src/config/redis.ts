import { createClient, RedisClientType } from "redis";
import dotenv from "dotenv";

export default class RedisService {
  private static _instance: RedisService;
  public client: RedisClientType;

  private constructor() {
    this.client = createClient({
      socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT || 6379),
      },
      password: process.env.REDIS_PASSWORD || undefined,
      database: Number(process.env.REDIS_DB || 0),
    });

    this.client.on("connect", () => console.log("Redis connected!"));
    this.client.on("error", (err) => console.error("Redis error:", err));

    // Connect immediately (you can make this async if you want to await connection)
    this.client.connect().catch((err) => console.error("Redis connect error:", err));
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new RedisService();
    }
    return this._instance;
  }

  // Example methods
  async set(key: string, value: string, expirySeconds?: number) {
    if (expirySeconds) {
      await this.client.set(key, value, { EX: expirySeconds });
    } else {
      await this.client.set(key, value);
    }
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async del(key: string) {
    await this.client.del(key);
  }
}
