import { UserSession } from "@/src/domain/user_session";
import { IUserSessionRepository } from "../../../domain/repositories/IUserSessionRepository";

export  function listUserSessionsByUser(
  orgId: string,
  userId: string,
  { userSessionRepository }: { userSessionRepository: IUserSessionRepository }
): Promise<UserSession[]> {
  return userSessionRepository.findByUser(orgId, userId);
}
