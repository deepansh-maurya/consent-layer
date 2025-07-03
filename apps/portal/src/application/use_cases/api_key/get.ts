// src/application/use_cases/api_key/get.ts

import { APIKey } from "../../../domain/api_key";
import { IApiKeyRepository } from "../../../domain/repositories/IApiKeyRepository";

export default async function getApiKeyById(
  apiKeyId: string,
  { apiKeyRepository }: { apiKeyRepository: IApiKeyRepository }
): Promise<APIKey | null> {
  return apiKeyRepository.findById(apiKeyId);
}
