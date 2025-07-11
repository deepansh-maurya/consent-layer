// src/domain/interfaces/IFailedPageRepository.ts

import { FailedPage } from "../failed_page";


export interface IFailedPageRepository {
  create(failedPage: FailedPage): Promise<FailedPage>;
  findById(id: string): Promise<FailedPage | null>;
  list(): Promise<FailedPage[]>;
  listBySession(sessionId: string): Promise<FailedPage[]>;
  update(failedPage: FailedPage): Promise<FailedPage>;
}
