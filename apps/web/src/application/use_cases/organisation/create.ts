import { Organization } from "@/src/domain/organisation";
import { IOrganisationRepository } from "@/src/domain/repositories/IOrganisationRepository";

// This function handles org + db creation
export async function createOrganization(
  name: string, admin_name: string, admin_email: string, url: string, country: string, password: string,
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<Organization> {

  return await organisationRepository.create(name, admin_name, admin_email, url, country, password)
}
