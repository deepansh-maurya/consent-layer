import { APIKey } from "@/src/domain/api_key";
import { HttpDS } from "../ds/httpDs";
import { IApiKeyRepository } from "@/src/domain/repositories/IApiKeyRepository";

export class ApiKeyRepository implements IApiKeyRepository {

    private server: HttpDS

    constructor() {
        this.server = HttpDS.instance
    }

    async create(apiKey: APIKey): Promise<APIKey> {
        return await this.server.post("/", apiKey)
    }

    async findById(id: string): Promise<APIKey | null> {
        return await this.server.get("/", `?orgId=${id}`)
    }

    async findByKey(key: string): Promise<APIKey | null> {
        return await this.server.get(`/${key}`)
    }

    async update(id: string, apiKey: APIKey): Promise<APIKey> {
        return await this.server.put("/", apiKey)
    }

    async revoke(id: string): Promise<void> {
        return await this.server.delete(`/${id}`)
    }
}