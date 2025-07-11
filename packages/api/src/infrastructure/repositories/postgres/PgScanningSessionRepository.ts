// src/infrastructure/pg/PgScanningSessionRepository.ts

import { IScanningSessionRepository } from "../../../domain/repositories/IScanningSessionRepository";
import { ScanningSession } from "../../../domain/scanning_session";
import { prisma } from "../../db/prisma/prisma";

export class PgScanningSessionRepository implements IScanningSessionRepository {
  async create(session: ScanningSession): Promise<ScanningSession> {
    const created = await prisma.scanningSession.create({
      data: {
        id: session.id,
        orgId: session.orgId,
        createdAt: session.createdAt,
        startedBy: session.startedBy,
        scanType: session.scanType,
        startUrls: session.startUrls,
        scanDepth: session.scanDepth,
        maxPages: session.maxPages,
        status: session.status,
        progressScanned: session.progressScanned,
        progressQueued: session.progressQueued,
        progressFailed: session.progressFailed,
        progressPending: session.progressPending,
        settings: session.settings,
        reportUrl: session.reportUrl,
        finishedAt: session.finishedAt,
      },
    });
    return new ScanningSession(
      created.id, created.orgId, created.createdAt, created.startedBy,
      created.scanType, created.startUrls, created.scanDepth, created.maxPages,
      created.status, created.progressScanned, created.progressQueued,
      created.progressFailed, created.progressPending, created.settings,
      created.reportUrl, created.finishedAt
    );
  }

  async findById(id: string): Promise<ScanningSession | null> {
    const found = await prisma.scanningSession.findUnique({ where: { id } });
    return found
      ? new ScanningSession(
          found.id, found.orgId, found.createdAt, found.startedBy, found.scanType,
          found.startUrls, found.scanDepth, found.maxPages, found.status,
          found.progressScanned, found.progressQueued, found.progressFailed,
          found.progressPending, found.settings, found.reportUrl, found.finishedAt
        )
      : null;
  }

  async update(session: ScanningSession): Promise<ScanningSession> {
    const updated = await prisma.scanningSession.update({
      where: { id: session.id },
      data: {
        ...session,
      },
    });
    return new ScanningSession(
      updated.id, updated.orgId, updated.createdAt, updated.startedBy,
      updated.scanType, updated.startUrls, updated.scanDepth, updated.maxPages,
      updated.status, updated.progressScanned, updated.progressQueued,
      updated.progressFailed, updated.progressPending, updated.settings,
      updated.reportUrl, updated.finishedAt
    );
  }

  async listByOrg(orgId: string): Promise<ScanningSession[]> {
    const sessions = await prisma.scanningSession.findMany({ where: { orgId } });
    return sessions.map(
      s =>
        new ScanningSession(
          s.id, s.orgId, s.createdAt, s.startedBy, s.scanType, s.startUrls,
          s.scanDepth, s.maxPages, s.status, s.progressScanned, s.progressQueued,
          s.progressFailed, s.progressPending, s.settings, s.reportUrl, s.finishedAt
        )
    );
  }

  async list(): Promise<ScanningSession[]> {
    const sessions = await prisma.scanningSession.findMany();
    return sessions.map(
      s =>
        new ScanningSession(
          s.id, s.orgId, s.createdAt, s.startedBy, s.scanType, s.startUrls,
          s.scanDepth, s.maxPages, s.status, s.progressScanned, s.progressQueued,
          s.progressFailed, s.progressPending, s.settings, s.reportUrl, s.finishedAt
        )
    );
  }
}
