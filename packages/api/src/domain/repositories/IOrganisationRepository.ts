// /domain/repositories/IOrganisationRepository.ts

import { Organization } from "../organisation";

export interface IOrganisationRepository {
  create(org: Organization): Promise<Organization>;
  findById(id: string): Promise<Organization | null>;
  findByName(name: string): Promise<Organization | null>;
  update(org: Organization): Promise<Organization>;
  delete(id: string): Promise<void>;
  list(): Promise<Organization[]>;
  findBySlug(slug: string): Promise<Organization | null>;
}
