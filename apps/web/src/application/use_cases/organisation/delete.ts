// src/application/use_cases/organization/delete.ts

import { IOrganisationRepository } from "@/src/domain/repositories/IOrganisationRepository";


export default function deleteOrganization(
  id: string,
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<void> {
  return organisationRepository.delete(id);
}
