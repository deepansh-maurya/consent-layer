// /domain/repositories/ISdkConfigRepository.ts

import { SDKConfig } from "../sdk_config";


export interface ISdkConfigRepository {
  create(config: SDKConfig): Promise<SDKConfig>;
  findById(id: string): Promise<SDKConfig | null>;
  findActiveByOrg(orgId: string): Promise<SDKConfig | null>;
  listByOrg(orgId: string): Promise<SDKConfig[]>;
  update(config: SDKConfig): Promise<SDKConfig>;
  deactivateAll(orgId: string): Promise<void>;
}
    