// src/application/scanningSession/createScanningSession.ts
import { v4 as uuidv4 } from "uuid";
import { IScanningSessionRepository } from "../../../domain/repositories/IScanningSessionRepository";
import { ScanningSession, ScanStatus } from "../../../domain/scanning_session";
import { ScanType } from "@repo/shared/type";

export async function createScanningSession(
  orgId: string,
  startedBy: string,
  scanType: ScanType[],
  startUrls: string[],
  scanDepth: number | null,
  maxPages: number | null,
  settings: any,
  repoCtx: { scanningSessionRepository: IScanningSessionRepository }
): Promise<ScanningSession> {
  const now = new Date();
  const session = new ScanningSession(
    uuidv4(),
    orgId,
    now,
    startedBy,
    scanType,
    startUrls,
    scanDepth,
    maxPages,
    "RUNNING" as ScanStatus, // or "QUEUED"
    0, // progressScanned
    0, // progressQueued
    0, // progressFailed
    0, // progressPending
    settings,
    null,
    null
  );
  return await repoCtx.scanningSessionRepository.create(session);
}
