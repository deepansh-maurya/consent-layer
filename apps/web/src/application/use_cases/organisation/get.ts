// src/application/use_cases/organization/getById.ts

import { Organization } from "@/src/domain/organisation";
import { IOrganisationRepository } from "@/src/domain/repositories/IOrganisationRepository";


export default function getOrganizationById(
  id: string,
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<Organization | null> {
  return organisationRepository.findById(id);
}

export  function getOrganizationByName(
  name: string,
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<Organization | null> {
  return organisationRepository.findByName(name);
}



export  async function findOrganizationBySlug(
  slug: string,
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<Organization | null> {
  return organisationRepository.findBySlug(slug);
}
