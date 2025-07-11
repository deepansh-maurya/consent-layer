// src/application/failedPage/getFailedPageById.ts

import { FailedPage } from "../../../domain/failed_page";
import { IFailedPageRepository } from "../../../domain/repositories/IFailPageRepository";

export async function getFailedPageById(
  id: string,
  repoCtx: { failedPageRepository: IFailedPageRepository }
): Promise<FailedPage | null> {
  return await repoCtx.failedPageRepository.findById(id);
}


export async function listFailedPages(
  repoCtx: { failedPageRepository: IFailedPageRepository }
): Promise<FailedPage[]> {
  return await repoCtx.failedPageRepository.list();
}

export async function listFailedPagesBySession(
  scanningSessionId: string,
  repoCtx: { failedPageRepository: IFailedPageRepository }
): Promise<FailedPage[]> {
  return await repoCtx.failedPageRepository.listBySession(scanningSessionId);
}