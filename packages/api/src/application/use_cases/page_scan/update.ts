import { PageScanResult } from "../../../domain/page_scan";
import { IPageScanResultRepository } from "../../../domain/repositories/IPageScanRepository";

export async function updatePageScanResult(
  result: PageScanResult,
  repoCtx: { pageScanResultRepository: IPageScanResultRepository }
): Promise<PageScanResult> {
  return await repoCtx.pageScanResultRepository.update(result);
}
