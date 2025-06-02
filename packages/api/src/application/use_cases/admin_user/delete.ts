import { IAdminUserRepository } from "../../../domain/repositories/IAdminUserRepository";

export default function deleteAdminUser(
  adminUserId: string,
  repoCtx: { adminUserRepository: IAdminUserRepository }
): Promise<void> {
  return repoCtx.adminUserRepository.delete(adminUserId);
}
