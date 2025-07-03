import { AdminUserRepository } from "../repositories/adminUserRepository";
import { ApiKeyRepository } from "../repositories/apiKeyRepository";

export interface ServiceLocator {
    adminUserRepository: AdminUserRepository;
    apiKeyRepository: ApiKeyRepository
}
export function buildBeans(): ServiceLocator {
    return {
        adminUserRepository: new AdminUserRepository(),
        apiKeyRepository: new ApiKeyRepository()
    }
}