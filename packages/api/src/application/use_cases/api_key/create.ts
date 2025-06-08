// src/application/use_cases/api_key/create.ts

import { v4 as uuidv4 } from "uuid";
import { APIKey } from "../../../domain/api_key";
import { IApiKeyRepository } from "../../../domain/repositories/IApiKeyRepository";
import { hashApiKey } from "../../../utils/utils";


export default async function createApiKey(
  orgId: string,
  expiresAt: Date | null | number,
  { apiKeyRepository }: { apiKeyRepository: IApiKeyRepository }
): Promise<{ apiKey: APIKey; rawKey: string }> {
  // Generate a secure API key string
  const rawApiKey = uuidv4().replace(/-/g, "") + uuidv4().replace(/-/g, "");

  // Hash the API key for storage
  const apiKeyHash = hashApiKey(rawApiKey);

  const now = new Date();
  const apiKey = new APIKey(
    uuidv4(),          // id
    orgId,
    apiKeyHash,        // store the hash, NOT the raw key!
    now,
    expiresAt,
    true
  );

  // Save the hashed API key
  await apiKeyRepository.create(apiKey);

  // Return the raw key (for the admin to copy/save), but DO NOT store it
  return { apiKey, rawKey: rawApiKey };
}
