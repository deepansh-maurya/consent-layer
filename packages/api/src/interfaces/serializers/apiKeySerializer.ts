import { APIKey } from "../../domain/api_key";

export const apiKeySerializer = {
  serialize(apiKey: APIKey) {
    return {
      id: apiKey.id,
      orgId: apiKey.orgId,
      // Only show the actual key if you want to! (e.g. on creation)
      // key: apiKey.key,
      createdAt: apiKey.createdAt.toISOString(),
      lastUsedAt: apiKey.lastUsedAt ? apiKey.lastUsedAt : null,
      revoked: apiKey.revoked,
    };
  },

  // Optionally, a method to show the key, e.g., only at creation:
  serializeWithKey(apiKey: APIKey) {
    return {
      ...this.serialize(apiKey),
      key: apiKey.key,
    };
  }
};
