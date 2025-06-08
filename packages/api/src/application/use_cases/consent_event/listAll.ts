// src/application/use_cases/consent_event/listAll.ts
import { ConsentEvent } from "../../../domain/consent_event";
import type { IConsentEventRepository } from "../../../domain/repositories/IConsentEventRepository";

export default function listAllConsentEvents(
  { consentEventRepository }: { consentEventRepository: IConsentEventRepository }
): Promise<ConsentEvent[]> {
  return consentEventRepository.listAll();
}
