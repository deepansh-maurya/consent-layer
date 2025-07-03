import logConsentEvent from "@/src/application/use_cases/consent_event/create"
import listConsentEventsByUser, { listConsentEventsByOrg, listConsentEventsByType } from "@/src/application/use_cases/consent_event/get"
import { ConsentEvent } from "@/src/domain/consent_event"
import { buildBeans } from "@/src/infrastructure/config/service-locator"

export class ConsentEventHandler {

    static async logEvent(event: ConsentEvent): Promise<ConsentEvent> {
        return await logConsentEvent(event.orgId, event.userId, event.categories, event.userAgent, event.ipAddress, event.eventType, buildBeans())
    }

    static async findByOrg(orgId: string): Promise<ConsentEvent[]> {
        return await listConsentEventsByOrg(orgId, buildBeans())
    }

    static async findByType(orgId: string, type: 'accept' | 'reject' | 'update'): Promise<ConsentEvent[]> {
        return await listConsentEventsByType(orgId, type, buildBeans())
    }

    static async findByUser(orgId: string, userId: string): Promise<ConsentEvent[]> {
        return await listConsentEventsByUser(orgId, userId, buildBeans())
    }
}