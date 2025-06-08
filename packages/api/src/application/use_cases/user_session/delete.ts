// src/application/use_cases/user_session/delete.ts
import type { IUserSessionRepository } from "../../../domain/repositories/IUserSessionRepository";

export default function deleteUserSession(
  id: string,
  { userSessionRepository }: { userSessionRepository: IUserSessionRepository }
): Promise<void> {
  return userSessionRepository.delete(id);
}
