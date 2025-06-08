import { NextFunction, Request, Response } from "express";
import { getPrismaForOrg } from "../../interfaces/multitenancy/dbUtils";
import { hashApiKey } from "../../utils/utils";
import { ServiceLocator } from "../config/service-locator";
import { Organization } from "../../domain/organisation";
import { PrismaClient } from "@prisma/client";
import { APIKey } from "../../domain/api_key";

interface AuthOrgRequest extends Request {
    org: Organization
    prisma: PrismaClient
    apikey: APIKey
}

// Express middleware
export async function apiKeyAuth(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.header("x-api-key")
    if (!apiKey) {
        res.status(401).json({ error: "Missing API key" });
        return
    }

    // Hash the key and look up in global API key DB
    const serviceLocator = req.app.locals as ServiceLocator;

    const apiKeyHash = hashApiKey(apiKey);
    const keyRow = await serviceLocator.apiKeyRepository.findByKey(apiKeyHash)

    if (!keyRow || keyRow.revoked) {
        res.status(401).json({ error: "Invalid or expired API key" });
        return
    }

    // Get org from orgId in key row, get DB creds
    const org = await serviceLocator.organisationRepository.findById(keyRow.orgId);

     const authReq = req as AuthOrgRequest;
    authReq.org = org!;
    authReq.prisma = getPrismaForOrg(org?.dbHost!, org?.dbUser!, org?.dbPassword!, org?.dbName!, org?.dbPort!);
    authReq.apikey = keyRow;

    next();
}
