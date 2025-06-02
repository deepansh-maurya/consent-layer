// /infrastructure/repositories/PgOrganisationRepository.ts

import { Organization } from "../../../domain/organisation";
import { IOrganisationRepository } from "../../../domain/repositories/IOrganisationRepository";
import { prisma } from "../../db/prisma/prisma";


export class PgOrganisationRepository implements IOrganisationRepository {
  async create(org: Organization): Promise<Organization> {
    const created = await prisma.organization.create({
      data: {
        id: org.id,
        name: org.name,
        createdAt: org.createdAt,
        updatedAt: org.updatedAt,
      },
    });
    return new Organization(created.id, created.name, created.createdAt, created.updatedAt);
  }

  async findById(id: string): Promise<Organization | null> {
    const found = await prisma.organization.findUnique({ where: { id } });
    return found ? new Organization(found.id, found.name, found.createdAt, found.updatedAt) : null;
  }

  async findByName(name: string): Promise<Organization | null> {
    const found = await prisma.organization.findUnique({ where: { name } });
    return found ? new Organization(found.id, found.name, found.createdAt, found.updatedAt) : null;
  }

  async update(org: Organization): Promise<Organization> {
    const updated = await prisma.organization.update({
      where: { id: org.id },
      data: {
        name: org.name,
        updatedAt: org.updatedAt,
      },
    });
    return new Organization(updated.id, updated.name, updated.createdAt, updated.updatedAt);
  }

  async delete(id: string): Promise<void> {
    await prisma.organization.delete({ where: { id } });
  }

  async list(): Promise<Organization[]> {
    const all = await prisma.organization.findMany();
    return all.map(org => new Organization(org.id, org.name, org.createdAt, org.updatedAt));
  }
}
