// /infrastructure/repositories/PgAdminUserRepository.ts

import { AdminUser } from "../../../domain/admin_user";
import { IAdminUserRepository } from "../../../domain/repositories/IAdminUserRepository";
import { prisma } from "../../db/prisma/prisma";


export class PgAdminUserRepository implements IAdminUserRepository {
  async create(user: AdminUser): Promise<AdminUser> {
    const created = await prisma.adminUser.create({
      data: {
        id: user.id,
        orgId: user.orgId,
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
    return this.toDomain(created);
  }

  async findById(id: string): Promise<AdminUser | null> {
    const found = await prisma.adminUser.findUnique({ where: { id } });
    return found ? this.toDomain(found) : null;
  }

  async findByEmail(email: string): Promise<AdminUser | null> {
    const found = await prisma.adminUser.findUnique({ where: { email } });
    return found ? this.toDomain(found) : null;
  }

  async update(user: AdminUser): Promise<AdminUser> {
    const updated = await prisma.adminUser.update({
      where: { id: user.id },
      data: {
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role,
        updatedAt: user.updatedAt,
      },
    });
    return this.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await prisma.adminUser.delete({ where: { id } });
  }

  async listByOrg(orgId: string): Promise<AdminUser[]> {
    const all = await prisma.adminUser.findMany({ where: { orgId } });
    return all.map(this.toDomain);
  }

  // Helper to convert Prisma type to domain type
  private toDomain(prismaUser: any): AdminUser {
    return new AdminUser(
      prismaUser.id,
      prismaUser.orgId,
      prismaUser.email,
      prismaUser.passwordHash,
      prismaUser.role,
      prismaUser.createdAt,
      prismaUser.updatedAt
    );
  }
}
