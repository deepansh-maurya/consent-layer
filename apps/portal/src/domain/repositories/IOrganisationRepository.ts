// /domain/repositories/IOrganisationRepository.ts

import { Organization } from "../organisation";

export interface IOrganisationRepository {
  create(org: string): Promise<Organization>;
  findById(id: string): Promise<Organization | null>;
  findByName(name: string): Promise<Organization | null>;
  update(id:string,org: Organization): Promise<Organization>;
  delete(id: string): Promise<void>;
  // list(): Promise<Organization[]>;
  findBySlug(slug: string): Promise<Organization | null>;
}
