// src/application/use_cases/sdk_config/deactivateAll.ts
import type { ISdkConfigRepository } from "../../../domain/repositories/ISdkConfigRepository";

export default function deactivateAllSdkConfigsForOrg(
  orgId: string,
  { sdkConfigRepository }: { sdkConfigRepository: ISdkConfigRepository }
): Promise<void> {
  return sdkConfigRepository.deactivateAll(orgId);
}
