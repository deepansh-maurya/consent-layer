// src/domain/ScanningSession.ts

export enum ScanType {
  COOKIE_CONCENT=" COOKIE_CONCENT",
  PRIVACY_LINKS=" PRIVACY_LINKS",
  TRACKERS_DETECTIon=" TRACKERS_DETECTIon",
  ADMIN_SECURITY=" ADMIN_SECURITY",
  HTTP_SSL=" HTTP_SSL",
  COOKIE_FLAGS=" COOKIE_FLAGS",
}

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
