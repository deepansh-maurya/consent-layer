// src/infrastructure/pg/PgPageScanResultRepository.ts

import { PageScanResult } from "../../../domain/page_scan";
import { IPageScanResultRepository } from "../../../domain/repositories/IPageScanRepository";
import { prisma } from "../../db/prisma/prisma";


export class PgPageScanResultRepository implements IPageScanResultRepository {
  async create(result: PageScanResult): Promise<PageScanResult> {
    const created = await prisma.pageScanResult.create({
      data: {
        id: result.id,
        scanningSessionId: result.scanningSessionId,
        url: result.url,
        statusCode: result.statusCode,
        parentUrl: result.parentUrl,
        depth: result.depth,
        scanResult: result.scanResult,
        trackers: result.trackers,
        securityIssues: result.securityIssues,
        complianceIssues: result.complianceIssues,
        cookies: result.cookies,
        screenshotUrl: result.screenshotUrl,
        timeTakenMs: result.timeTakenMs,
        scannedAt: result.scannedAt,
      }
    });
    return new PageScanResult(
      created.id, created.scanningSessionId, created.url, created.statusCode, created.parentUrl,
      created.depth, created.scanResult, created.trackers, created.securityIssues,
      created.complianceIssues, created.cookies, created.screenshotUrl, created.timeTakenMs,
      created.scannedAt
    );
  }

  async findById(id: string): Promise<PageScanResult | null> {
    const found = await prisma.pageScanResult.findUnique({ where: { id } });
    return found
      ? new PageScanResult(
          found.id, found.scanningSessionId, found.url, found.statusCode, found.parentUrl,
          found.depth, found.scanResult, found.trackers, found.securityIssues,
          found.complianceIssues, found.cookies, found.screenshotUrl, found.timeTakenMs,
          found.scannedAt
        )
      : null;
  }

  async list(): Promise<PageScanResult[]> {
    const all = await prisma.pageScanResult.findMany();
    return all.map(result =>
      new PageScanResult(
        result.id, result.scanningSessionId, result.url, result.statusCode, result.parentUrl,
        result.depth, result.scanResult, result.trackers, result.securityIssues,
        result.complianceIssues, result.cookies, result.screenshotUrl, result.timeTakenMs,
        result.scannedAt
      )
    );
  }

  async listBySession(sessionId: string): Promise<PageScanResult[]> {
    const results = await prisma.pageScanResult.findMany({ where: { scanningSessionId: sessionId } });
    return results.map(result =>
      new PageScanResult(
        result.id, result.scanningSessionId, result.url, result.statusCode, result.parentUrl,
        result.depth, result.scanResult, result.trackers, result.securityIssues,
        result.complianceIssues, result.cookies, result.screenshotUrl, result.timeTakenMs,
        result.scannedAt
      )
    );
  }

  async update(result: PageScanResult): Promise<PageScanResult> {
    const updated = await prisma.pageScanResult.update({
      where: { id: result.id },
      data: {
        scanningSessionId: result.scanningSessionId,
        url: result.url,
        statusCode: result.statusCode,
        parentUrl: result.parentUrl,
        depth: result.depth,
        scanResult: result.scanResult,
        trackers: result.trackers,
        securityIssues: result.securityIssues,
        complianceIssues: result.complianceIssues,
        cookies: result.cookies,
        screenshotUrl: result.screenshotUrl,
        timeTakenMs: result.timeTakenMs,
        scannedAt: result.scannedAt,
      }
    });
    return new PageScanResult(
      updated.id, updated.scanningSessionId, updated.url, updated.statusCode, updated.parentUrl,
      updated.depth, updated.scanResult, updated.trackers, updated.securityIssues,
      updated.complianceIssues, updated.cookies, updated.screenshotUrl, updated.timeTakenMs,
      updated.scannedAt
    );
  }
}
