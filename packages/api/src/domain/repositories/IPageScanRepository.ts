// src/domain/interfaces/IPageScanResultRepository.ts

import { PageScanResult } from "../page_scan";


export interface IPageScanResultRepository {
  create(result: PageScanResult): Promise<PageScanResult>;
  findById(id: string): Promise<PageScanResult | null>;
  list(): Promise<PageScanResult[]>;
  listBySession(sessionId: string): Promise<PageScanResult[]>;
  update(result: PageScanResult): Promise<PageScanResult>;
}
