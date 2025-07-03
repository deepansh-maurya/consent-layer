import { Organization } from "../../../domain/organisation";
import type { IOrganisationRepository } from "../../../domain/repositories/IOrganisationRepository";

type OrgUpdateFields = {
  name?: string;
  dbName?: string;
  dbHost?: string;
  dbUser?: string;
  dbPassword?: string;
  dbPort?: number;
  dbSchema?: string;
};

export default async function updateOrganization(
  id: string,
  updates: OrgUpdateFields,
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<Organization> {
  const existing = await organisationRepository.findById(id);
  if (!existing) throw new Error("Organization not found");

  // Only update provided fields
  if (updates.name !== undefined) existing.name = updates.name;
  if (updates.dbName !== undefined) existing.dbName = updates.dbName;
  if (updates.dbHost !== undefined) existing.dbHost = updates.dbHost;
  if (updates.dbUser !== undefined) existing.dbUser = updates.dbUser;
  if (updates.dbPassword !== undefined) existing.dbPassword = updates.dbPassword;
  if (updates.dbPort !== undefined) existing.dbPort = updates.dbPort;
  if (updates.dbSchema !== undefined) existing.dbSchema = updates.dbSchema;

  existing.updatedAt = new Date();
  return organisationRepository.update(existing);
}
