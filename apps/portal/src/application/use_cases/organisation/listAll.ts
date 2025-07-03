// src/application/use_cases/organization/getByName.ts

import { Organization } from "../../../domain/organisation";
import type { IOrganisationRepository } from "../../../domain/repositories/IOrganisationRepository";

export default function listOrganizations(
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<Organization[]> {
  return organisationRepository.list();
}
