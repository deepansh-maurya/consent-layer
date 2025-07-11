// src/infrastructure/pg/PgFailedPageRepository.ts

import { FailedPage } from "../../../domain/failed_page";
import { IFailedPageRepository } from "../../../domain/repositories/IFailPageRepository";
import { prisma } from "../../db/prisma/prisma";


export class PgFailedPageRepository implements IFailedPageRepository {
  async create(failedPage: FailedPage): Promise<FailedPage> {
    const created = await prisma.failedPage.create({
      data: {
        id: failedPage.id,
        scanningSessionId: failedPage.scanningSessionId,
        url: failedPage.url,
        failReason: failedPage.failReason,
        attempts: failedPage.attempts,
        lastAttemptAt: failedPage.lastAttemptAt,
        message: failedPage.message,
        parentUrl: failedPage.parentUrl,
      }
    });
    return new FailedPage(
      created.id, created.scanningSessionId, created.url,
      created.failReason, created.attempts, created.lastAttemptAt,
      created.message, created.parentUrl
    );
  }

  async findById(id: string): Promise<FailedPage | null> {
    const found = await prisma.failedPage.findUnique({ where: { id } });
    return found
      ? new FailedPage(
          found.id, found.scanningSessionId, found.url,
          found.failReason, found.attempts, found.lastAttemptAt,
          found.message, found.parentUrl
        )
      : null;
  }

  async list(): Promise<FailedPage[]> {
    const all = await prisma.failedPage.findMany();
    return all.map(failed =>
      new FailedPage(
        failed.id, failed.scanningSessionId, failed.url, failed.failReason,
        failed.attempts, failed.lastAttemptAt, failed.message, failed.parentUrl
      )
    );
  }

  async listBySession(sessionId: string): Promise<FailedPage[]> {
    const results = await prisma.failedPage.findMany({ where: { scanningSessionId: sessionId } });
    return results.map(failed =>
      new FailedPage(
        failed.id, failed.scanningSessionId, failed.url, failed.failReason,
        failed.attempts, failed.lastAttemptAt, failed.message, failed.parentUrl
      )
    );
  }

  async update(failedPage: FailedPage): Promise<FailedPage> {
    const updated = await prisma.failedPage.update({
      where: { id: failedPage.id },
      data: {
        scanningSessionId: failedPage.scanningSessionId,
        url: failedPage.url,
        failReason: failedPage.failReason,
        attempts: failedPage.attempts,
        lastAttemptAt: failedPage.lastAttemptAt,
        message: failedPage.message,
        parentUrl: failedPage.parentUrl
      }
    });
    return new FailedPage(
      updated.id, updated.scanningSessionId, updated.url, updated.failReason,
      updated.attempts, updated.lastAttemptAt, updated.message, updated.parentUrl
    );
  }
}
