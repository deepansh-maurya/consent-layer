import { ConsentEvent } from "@/src/domain/consent_event";
import { IConsentEventRepository } from "@/src/domain/repositories/IConsentEventRepository";
import { HttpDS } from "../ds/httpDs";

export class ConsentEventRepository implements IConsentEventRepository {
    private server: HttpDS

    constructor() {
        this.server = HttpDS.instance
    }
    async logEvent(event: ConsentEvent): Promise<ConsentEvent> {
        return await this.server.post("/", event)
    }

    async findByOrg(orgId: string): Promise<ConsentEvent[]> {
        return await this.server.get(`/orgId:${orgId}`)
    }

    async findByType(orgId: string, type: string): Promise<ConsentEvent[]> {
        return await this.server.get("/type", `?orgId=${orgId}&eventTyp=${type}`)
    }

   async findByUser(orgId: string, userId: string): Promise<ConsentEvent[]> {
        return await this.server.get('/user',`?orgId=${orgId}&userId=${userId}`)
    }
}