import { Request, Response } from "express";
import createAdminUser from "../../application/use_cases/admin_user/create";
import deleteAdminUser from "../../application/use_cases/admin_user/delete";
import getAdminUserById from "../../application/use_cases/admin_user/get";
import listAdminUsersByOrg from "../../application/use_cases/admin_user/listAll";
import updateAdminUser from "../../application/use_cases/admin_user/update";
import { adminUserSerializer } from "../serializers/adminUserSerializer";
import { ServiceLocator } from "../../infrastructure/config/service-locator";
import { hashPassword, verifyPassword } from "../../utils/utils";
import jwt from "jsonwebtoken";
import { getPrismaForOrg } from "../multitenancy/dbUtils";

// You might need a repository instance or service locator; adapt as needed

export async function createAdminUserController(req: Request, res: Response) {
    try {
        const { orgId, email, password, role } = req.body;

        const { hash, salt } = hashPassword(password);

        // Adjust context, e.g. pass repository or serviceLocator if needed
        const serviceLocator = req.app.locals as ServiceLocator;
        const adminUser = await createAdminUser(orgId, email, hash, salt, role, serviceLocator);
        
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

// Your JWT secret (should be in .env)

export async function adminUserLoginController(req: Request, res: Response) {
    try {
        const JWT_SECRET = process.env.JWT_SECRET!;
        const { email, password } = req.body;
        const orgSlug = req.header("x-org-slug"); // Or get from req.params if you use path-based routing

        if (!orgSlug) return res.status(400).json({ error: "Org slug is required" });

        const serviceLocator = req.app.locals as ServiceLocator;

        // 1. Lookup org by slug in global DB
        const org = await serviceLocator.organisationRepository.findBySlug(orgSlug);
        if (!org) return res.status(404).json({ error: "Organization not found" });

        // 2. Connect to org's DB
        const prisma = await getPrismaForOrg(org.dbHost!, org.dbUser!, org.dbPassword!, org.dbName!, org.dbPort!);

        // 3. Find admin user by email
        const adminUser = await prisma.adminUser.findUnique({ where: { email } });
        if (!adminUser) return res.status(401).json({ error: "Invalid credentials" });

        // 4. Verify password (use stored salt and hash)
        const isValid = verifyPassword(password, adminUser.passwordSalt, adminUser.passwordHash);
        if (!isValid) return res.status(401).json({ error: "Invalid credentials" });

        // 5. Issue JWT token (include orgId, userId, role)
        const token = jwt.sign(
            {
                userId: adminUser.id,
                orgId: org.id,
                email: adminUser.email,
                role: adminUser.role,
            },
            JWT_SECRET,
            { expiresIn: "2h" }
        );

        // 6. Respond with token and basic user info
        res.status(200).json({
            token,
            adminUser: {
                id: adminUser.id,
                email: adminUser.email,
                role: adminUser.role,
                orgId: org.id,
                orgSlug: org.slug,
            }
        });
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}