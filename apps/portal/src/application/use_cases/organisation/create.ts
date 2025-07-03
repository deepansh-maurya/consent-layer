import { Organization } from "@/src/domain/organisation";
import { IOrganisationRepository } from "@/src/domain/repositories/IOrganisationRepository";

// This function handles org + db creation
export async function createOrganization(
  name: string,
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<Organization> {

  return await organisationRepository.create(name)

}
