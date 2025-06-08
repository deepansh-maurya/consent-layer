import { IUserSessionRepository } from "../../../domain/repositories/IUserSessionRepository";
import { UserSession } from "../../../domain/user_session";

export  function listUserSessionsByUser(
  orgId: string,
  userId: string,
  { userSessionRepository }: { userSessionRepository: IUserSessionRepository }
): Promise<UserSession[]> {
  return userSessionRepository.findByUser(orgId, userId);
}
