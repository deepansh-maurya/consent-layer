// src/application/pageScanResult/createPageScanResult.ts
import { v4 as uuidv4 } from "uuid";
import { IPageScanResultRepository } from "../../../domain/repositories/IPageScanRepository";
import { PageScanResult } from "../../../domain/page_scan";

export async function createPageScanResult(
  scanningSessionId: string,
  url: string,
  statusCode: number,
  parentUrl: string | null,
  depth: number,
  scanResult: any,
  trackers: any,
  securityIssues: any,
  complianceIssues: any,
  cookies: any,
  screenshotUrl: string | null,
  timeTakenMs: number,
  scannedAt: Date,
  repoCtx: { pageScanResultRepository: IPageScanResultRepository }
): Promise<PageScanResult> {
  const result = new PageScanResult(
    uuidv4(), scanningSessionId, url, statusCode, parentUrl, depth, scanResult,
    trackers, securityIssues, complianceIssues, cookies, screenshotUrl, timeTakenMs, scannedAt
  );
  return await repoCtx.pageScanResultRepository.create(result);
}
