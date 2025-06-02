import { Request, Response } from "express";
import createAdminUser from "../../application/use_cases/admin_user/create";
import deleteAdminUser from "../../application/use_cases/admin_user/delete";
import getAdminUserById from "../../application/use_cases/admin_user/get";
import listAdminUsersByOrg from "../../application/use_cases/admin_user/listAll";
import updateAdminUser from "../../application/use_cases/admin_user/update";
import { adminUserSerializer } from "../serializers/adminUserSerializer";
import { ServiceLocator } from "../../infrastructure/config/service-locator";

// You might need a repository instance or service locator; adapt as needed

export async function createAdminUserController(req: Request, res: Response) {
    try {
        const { orgId, email, passwordHash, role } = req.body;
        // Adjust context, e.g. pass repository or serviceLocator if needed
        const serviceLocator = req.app.locals as ServiceLocator;
        const adminUser = await createAdminUser(orgId, email, passwordHash, role, serviceLocator);
        res.status(201).json(adminUserSerializer.serialize(adminUser));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function listAdminUsersByOrgController(req: Request, res: Response) {
    try {
        const { orgId } = req.query as { orgId: string };
        const serviceLocator = req.app.locals as ServiceLocator;

        const adminUsers = await listAdminUsersByOrg(orgId, serviceLocator);
        res.json(adminUsers.map(adminUserSerializer.serialize));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function getAdminUserByIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const serviceLocator = req.app.locals as ServiceLocator;

        const adminUser = await getAdminUserById(id, serviceLocator);
        if (!adminUser) {
            res.status(404).json({ error: "Admin user not found" });
            return;
        }
        res.json(adminUserSerializer.serialize(adminUser));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function updateAdminUserController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const updates = req.body; // Should match expected update fields
        const serviceLocator = req.app.locals as ServiceLocator;

        const updatedAdminUser = await updateAdminUser(id, updates, serviceLocator);
        res.json(adminUserSerializer.serialize(updatedAdminUser));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function deleteAdminUserController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const serviceLocator = req.app.locals as ServiceLocator;

        await deleteAdminUser(id, serviceLocator);
        res.status(204).send();
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}
