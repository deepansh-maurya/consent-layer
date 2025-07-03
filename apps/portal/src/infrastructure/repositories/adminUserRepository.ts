import { AdminUser } from "@/src/domain/admin_user";
import { IAdminUserRepository } from "@/src/domain/repositories/IAdminUserRepository";
import { HttpDS } from "../ds/httpDs";

export class AdminUserRepository implements IAdminUserRepository {

    private server: HttpDS

    constructor() {
        this.server = HttpDS.instance
    }

    async create(user: AdminUser): Promise<AdminUser> {
        return await this.server.post("/admin-users", user)
    }

    async findById(id: string): Promise<AdminUser | null> {
        return await this.server.get("/admin-users", `?orgId=${id}`)
    }

    async findByEmail(email: string): Promise<AdminUser | null> {
        return await this.server.get("/admin-users", `?email=${email}`)
    }

    async update(user: AdminUser): Promise<AdminUser> {
        return await this.server.put(`/admin-users/:${user.id}`, user)
    }
    async delete(id: string): Promise<void> {
        return await this.server.delete(`/admin-users/:${id}`)
    }

    async listByOrg(orgId: string): Promise<AdminUser[]> {
        return await this.server.get(`/admin-users`, `?orgid:${orgId}`)
    }

}