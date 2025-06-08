import { v4 as uuidv4 } from "uuid";
import type { IOrganisationRepository } from "../../../domain/repositories/IOrganisationRepository";
import { Organization } from "../../../domain/organisation";
import { createDatabaseForOrg, runMigrationsOnOrgDb } from "../../../interfaces/multitenancy/dbUtils";
import updateOrganization from "./update";
import { buildBeans } from "../../../infrastructure/config/service-locator";

// This function handles org + db creation
export async function createOrganizationWithDb(
  name: string,
  { organisationRepository }: { organisationRepository: IOrganisationRepository }
): Promise<Organization> {
  const now = new Date();
  const orgId = uuidv4();

  // 1. Generate org DB credentials (here using the same creds for every org DB, you can randomize per org if you wish)
  const dbHost = process.env.DB_HOST || "localhost";
  const dbUser = process.env.DB_USER || "postgres";
  const dbPassword = process.env.DB_PASSWORD || "your_pg_password";
  const dbPort = process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432;
  const dbName = `org_${orgId.replace(/-/g, "")}`;

  // 2. Save org in main db (without db connection info yet)
  let org = new Organization(orgId, name, now, now);

  org = await organisationRepository.create(org);

  // 3. Create new DB for the org (catch error if DB already exists)
  await createDatabaseForOrg(dbName, dbHost, dbUser, dbPassword, dbPort);

  // 4. Run migrations (to setup tables) in new org DB
  await runMigrationsOnOrgDb(dbName, dbHost, dbUser, dbPassword, dbPort);

  const serviceLocator = buildBeans()

  // 5. Update the org row in main db with db connection info 
  const updatedOrg = await updateOrganization(org.id, {dbHost,dbName,dbPassword,dbPort,dbUser}, serviceLocator);
  return org;
}
