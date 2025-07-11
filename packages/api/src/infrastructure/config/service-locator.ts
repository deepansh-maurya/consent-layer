import { MongoConsentEventRepository } from "../repositories/mongodb/MdbConsentEventRepository";
import { PgAdminUserRepository } from "../repositories/postgres/PgAdminUserRepository";
import { PgApiKeyRepository } from "../repositories/postgres/PgApiKeyRepository";
import { PgAuthRequestRepository } from "../repositories/postgres/PgAuthRequestRepository";
import { PgFailedPageRepository } from "../repositories/postgres/PgFailPageRepository";
import { PgOrganisationRepository } from "../repositories/postgres/PgOrganisationRepository";
import { PgPageScanResultRepository } from "../repositories/postgres/PgPageScanRepository";
import { PgScanningSessionRepository } from "../repositories/postgres/PgScanningSessionRepository";
import { PgSdkConfigRepository } from "../repositories/postgres/PgSdkConfigRepository";
import { PgUserSessionRepository } from "../repositories/postgres/PgUserSessionRepository";

export interface ServiceLocator {
    adminUserRepository: PgAdminUserRepository;
    apiKeyRepository: PgApiKeyRepository
    consentEventRepository: MongoConsentEventRepository
    organisationRepository: PgOrganisationRepository
    sdkConfigRepository: PgSdkConfigRepository
    userSessionRepository: PgUserSessionRepository
    authRequestRepository: PgAuthRequestRepository
    failedPageRepository: PgFailedPageRepository
    pageScanResultRepository: PgPageScanResultRepository
    scanningSessionRepository: PgScanningSessionRepository
}
export function buildBeans(): ServiceLocator {
    return {
        adminUserRepository: new PgAdminUserRepository(),
        apiKeyRepository: new PgApiKeyRepository(),
        consentEventRepository: new MongoConsentEventRepository(),
        organisationRepository: new PgOrganisationRepository(),
        sdkConfigRepository: new PgSdkConfigRepository(),
        userSessionRepository: new PgUserSessionRepository(),
        authRequestRepository: new PgAuthRequestRepository(),
        failedPageRepository: new PgFailedPageRepository(),
        pageScanResultRepository: new PgPageScanResultRepository(),
        scanningSessionRepository: new PgScanningSessionRepository()
    }
}