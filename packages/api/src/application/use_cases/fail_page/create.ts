// src/application/failedPage/createFailedPage.ts
import { v4 as uuidv4 } from "uuid";
import { IFailedPageRepository } from "../../../domain/repositories/IFailPageRepository";
import { FailedPage } from "../../../domain/failed_page";

export async function createFailedPage(
  scanningSessionId: string,
  url: string,
  failReason: string,
  attempts: number,
  lastAttemptAt: Date,
  message: string | null,
  parentUrl: string | null,
  repoCtx: { failedPageRepository: IFailedPageRepository }
): Promise<FailedPage>  {
  const failedPage = new FailedPage(
    uuidv4(), scanningSessionId, url, failReason, attempts, lastAttemptAt, message, parentUrl
  );
  return await repoCtx.failedPageRepository.create(failedPage);
}
