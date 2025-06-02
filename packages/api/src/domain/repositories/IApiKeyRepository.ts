// /domain/repositories/IApiKeyRepository.ts

import { APIKey } from "../api_key";


export interface IApiKeyRepository {
  create(apiKey: APIKey): Promise<APIKey>;
  findById(id: string): Promise<APIKey | null>;
  findByKey(key: string): Promise<APIKey | null>;
  listByOrg(orgId: string): Promise<APIKey[]>;
  update(apiKey: APIKey): Promise<APIKey>;
  revoke(id: string): Promise<void>;
}
