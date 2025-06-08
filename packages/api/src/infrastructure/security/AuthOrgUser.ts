import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ServiceLocator } from "../config/service-locator";
import { getPrismaForOrg } from "../../interfaces/multitenancy/dbUtils";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface AuthRequest extends Request {
    user?: any;
    prisma?: any;
}

export async function authOrgUser(req: AuthRequest, res: Response, next: NextFunction) {
    try {
        // 1. Get token from header
        const authHeader = req.header("authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
             res.status(401).json({ error: "Missing or invalid authorization header" });
             return
        }
        const token = authHeader.substring(7); // Remove "Bearer "

        // 2. Get slug from header
        const orgSlug = req.header("x-org-slug");
        if (!orgSlug) {
             res.status(400).json({ error: "Missing org slug" });
             return
        }

        // 3. Find org in global DB
        const serviceLocator = req.app.locals as ServiceLocator;
        const org = await serviceLocator.organisationRepository.findBySlug(orgSlug);
        if (!org) {
             res.status(404).json({ error: "Organization not found" });
             return
        }

        // 4. Verify and decode token
        let decoded: any;
        try {
            decoded = jwt.verify(token, JWT_SECRET);
        } catch {
             res.status(401).json({ error: "Invalid or expired token" });
             return
        }

        // 5. Optionally check orgId in token matches this org (extra safety)
        if (decoded.orgId !== org.id) {
             res.status(403).json({ error: "Token org does not match requested org" });
             return
        }

        // 6. Create Prisma client for this org and attach to req
        req.prisma = await getPrismaForOrg(org.dbHost!, org.dbUser!, org.dbPassword!, org.dbName!, org.dbPort!);

        // 7. Attach user info from token
        req.user = {
            userId: decoded.userId,
            email: decoded.email,
            role: decoded.role,
            orgId: decoded.orgId,
        };

        next();
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
}



//! create middleware for the api keys and then use them for apis auth