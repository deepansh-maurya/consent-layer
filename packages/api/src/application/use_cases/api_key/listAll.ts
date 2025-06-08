// src/application/use_cases/api_key/listAll.ts

import { APIKey } from "../../../domain/api_key";
import { IApiKeyRepository } from "../../../domain/repositories/IApiKeyRepository";

export default async function listApiKeysByOrg(
  orgId: string,
  { apiKeyRepository }: { apiKeyRepository: IApiKeyRepository }
): Promise<APIKey[]> {
  return apiKeyRepository.listByOrg(orgId);
}
