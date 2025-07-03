import { AdminUser } from "../../../domain/admin_user";
import { IAdminUserRepository } from "../../../domain/repositories/IAdminUserRepository";

export default function getAdminUserById(
  adminUserId: string,
  repoCtx: { adminUserRepository: IAdminUserRepository }
): Promise<AdminUser | null> {
  return repoCtx.adminUserRepository.findById(adminUserId);
}
