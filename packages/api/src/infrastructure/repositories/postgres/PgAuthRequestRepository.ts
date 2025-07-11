// src/infrastructure/pg/PgAuthRequestRepository.ts

import { AuthRequest } from "../../../domain/auth_request";
import { IAuthRequestRepository } from "../../../domain/repositories/IAuthRequest";
import { prisma } from "../../db/prisma/prisma";

export class PgAuthRequestRepository implements IAuthRequestRepository {
  async create(authRequest: AuthRequest): Promise<AuthRequest> {
    const created = await prisma.authRequest.create({
      data: {
        id: authRequest.id,
        scanningSessionId: authRequest.scanningSessionId,
        url: authRequest.url,
        reason: authRequest.reason,
        requestedAt: authRequest.requestedAt,
        providedBy: authRequest.providedBy,
        providedAt: authRequest.providedAt,
        status: authRequest.status,
      }
    });
    return new AuthRequest(
      created.id, created.scanningSessionId, created.url, created.reason,
      created.requestedAt, created.providedBy, created.providedAt, created.status
    );
  }

  async findById(id: string): Promise<AuthRequest | null> {
    const found = await prisma.authRequest.findUnique({ where: { id } });
    return found
      ? new AuthRequest(
          found.id, found.scanningSessionId, found.url, found.reason,
          found.requestedAt, found.providedBy, found.providedAt, found.status
        )
      : null;
  }

  async list(): Promise<AuthRequest[]> {
    const all = await prisma.authRequest.findMany();
    return all.map(a =>
      new AuthRequest(
        a.id, a.scanningSessionId, a.url, a.reason,
        a.requestedAt, a.providedBy, a.providedAt, a.status
      )
    );
  }

  async listBySession(sessionId: string): Promise<AuthRequest[]> {
    const all = await prisma.authRequest.findMany({ where: { scanningSessionId: sessionId } });
    return all.map(a =>
      new AuthRequest(
        a.id, a.scanningSessionId, a.url, a.reason,
        a.requestedAt, a.providedBy, a.providedAt, a.status
      )
    );
  }

  async update(authRequest: AuthRequest): Promise<AuthRequest> {
    const updated = await prisma.authRequest.update({
      where: { id: authRequest.id },
      data: {
        scanningSessionId: authRequest.scanningSessionId,
        url: authRequest.url,
        reason: authRequest.reason,
        requestedAt: authRequest.requestedAt,
        providedBy: authRequest.providedBy,
        providedAt: authRequest.providedAt,
        status: authRequest.status,
      }
    });
    return new AuthRequest(
      updated.id, updated.scanningSessionId, updated.url, updated.reason,
      updated.requestedAt, updated.providedBy, updated.providedAt, updated.status
    );
  }
}
