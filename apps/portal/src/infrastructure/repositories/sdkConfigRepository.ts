import { ISdkConfigRepository } from "@/src/domain/repositories/ISdkConfigRepository";
import { SDKConfig } from "@/src/domain/sdk_config";
import { HttpDS } from "../ds/httpDs";

export class SdkConfigRepository implements ISdkConfigRepository {

    private server: HttpDS

    constructor() {
        this.server = HttpDS.instance
    }

    async create(config: SDKConfig): Promise<SDKConfig> {
        return this.server.post("", config)
    }

    async findById(id: string): Promise<SDKConfig | null> {
        return await this.server.get(`/${id}`)
    }

    async findActiveByOrg(orgId: string): Promise<SDKConfig | null> {
        return await this.server.get("/active", orgId)
    }

    async listByOrg(orgId: string): Promise<SDKConfig[]> {
        return await this.server.get(`/`, `?orgId=${orgId}`)
    }

    async update(id: string, config: SDKConfig): Promise<SDKConfig> {
        return await this.server.put(`/${id}`, config)
    }

    async deactivateAll(orgId: string): Promise<void> {
     return await this.server.post("/deactivate-all",orgId)
    }

}
