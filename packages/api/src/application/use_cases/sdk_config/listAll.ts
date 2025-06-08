// src/application/use_cases/sdk_config/listByOrg.ts
import { SDKConfig } from "../../../domain/sdk_config";
import type { ISdkConfigRepository } from "../../../domain/repositories/ISdkConfigRepository";

export default function listSdkConfigsByOrg(
  orgId: string,
  { sdkConfigRepository }: { sdkConfigRepository: ISdkConfigRepository }
): Promise<SDKConfig[]> {
  return sdkConfigRepository.listByOrg(orgId);
}
