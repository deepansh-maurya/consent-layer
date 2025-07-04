import { IOrganisationRepository } from "@/src/domain/repositories/IOrganisationRepository";
import { HttpDS } from "../ds/httpDs";
import { Organization } from "@/src/domain/organisation";

export class OrganisationRepository implements IOrganisationRepository {
    private server: HttpDS

    constructor() {
        this.server = HttpDS.instance
    }

    async create(org: string, admin_name: string, admin_email: string, url: string, country: string, password: string,): Promise<Organization> {
        return await this.server.post("/", { name: org,url, admin_name, admin_email, password, country})
    }

    async findById(id: string): Promise<Organization | null> {
        return await this.server.get(`/${id}`)
    }

    async findByName(name: string): Promise<Organization | null> {
        return await this.server.get("by-name", name)
    }

    async update(id: string, org: Organization): Promise<Organization> {
        return await this.server.put(`/${id}`, org)
    }

    async delete(id: string): Promise<void> {
        return await this.server.delete(`/${id}`)
    }

    async findBySlug(slug: string): Promise<Organization | null> {
        return await this.server.get(`/slug/${slug}`)
    }

}
