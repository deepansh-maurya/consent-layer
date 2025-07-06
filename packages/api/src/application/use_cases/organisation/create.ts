import { v4 as uuidv4 } from "uuid";
import type { IOrganisationRepository } from "../../../domain/repositories/IOrganisationRepository";
import { Organization } from "../../../domain/organisation";
import { createDatabaseForOrg, runMigrationsOnOrgDb } from "../../../interfaces/multitenancy/dbUtils";
import updateOrganization from "./update";
import { buildBeans } from "../../../infrastructure/config/service-locator";

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// This function handles org + db creation
export async function createOrganizationWithDb(
  name: string,
  { organisationRepository }: { organisationRepository: IOrganisationRepository },
  url: string,
  country: string,
): Promise<Organization> {
  const now = new Date();
  const orgId = uuidv4();

  const dbHost = process.env.DB_HOST || "localhost";
  const dbUser = process.env.DB_USER || "postgres";
  const dbPassword = process.env.DB_PASSWORD || "your_pg_password";
  const dbPort = process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432;
  const dbName = `org_${orgId.replace(/-/g, "")}`;

  let baseSlug = slugify(name);
  let slug = baseSlug;
  let count = 1;

  while (await organisationRepository.findBySlug(slug)) {
    slug = `${baseSlug}-${count++}`;
  }

  let org = new Organization(orgId, name, now, now, slug, url, country);
  org = await organisationRepository.create(org);

  await createDatabaseForOrg(dbName, dbHost, dbUser, dbPassword, dbPort);

  await runMigrationsOnOrgDb(dbName, dbHost, dbUser, dbPassword, dbPort);

  const serviceLocator = buildBeans()

  const updatedOrg = await updateOrganization(org.id, { dbHost, dbName, dbPassword, dbPort, dbUser }, serviceLocator);
  return org;
}
