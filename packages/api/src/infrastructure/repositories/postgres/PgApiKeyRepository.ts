// /infrastructure/repositories/PgApiKeyRepository.ts

import { APIKey } from "../../../domain/api_key";
import { IApiKeyRepository } from "../../../domain/repositories/IApiKeyRepository";
import { prisma } from "../../db/prisma/prisma";


export class PgApiKeyRepository implements IApiKeyRepository {
  async create(apiKey: APIKey): Promise<APIKey> {
    const created = await prisma.apiKey.create({
      data: {
        id: apiKey.id,
        orgId: apiKey.orgId,
        key: apiKey.key,
        createdAt: apiKey.createdAt,
        lastUsedAt: apiKey.lastUsedAt,
        revoked: apiKey.revoked,
      },
    });
    return this.toDomain(created);
  }

  async findById(id: string): Promise<APIKey | null> {
    const found = await prisma.apiKey.findUnique({ where: { id } });
    return found ? this.toDomain(found) : null;
  }

  async findByKey(key: string): Promise<APIKey | null> {
    const found = await prisma.apiKey.findUnique({ where: { key } });
    return found ? this.toDomain(found) : null;
  }

  async listByOrg(orgId: string): Promise<APIKey[]> {
    const all = await prisma.apiKey.findMany({ where: { orgId } });
    return all.map(this.toDomain);
  }

  async update(apiKey: APIKey): Promise<APIKey> {
    const updated = await prisma.apiKey.update({
      where: { id: apiKey.id },
      data: {
        lastUsedAt: apiKey.lastUsedAt,
        revoked: apiKey.revoked,
      },
    });
    return this.toDomain(updated);
  }

  async revoke(id: string): Promise<void> {
    await prisma.apiKey.update({
      where: { id },
      data: { revoked: true },
    });
  }

  private toDomain(prismaApiKey: any): APIKey {
    return new APIKey(
      prismaApiKey.id,
      prismaApiKey.orgId,
      prismaApiKey.key,
      prismaApiKey.createdAt,
      prismaApiKey.lastUsedAt,
      prismaApiKey.revoked
    );
  }
}
