// /domain/repositories/IConsentEventRepository.ts

import { ConsentEvent } from "../consent_event";

export interface IConsentEventRepository {
  logEvent(event: ConsentEvent): Promise<ConsentEvent>;
  findByOrg(orgId: string): Promise<ConsentEvent[]>;
  findByUser(orgId: string, userId: string): Promise<ConsentEvent[]>;
  findByType(orgId: string, type: string): Promise<ConsentEvent[]>;
  listAll(): Promise<ConsentEvent[]>;
}
