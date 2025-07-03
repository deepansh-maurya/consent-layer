import createApiKey from "@/src/application/use_cases/api_key/create"
import getApiKeyById from "@/src/application/use_cases/api_key/get"
import deleteApiKey from "@/src/application/use_cases/api_key/revoke"
import updateApiKey from "@/src/application/use_cases/api_key/update"
import { APIKey } from "@/src/domain/api_key"
import { buildBeans } from "@/src/infrastructure/config/service-locator"


export class ApiKeyHandler {

    static async create(orgId: string): Promise<APIKey> {
        return await createApiKey(orgId, buildBeans())
    }

    static async findById(id: string): Promise<APIKey | null> {
        return await getApiKeyById(id, buildBeans())
    }

    static async update(lastUsedAt: Date, id: string): Promise<APIKey> {
        return await updateApiKey(lastUsedAt, id, buildBeans())
    }

    static async revoke(key: string): Promise<void> {
        return await deleteApiKey(key, buildBeans())
    }
}