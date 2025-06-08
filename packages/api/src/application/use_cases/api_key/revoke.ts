// src/application/use_cases/api_key/delete.ts

import { IApiKeyRepository } from "../../../domain/repositories/IApiKeyRepository";

export default async function deleteApiKey(
  apiKeyId: string,
  { apiKeyRepository }: { apiKeyRepository: IApiKeyRepository }
): Promise<void> {
  await apiKeyRepository.revoke(apiKeyId);
}
