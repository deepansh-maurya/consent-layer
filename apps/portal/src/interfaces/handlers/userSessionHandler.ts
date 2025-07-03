import createUserSession from "@/src/application/use_cases/user_session/create";
import deleteUserSession from "@/src/application/use_cases/user_session/delete";
import getUserSessionById from "@/src/application/use_cases/user_session/get";
import { listUserSessionsByUser } from "@/src/application/use_cases/user_session/listAll";
import updateUserSession from "@/src/application/use_cases/user_session/update";
import { buildBeans } from "@/src/infrastructure/config/service-locator";





export class UserSessionHandler {

    // Create
    static async createUserSessionController(orgId: string,
        userId: string,
        sessionId: string,
        consentStatus: Record<string, any>,) {
        return await createUserSession(orgId, userId, sessionId, consentStatus, buildBeans())
    }

    // Get by ID
    static async getUserSessionByIdController(id: string) {
        return await getUserSessionById(id, buildBeans())
    }

    // List by Org + User
    static async listUserSessionsByUserController(orgId: string, userId: string) {
        return await listUserSessionsByUser(orgId, userId, buildBeans())
    }

    // Update
    static async updateUserSessionController(id: string, newConsentStatus: Record<string, any>,) {
        return await updateUserSession(id, newConsentStatus, buildBeans())
    }

    // Delete
    static async deleteUserSessionController(id: string) {
        return await deleteUserSession(id, buildBeans())
    }

}
