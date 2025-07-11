// src/application/pageScanResult/getPageScanResultById.ts

import { PageScanResult } from "../../../domain/page_scan";
import { IPageScanResultRepository } from "../../../domain/repositories/IPageScanRepository";

export async function getPageScanResultById(
  id: string,
  repoCtx: { pageScanResultRepository: IPageScanResultRepository }
): Promise<PageScanResult | null> {
  return await repoCtx.pageScanResultRepository.findById(id);
}


export async function listPageScanResults(
  repoCtx: { pageScanResultRepository: IPageScanResultRepository }
): Promise<PageScanResult[]> {
  return await repoCtx.pageScanResultRepository.list();
}


export async function listPageScanResultsBySession(
  scanningSessionId: string,
  repoCtx: { pageScanResultRepository: IPageScanResultRepository }
): Promise<PageScanResult[]> {
  return await repoCtx.pageScanResultRepository.listBySession(scanningSessionId);
}
