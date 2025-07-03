import { APIKey } from "../../../domain/api_key";
import { IApiKeyRepository } from "../../../domain/repositories/IApiKeyRepository";


export default async function updateApiKey(
    lastUsedAt: Date,
    id: string,
    { apiKeyRepository }: { apiKeyRepository: IApiKeyRepository }): Promise<APIKey> {

    const apikey = await apiKeyRepository.findById(id)
    const updatedApiKey = new APIKey(
        apikey?.id!,
        apikey?.orgId!,
        apikey?.key!,
        apikey?.createdAt!,
        lastUsedAt,
        apikey?.expiresAt!,
        apikey?.revoked!
    )

    return await apiKeyRepository.update(id, updatedApiKey)

}