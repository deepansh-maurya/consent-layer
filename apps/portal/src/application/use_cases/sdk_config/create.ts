// src/application/use_cases/sdk_config/create.ts
import { SDKConfig } from "../../../domain/sdk_config";
import { v4 as uuidv4 } from "uuid";
import type { ISdkConfigRepository } from "../../../domain/repositories/ISdkConfigRepository";

export default async function createSdkConfig(
  orgId: string,
  configJson: Record<string, any>,
  isActive: boolean,
  { sdkConfigRepository }: { sdkConfigRepository: ISdkConfigRepository }
): Promise<SDKConfig> {
  const now = new Date();
  const sdkConfig = new SDKConfig(uuidv4(), orgId, configJson, isActive, now, now);
  return sdkConfigRepository.create(sdkConfig);
}
