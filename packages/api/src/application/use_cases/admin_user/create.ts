import { AdminUser } from "../../../domain/admin_user";
import { IAdminUserRepository } from "../../../domain/repositories/IAdminUserRepository";
import { PgAdminUserRepository } from "../../../infrastructure/repositories/postgres/PgAdminUserRepository";


export default async function createAdminUser(
  orgId: string,
  email: string,
  passwordHash: string,
  role: 'owner' | 'admin' | 'viewer',
  repoCtx: { adminUserRepository: IAdminUserRepository }
): Promise<AdminUser> {
  const now = new Date();
  const adminUser = new AdminUser(
    undefined as unknown as string, // or use uuid
    orgId,
    email,
    passwordHash,
    role,
    now,
    now
  );
  return repoCtx.adminUserRepository.create(adminUser);
}
