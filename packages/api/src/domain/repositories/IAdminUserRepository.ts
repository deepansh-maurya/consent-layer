// /domain/repositories/IAdminUserRepository.ts

import { AdminUser } from "../admin_user";

export interface IAdminUserRepository {
  create(user: AdminUser): Promise<AdminUser>;
  findById(id: string): Promise<AdminUser | null>;
  findByEmail(email: string): Promise<AdminUser | null>;
  update(user: AdminUser): Promise<AdminUser>;
  delete(id: string): Promise<void>;
  listByOrg(orgId: string): Promise<AdminUser[]>;
}
