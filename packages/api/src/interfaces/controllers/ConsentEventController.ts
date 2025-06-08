import { Request, Response } from "express";
import { ServiceLocator } from "../../infrastructure/config/service-locator";
import logConsentEvent from "../../application/use_cases/consent_event/create";
import listConsentEventsByUser, { listConsentEventsByOrg, listConsentEventsByType } from "../../application/use_cases/consent_event/get";
import listAllConsentEvents from "../../application/use_cases/consent_event/listAll";
import { consentEventSerializer } from "../serializers/consentEventSerializer";

// Log a new consent event
export async function logConsentEventController(req: Request, res: Response) {
    try {
        const { orgId, userId, categories, userAgent, ipAddress, eventType } = req.body;
        const serviceLocator = req.app.locals as ServiceLocator;
        const event = await logConsentEvent(
            orgId,
            userId,
            categories,
            userAgent,
            ipAddress,
            eventType,
            serviceLocator
        );
        res.status(201).json(consentEventSerializer.serialize(event));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

// List all events for an org
export async function listConsentEventsByOrgController(req: Request, res: Response) {
    try {
        const { orgId } = req.query as { orgId: string };
        const serviceLocator = req.app.locals as ServiceLocator;
        const events = await listConsentEventsByOrg(orgId, serviceLocator);
        res.json(events.map(consentEventSerializer.serialize));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

// List all events for a user in an org
export async function listConsentEventsByUserController(req: Request, res: Response) {
    try {
        const { orgId, userId } = req.query as { orgId: string; userId: string };
        const serviceLocator = req.app.locals as ServiceLocator;
        const events = await listConsentEventsByUser(orgId, userId, serviceLocator);
        res.json(events.map(consentEventSerializer.serialize));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

// List events by type in an org
export async function listConsentEventsByTypeController(req: Request, res: Response) {
    try {
        const { orgId, eventType } = req.query as { orgId: string; eventType: string };
        const serviceLocator = req.app.locals as ServiceLocator;
        const events = await listConsentEventsByType(orgId, eventType as any, serviceLocator);
        res.json(events.map(consentEventSerializer.serialize));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

// List all consent events in the system
export async function listAllConsentEventsController(req: Request, res: Response) {
    try {
        const serviceLocator = req.app.locals as ServiceLocator;
        const events = await listAllConsentEvents(serviceLocator);
        res.json(events.map(consentEventSerializer.serialize));
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}
