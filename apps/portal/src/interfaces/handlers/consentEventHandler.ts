import logConsentEvent from "@/src/application/use_cases/consent_event/create"
import { ConsentEvent } from "@/src/domain/consent_event"

export class ConsentEventHandler {

    static async logEvent(event: ConsentEvent): Promise<ConsentEvent> {
        return await logConsentEvent(
            event.orgId,

        )
    }

    static async findByOrg(orgId: string): Promise<ConsentEvent[]> {
        return await this.server.get(`/orgId:${orgId}`)
    }

    static async findByType(orgId: string, type: string): Promise<ConsentEvent[]> {
        return await this.server.get("/type", `?orgId=${orgId}&eventTyp=${type}`)
    }

    static async findByUser(orgId: string, userId: string): Promise<ConsentEvent[]> {
        return await this.server.get('/user', `?orgId=${orgId}&userId=${userId}`)
    }


}