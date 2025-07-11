// src/application/scanningSession/updateScanningSession.ts

import { IScanningSessionRepository } from "../../../domain/repositories/IScanningSessionRepository";
import { ScanningSession } from "../../../domain/scanning_session";

export async function updateScanningSession(
  session: ScanningSession,
  repoCtx: { scanningSessionRepository: IScanningSessionRepository }
): Promise<ScanningSession> {
  return await repoCtx.scanningSessionRepository.update(session);
}
