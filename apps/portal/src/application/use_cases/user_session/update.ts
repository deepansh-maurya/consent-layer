// src/application/use_cases/user_session/update.ts
import { UserSession } from "../../../domain/user_session";
import type { IUserSessionRepository } from "../../../domain/repositories/IUserSessionRepository";

export default async function updateUserSession(
  id: string,
  newConsentStatus: Record<string, any>,
  { userSessionRepository }: { userSessionRepository: IUserSessionRepository }
): Promise<UserSession> {
  const existing = await userSessionRepository.findById(id);
  if (!existing) throw new Error("User session not found");
  existing.updateConsent(newConsentStatus);
  return userSessionRepository.update(existing);
}
