// src/application/use_cases/api_key/create.ts
import { v4 as uuidv4 } from "uuid";
import { APIKey } from "../../../domain/api_key";
import { IApiKeyRepository } from "../../../domain/repositories/IApiKeyRepository";


export default async function createApiKey(
  orgId: string,
  { apiKeyRepository }: { apiKeyRepository: IApiKeyRepository }
): Promise<APIKey> {

  // Hash the API key for storage

  const now = new Date();
  const apiKey = new APIKey(
    uuidv4(),          // id
    orgId,
    '',        // store the hash, NOT the raw key!
    now,
    now,
    now,
    true
  );

  // Save the hashed API key
  return await apiKeyRepository.create(apiKey);
}
