// src/application/use_cases/user_session/getById.ts
import { UserSession } from "../../../domain/user_session";
import type { IUserSessionRepository } from "../../../domain/repositories/IUserSessionRepository";

export default function getUserSessionById(
  id: string,
  { userSessionRepository }: { userSessionRepository: IUserSessionRepository }
): Promise<UserSession | null> {
  return userSessionRepository.findById(id);
}


