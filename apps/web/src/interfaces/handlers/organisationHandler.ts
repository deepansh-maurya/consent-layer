import { createOrganization } from "@/src/application/use_cases/organisation/create";
import deleteOrganization from "@/src/application/use_cases/organisation/delete";
import getOrganizationById, { findOrganizationBySlug, getOrganizationByName } from "@/src/application/use_cases/organisation/get";
import updateOrganization from "@/src/application/use_cases/organisation/update";
import { Organization } from "@/src/domain/organisation";
import { buildBeans } from "@/src/infrastructure/config/service-locator";

export class OrganisationHandler {

    // Create organization
    static async createOrganizationController(name: string, admin_name: string, admin_email: string, url: string, country: string, password: string) {
        return await createOrganization(name, admin_name, admin_email, url, country, password, buildBeans());
    }

    // Get org by ID
    static async getOrganizationByIdController(id: string) {
        return await getOrganizationById(id, buildBeans())

    }

    // Get org by name
    static async getOrganizationByNameController(name: string) {
        return await getOrganizationByName(name, buildBeans())
    }

    // Update org
    static async updateOrganizationController(id: string, org: Organization) {
        return await updateOrganization(id, org, buildBeans())
    }

    // Delete org
    static async deleteOrganizationController(id: string) {
        return await deleteOrganization(id, buildBeans())
    }

    static async findOrgBySlug(slug: string) {
        return await findOrganizationBySlug(slug, buildBeans())
    }

}
