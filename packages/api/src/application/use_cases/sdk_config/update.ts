// src/application/use_cases/sdk_config/update.ts
import { SDKConfig } from "../../../domain/sdk_config";
import type { ISdkConfigRepository } from "../../../domain/repositories/ISdkConfigRepository";

export default async function updateSdkConfig(
  id: string,
  updates: { configJson?: Record<string, any>; isActive?: boolean },
  { sdkConfigRepository }: { sdkConfigRepository: ISdkConfigRepository }
): Promise<SDKConfig> {
  const existing = await sdkConfigRepository.findById(id);
  if (!existing) throw new Error("SDK config not found");

  if (updates.configJson) existing.configJson = updates.configJson;
  if (typeof updates.isActive === "boolean") existing.isActive = updates.isActive;
  existing.updatedAt = new Date();

  return sdkConfigRepository.update(existing);
}
