'use strict';

import { AdminUser } from "../../../domain/admin_user";
import { IAdminUserRepository } from "../../../domain/repositories/IAdminUserRepository";


interface AdminUserUpdates {
  email?: string;
  passwordHash?: string;
  role?: 'owner' | 'admin' | 'viewer';
}

export default async function updateAdminUser(
  adminUserId: string,
  updates: AdminUserUpdates,
  repoCtx: { adminUserRepository: IAdminUserRepository }
): Promise<AdminUser> {
  const adminUser = await repoCtx.adminUserRepository.findById(adminUserId);
  if (!adminUser) throw new Error('Admin user not found');

  if (updates.email) adminUser.email = updates.email;
  if (updates.passwordHash) adminUser.passwordHash = updates.passwordHash;
  if (updates.role) adminUser.changeRole(updates.role);

  adminUser.updatedAt = new Date();

  return repoCtx.adminUserRepository.update(adminUser);
}
