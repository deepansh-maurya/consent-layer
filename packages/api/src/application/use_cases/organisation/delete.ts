// src/application/use_cases/organization/delete.ts

import type { IOrganisationRepository } from "../../../domain/repositories/IOrganisationRepository";

export default function deleteOrganization(
  id: string,
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<void> {
  return organisationRepository.delete(id);
}
