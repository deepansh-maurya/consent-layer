import createAdminUser from "@/src/application/use_cases/admin_user/create";
import deleteAdminUser from "@/src/application/use_cases/admin_user/delete";
import getAdminUserById from "@/src/application/use_cases/admin_user/get";
import listAdminUsersByOrg from "@/src/application/use_cases/admin_user/listAll";
import updateAdminUser from "@/src/application/use_cases/admin_user/update";
import { buildBeans } from "@/src/infrastructure/config/service-locator";

export class AdminHandler {

    static async createAdminHandler(orgId: string,
        email: string,
        passwordHash: string,
        salt: string,
        role: 'owner' | 'admin' | 'viewer',) {
            
        return await createAdminUser(
            orgId,
            email,
            passwordHash,
            salt,
            role,
            buildBeans()
        )
    }

    static async listAdminUsersByOrgController() {
        return await listAdminUsersByOrg( localStorage.getItem("orgId")!,buildBeans())
    }

    static async getAdminUserByIdController(id: string) {
        return await getAdminUserById(id, buildBeans())
    }

    static async updateAdminUserController(id: string, email: string, passwordHash: string, role: 'owner' | 'admin' | 'viewer') {
        return await updateAdminUser(id, { email, passwordHash, role }, buildBeans())
    }

    static async deleteAdminUserController(id: string) {
        return await deleteAdminUser(id, buildBeans())
    }



}
