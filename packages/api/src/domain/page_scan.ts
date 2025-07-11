// src/domain/PageScanResult.ts

export class PageScanResult {
  constructor(
    public id: string,
    public scanningSessionId: string,
    public url: string,
    public statusCode: number,
    public parentUrl: string | null,
    public depth: number,
    public scanResult: any,
    public trackers: any,
    public securityIssues: any,
    public complianceIssues: any,
    public cookies: any,
    public screenshotUrl: string | null,
    public timeTakenMs: number,
    public scannedAt: Date
  ) {}
}
