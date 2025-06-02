import { PgAdminUserRepository } from "../repositories/postgres/PgAdminUserRepository";

export interface ServiceLocator {
  adminUserRepository: PgAdminUserRepository;
}
export function buildBeans():ServiceLocator{
    return {
        adminUserRepository: new PgAdminUserRepository(),

    }
}