import { MongoConsentEventRepository } from "../repositories/mongodb/PgConsentEventRepository";
import { PgAdminUserRepository } from "../repositories/postgres/PgAdminUserRepository";
import { PgApiKeyRepository } from "../repositories/postgres/PgApiKeyRepository";
import { PgOrganisationRepository } from "../repositories/postgres/PgOrganisationRepository";
import { PgSdkConfigRepository } from "../repositories/postgres/PgSdkConfigRepository";
import { PgUserSessionRepository } from "../repositories/postgres/PgUserSessionRepository";

export interface ServiceLocator {
    adminUserRepository: PgAdminUserRepository;
    apiKeyRepository: PgApiKeyRepository
    consentEventRepository: MongoConsentEventRepository
    organisationRepository: PgOrganisationRepository
    sdkConfigRepository: PgSdkConfigRepository
    userSessionRepository: PgUserSessionRepository
}
export function buildBeans(): ServiceLocator {
    return {
        adminUserRepository: new PgAdminUserRepository(),
        apiKeyRepository: new PgApiKeyRepository(),
        consentEventRepository: new MongoConsentEventRepository(),
        organisationRepository: new PgOrganisationRepository(),
        sdkConfigRepository: new PgSdkConfigRepository(),
        userSessionRepository: new PgUserSessionRepository()
    }
}