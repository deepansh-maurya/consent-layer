import { OrganisationRepository } from "../repositories/organisationRepository"

export interface ServiceLocator {
    organisationRepository: OrganisationRepository
}
export function buildBeans(): ServiceLocator {
    return {
        organisationRepository: new OrganisationRepository(),
    }
}