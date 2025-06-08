// src/application/use_cases/sdk_config/getById.ts
import { SDKConfig } from "../../../domain/sdk_config";
import type { ISdkConfigRepository } from "../../../domain/repositories/ISdkConfigRepository";

export default function getSdkConfigById(
  id: string,
  { sdkConfigRepository }: { sdkConfigRepository: ISdkConfigRepository }
): Promise<SDKConfig | null> {
  return sdkConfigRepository.findById(id);
}



export  function getActiveSdkConfigByOrg(
  orgId: string,
  { sdkConfigRepository }: { sdkConfigRepository: ISdkConfigRepository }
): Promise<SDKConfig | null> {
  return sdkConfigRepository.findActiveByOrg(orgId);
}
