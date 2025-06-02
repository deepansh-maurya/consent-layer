// /infrastructure/repositories/PgSdkConfigRepository.ts

import { ISdkConfigRepository } from "../../../domain/repositories/ISdkConfigRepository";
import { SDKConfig } from "../../../domain/sdk_config";
import { prisma } from "../../db/prisma/prisma";


export class PgSdkConfigRepository implements ISdkConfigRepository {
  async create(config: SDKConfig): Promise<SDKConfig> {
    const created = await prisma.sdkConfig.create({
      data: {
        id: config.id,
        orgId: config.orgId,
        configJson: config.configJson,
        isActive: config.isActive,
        createdAt: config.createdAt,
        updatedAt: config.updatedAt,
      },
    });
    return this.toDomain(created);
  }

  async findById(id: string): Promise<SDKConfig | null> {
    const found = await prisma.sdkConfig.findUnique({ where: { id } });
    return found ? this.toDomain(found) : null;
  }

  async findActiveByOrg(orgId: string): Promise<SDKConfig | null> {
    const found = await prisma.sdkConfig.findFirst({ where: { orgId, isActive: true } });
    return found ? this.toDomain(found) : null;
  }

  async listByOrg(orgId: string): Promise<SDKConfig[]> {
    const all = await prisma.sdkConfig.findMany({ where: { orgId } });
    return all.map(this.toDomain);
  }

  async update(config: SDKConfig): Promise<SDKConfig> {
    const updated = await prisma.sdkConfig.update({
      where: { id: config.id },
      data: {
        configJson: config.configJson,
        isActive: config.isActive,
        updatedAt: config.updatedAt,
      },
    });
    return this.toDomain(updated);
  }

  async deactivateAll(orgId: string): Promise<void> {
    await prisma.sdkConfig.updateMany({
      where: { orgId },
      data: { isActive: false },
    });
  }

  private toDomain(prismaConfig: any): SDKConfig {
    return new SDKConfig(
      prismaConfig.id,  
      prismaConfig.orgId,
      prismaConfig.configJson,
      prismaConfig.isActive,
      prismaConfig.createdAt,
      prismaConfig.updatedAt
    );
  }
}
