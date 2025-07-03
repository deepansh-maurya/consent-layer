// /domain/repositories/IUserSessionRepository.ts

import { UserSession } from "../user_session";

export interface IUserSessionRepository {
  create(session: UserSession): Promise<UserSession>;
  findById(id: string): Promise<UserSession | null>;
  findByUser(orgId: string, userId: string): Promise<UserSession[]>;
  update(session: UserSession): Promise<UserSession>;
  delete(id: string): Promise<void>;
}
