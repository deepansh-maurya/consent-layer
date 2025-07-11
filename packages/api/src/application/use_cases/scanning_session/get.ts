// src/application/scanningSession/getScanningSessionById.ts

import { IScanningSessionRepository } from "../../../domain/repositories/IScanningSessionRepository";
import { ScanningSession } from "../../../domain/scanning_session";

export async function getScanningSessionById(
  id: string,
  repoCtx: { scanningSessionRepository: IScanningSessionRepository }
): Promise<ScanningSession | null> {
  return await repoCtx.scanningSessionRepository.findById(id);
}



export async function listScanningSessions(
  repoCtx: { scanningSessionRepository: IScanningSessionRepository }
): Promise<ScanningSession[]> {
  return await repoCtx.scanningSessionRepository.list();
}

export async function listScanningSessionsByOrg(
  orgId: string,
  repoCtx: { scanningSessionRepository: IScanningSessionRepository }
): Promise<ScanningSession[]> {
  return await repoCtx.scanningSessionRepository.listByOrg(orgId);
}