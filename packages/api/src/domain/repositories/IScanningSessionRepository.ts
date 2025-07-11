// src/domain/interfaces/IScanningSessionRepository.ts

import { ScanningSession } from "../scanning_session";

export interface IScanningSessionRepository {
  create(session: ScanningSession): Promise<ScanningSession>;
  findById(id: string): Promise<ScanningSession | null>;
  update(session: ScanningSession): Promise<ScanningSession>;
  listByOrg(orgId: string): Promise<ScanningSession[]>;
  list(): Promise<ScanningSession[]>;
}
