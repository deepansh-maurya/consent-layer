// src/application/use_cases/api_key/create.ts

import { v4 as uuidv4 } from "uuid";
import { APIKey } from "../../../domain/api_key";
import { IApiKeyRepository } from "../../../domain/repositories/IApiKeyRepository";

export default async function createApiKey(
  orgId: string,
  expiresAt: Date | null,
  { apiKeyRepository }: { apiKeyRepository: IApiKeyRepository }
): Promise<APIKey> {
  // Generate the actual API key string (could be random/secure)
  const apiKeyString = uuidv4().replace(/-/g, "") + uuidv4().replace(/-/g, "");

  const now = new Date();
  const apiKey = new APIKey(
    uuidv4(),
    orgId,
    apiKeyString,
    now,
    expiresAt,
    true
  );

  return apiKeyRepository.create(apiKey);
}
