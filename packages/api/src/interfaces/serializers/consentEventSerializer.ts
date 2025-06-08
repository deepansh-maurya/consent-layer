import { ConsentEvent } from "../../domain/consent_event";

export const consentEventSerializer = {
  serialize(event: ConsentEvent) {
    return {
      id: event.id,
      orgId: event.orgId,
      userId: event.userId,
      categories: event.categories,
      timestamp: event.timestamp.toISOString(),
      userAgent: event.userAgent,
      ipAddress: event.ipAddress,
      eventType: event.eventType,
      // Optionally, add:
      isAccept: event.isAcceptEvent(),
      isReject: event.isRejectEvent(),
      isUpdate: event.isUpdateEvent(),
    };
  }
};
