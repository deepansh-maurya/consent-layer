import { AdminUser } from "../../../domain/admin_user";
import { IAdminUserRepository } from "../../../domain/repositories/IAdminUserRepository";

export default function listAdminUsersByOrg(
  orgId: string,
  repoCtx: { adminUserRepository: IAdminUserRepository }
): Promise<AdminUser[]> {
  return repoCtx.adminUserRepository.listByOrg(orgId);
}
