// src/domain/ScanningSession.ts

import {ScanType} from "@repo/shared/type"

export enum ScanStatus {
  RUNNING="RUNNING",
  PAUSED="PAUSED",
  COMPLETED="COMPLETED",
  FAILED="FAILED",
  CANCELLED="CANCELLED",
}
export class ScanningSession {
  constructor(
    public id: string,
    public orgId: string,
    public createdAt: Date,
    public startedBy: string,
    public scanType: ScanType[],
    public startUrls: string[],
    public scanDepth: number | null,
    public maxPages: number | null,
    public status: ScanStatus,
    public progressScanned: number,
    public progressQueued: number,
    public progressFailed: number,
    public progressPending: number,
    public settings: any, // Json type
    public reportUrl: string | null,
    public finishedAt: Date | null
    // results, failedPages, authRequests not here—handled via relations in repo layer
  ) {}
}
