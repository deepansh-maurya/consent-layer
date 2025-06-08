import { SDKConfig } from "../../domain/sdk_config";

export const sdkConfigSerializer = {
  serialize(config: SDKConfig) {
    return {
      id: config.id,
      orgId: config.orgId,
      configJson: config.configJson,
      isActive: config.isActive,
      createdAt: config.createdAt.toISOString(),
      updatedAt: config.updatedAt.toISOString()
    };
  }
};
