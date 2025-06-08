import { Request, Response } from "express";
import createApiKey from "../../application/use_cases/api_key/create";
import getApiKeyById from "../../application/use_cases/api_key/get";
import listApiKeysByOrg from "../../application/use_cases/api_key/listAll";
import { ServiceLocator } from "../../infrastructure/config/service-locator";
import deleteApiKey from "../../application/use_cases/api_key/revoke";
import { apiKeySerializer } from "../serializers/apiKeySerializer";
export async function createApiKeyController(req: Request, res: Response) {
    try {
        const { orgId, expiresAt } = req.body;
        const serviceLocator = req.app.locals as ServiceLocator;

        // Now returns { apiKey, rawKey }
        const { apiKey, rawKey } = await createApiKey(orgId, expiresAt, serviceLocator);

        res.status(201).json({
            apiKey: apiKeySerializer.serialize(apiKey),
            rawKey // Only show once!
        });
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}


export async function listApiKeysByOrgController(req: Request, res: Response) {
    try {
        const { orgId } = req.query as { orgId: string };
        const serviceLocator = req.app.locals as ServiceLocator;
        const apiKeys = await listApiKeysByOrg(orgId, serviceLocator);
        res.json(apiKeys.map(apiKeySerializer.serialize));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function getApiKeyByIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const serviceLocator = req.app.locals as ServiceLocator;
        const apiKey = await getApiKeyById(id, serviceLocator);
        if (!apiKey) {
            res.status(404).json({ error: "API key not found" });
            return;
        }
        res.json(apiKeySerializer.serialize(apiKey));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}


export async function deleteApiKeyController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const serviceLocator = req.app.locals as ServiceLocator;
        await deleteApiKey(id, serviceLocator);
        res.status(204).send();
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}
