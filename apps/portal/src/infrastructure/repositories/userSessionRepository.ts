import { IUserSessionRepository } from "@/src/domain/repositories/IUserSessionRepository";
import { UserSession } from "@/src/domain/user_session";
import { HttpDS } from "../ds/httpDs";

export class UserSessionRepository implements IUserSessionRepository {

    private server: HttpDS

    constructor() {
        this.server = HttpDS.instance
    }

    async create(session: UserSession): Promise<UserSession> {
        return await this.server.post("/", session)
    }

    async findById(id: string): Promise<UserSession | null> {
        return await this.server.get(`/${id}`)
    }

    async findByUser(orgId: string, userId: string): Promise<UserSession[]> {
        return await this.server.get(`/org/${orgId}/user/${userId}`)
    }

    async update(id:string,session: UserSession): Promise<UserSession> {
        return await this.server.put(`/${id}`,session)
    }

    async delete(id: string): Promise<void> {
        return await this.server.delete(`/${id}`)
    }
}
