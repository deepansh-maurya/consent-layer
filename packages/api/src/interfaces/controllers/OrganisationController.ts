import { Request, Response } from "express";
import { ServiceLocator } from "../../infrastructure/config/service-locator";
import { organizationSerializer } from "../serializers/organizationSerializer";
import getOrganizationById, { findOrganizationBySlug, getOrganizationByName } from "../../application/use_cases/organisation/get";
import updateOrganization from "../../application/use_cases/organisation/update";
import deleteOrganization from "../../application/use_cases/organisation/delete";
import listOrganizations from "../../application/use_cases/organisation/listAll";
import { createOrganizationWithDb } from "../../application/use_cases/organisation/create";
import createApiKey from "../../application/use_cases/api_key/create";
import { hashPassword } from "../../utils/utils";
import createAdminUser from "../../application/use_cases/admin_user/create";

// Create organization
export async function createOrganizationController(req: Request, res: Response) {
    try {
        const { name, url, admin_name, admin_email, password, country } = req.body;

        const serviceLocator = req.app.locals as ServiceLocator;
        const org = await createOrganizationWithDb(name, serviceLocator,url,country);

        const now = Date.now(); // current time in milliseconds
        const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000; // days * hours * minutes * seconds * ms
        const expiresAt = now + THIRTY_DAYS_MS; // expiresAt is a timestamp in milliseconds

        const { hash, salt } = hashPassword(password);

        await createApiKey(org.id, expiresAt, serviceLocator);
        await createAdminUser(org.id, admin_email, hash, salt, "owner", serviceLocator,admin_name)

        res.status(201).json(organizationSerializer.serialize(org));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

// Get org by ID
export async function getOrganizationByIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const serviceLocator = req.app.locals as ServiceLocator;
        const org = await getOrganizationById(id, serviceLocator);
        if (!org) {
            res.status(404).json({ error: "Organization not found" });
            return;
        }
        res.json(organizationSerializer.serialize(org));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

// Get org by name
export async function getOrganizationByNameController(req: Request, res: Response) {
    try {
        const { name } = req.query as { name: string };
        const serviceLocator = req.app.locals as ServiceLocator;
        const org = await getOrganizationByName(name, serviceLocator);
        if (!org) {
            res.status(404).json({ error: "Organization not found" });
            return;
        }
        res.json(organizationSerializer.serialize(org));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

// Update org
export async function updateOrganizationController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const serviceLocator = req.app.locals as ServiceLocator;
        const updatedOrg = await updateOrganization(id, name, serviceLocator);
        res.json(organizationSerializer.serialize(updatedOrg));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

// Delete org
export async function deleteOrganizationController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const serviceLocator = req.app.locals as ServiceLocator;
        await deleteOrganization(id, serviceLocator);
        res.status(204).send();
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

// List all orgs
export async function listOrganizationsController(req: Request, res: Response) {
    try {
        const serviceLocator = req.app.locals as ServiceLocator;
        const orgs = await listOrganizations(serviceLocator);
        res.json(orgs.map(organizationSerializer.serialize));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function listOrgBySlug(req: Request, res: Response) {
    try {
        const { slug } = req.params
        const serviceLocator = req.app.locals as ServiceLocator;
        const org = await findOrganizationBySlug(slug, serviceLocator)
        if (!org) {
            res.status(404).json({ error: "Organization not found" });
            return;
        }
        res.json(organizationSerializer.serialize(org));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}