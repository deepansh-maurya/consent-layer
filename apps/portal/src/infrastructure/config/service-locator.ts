import { AdminUserRepository } from "../repositories/adminUserRepository";
import { ApiKeyRepository } from "../repositories/apiKeyRepository";
import { ConsentEventRepository } from "../repositories/consentEventRepository";
import { OrganisationRepository } from "../repositories/organisationRepository";
import { SdkConfigRepository } from "../repositories/sdkConfigRepository";
import { UserSessionRepository } from "../repositories/userSessionRepository";

export interface ServiceLocator {
    adminUserRepository: AdminUserRepository;
    apiKeyRepository: ApiKeyRepository,
    consentEventRepository: ConsentEventRepository,
    organisationRepository: OrganisationRepository
    sdkConfigRepository: SdkConfigRepository
    userSessionRepository: UserSessionRepository
}
export function buildBeans(): ServiceLocator {
    return {
        adminUserRepository: new AdminUserRepository(),
        apiKeyRepository: new ApiKeyRepository(),
        consentEventRepository: new ConsentEventRepository(),
        organisationRepository: new OrganisationRepository(),
        sdkConfigRepository: new SdkConfigRepository(),
        userSessionRepository: new UserSessionRepository()

    }
}