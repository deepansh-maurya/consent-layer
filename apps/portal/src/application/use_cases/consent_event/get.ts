// src/application/use_cases/consent_event/listByUser.ts
import { ConsentEvent } from "../../../domain/consent_event";
import type { IConsentEventRepository } from "../../../domain/repositories/IConsentEventRepository";

export default function listConsentEventsByUser(
  orgId: string,
  userId: string,
  { consentEventRepository }: { consentEventRepository: IConsentEventRepository }
): Promise<ConsentEvent[]> {
  return consentEventRepository.findByUser(orgId, userId);
}

export function listConsentEventsByType(
  orgId: string,
  eventType: 'accept' | 'reject' | 'update',
  { consentEventRepository }: { consentEventRepository: IConsentEventRepository }
): Promise<ConsentEvent[]> {
  return consentEventRepository.findByType(orgId, eventType);
}


export  function listConsentEventsByOrg(
  orgId: string,
  { consentEventRepository }: { consentEventRepository: IConsentEventRepository }
): Promise<ConsentEvent[]> {
  return consentEventRepository.findByOrg(orgId);
}
