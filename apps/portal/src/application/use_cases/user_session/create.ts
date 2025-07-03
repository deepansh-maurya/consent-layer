// src/application/use_cases/user_session/create.ts
import { UserSession } from "../../../domain/user_session";
import { v4 as uuidv4 } from "uuid";
import type { IUserSessionRepository } from "../../../domain/repositories/IUserSessionRepository";

export default async function createUserSession(
  orgId: string,
  userId: string,
  sessionId: string,
  consentStatus: Record<string, any>,
  { userSessionRepository }: { userSessionRepository: IUserSessionRepository }
): Promise<UserSession> {
  const session = new UserSession(
    uuidv4(),
    orgId,
    userId,
    sessionId,
    consentStatus,
    new Date()
  );
  return userSessionRepository.create(session);
}
