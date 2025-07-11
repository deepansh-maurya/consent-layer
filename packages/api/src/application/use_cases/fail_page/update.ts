import { FailedPage } from "../../../domain/failed_page";
import { IFailedPageRepository } from "../../../domain/repositories/IFailPageRepository";

export async function updateFailedPage(
  failedPage: FailedPage,
  repoCtx: { failedPageRepository: IFailedPageRepository }
): Promise<FailedPage> {
  return await repoCtx.failedPageRepository.update(failedPage);
}