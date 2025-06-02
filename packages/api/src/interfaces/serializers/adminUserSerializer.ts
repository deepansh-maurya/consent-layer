import { AdminUser } from "../../domain/admin_user";

export const adminUserSerializer = {
  serialize(adminUser: AdminUser) {
    return {
      id: adminUser.id,
      orgId: adminUser.orgId,
      email: adminUser.email,
      role: adminUser.role,
      createdAt: adminUser.createdAt.toISOString(),
      updatedAt: adminUser.updatedAt.toISOString(),
      // passwordHash is intentionally omitted
    };
  }
};
