// /infrastructure/repositories/PgUserSessionRepository.ts

import { IUserSessionRepository } from "../../../domain/repositories/IUserSessionRepository";
import { UserSession } from "../../../domain/user_session";
import { prisma } from "../../db/prisma/prisma";


export class PgUserSessionRepository implements IUserSessionRepository {
  async create(session: UserSession): Promise<UserSession> {
    const created = await prisma.userSession.create({
      data: {
        id: session.id,
        orgId: session.orgId,
        userId: session.userId,
        sessionId: session.sessionId,
        consentStatus: session.consentStatus,
        lastUpdated: session.lastUpdated,
      },
    });
    return this.toDomain(created);
  }

  async findById(id: string): Promise<UserSession | null> {
    const found = await prisma.userSession.findUnique({ where: { id } });
    return found ? this.toDomain(found) : null;
  }

  async findByUser(orgId: string, userId: string): Promise<UserSession[]> {
    const sessions = await prisma.userSession.findMany({ where: { orgId, userId } });
    return sessions.map(this.toDomain);
  }

  async update(session: UserSession): Promise<UserSession> {
    const updated = await prisma.userSession.update({
      where: { id: session.id },
      data: {
        consentStatus: session.consentStatus,
        lastUpdated: session.lastUpdated,
      },
    });
    return this.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await prisma.userSession.delete({ where: { id } });
  }

  private toDomain(prismaSession: any): UserSession {
    return new UserSession(
      prismaSession.id,
      prismaSession.orgId,
      prismaSession.userId,
      prismaSession.sessionId,
      prismaSession.consentStatus,
      prismaSession.lastUpdated
    );
  }
}
