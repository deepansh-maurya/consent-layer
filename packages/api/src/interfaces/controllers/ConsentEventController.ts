import { Request, Response } from "express";
import { ConsentEvent } from "../../domain/consent_event";
import { MongoConsentEventRepository } from "../../infrastructure/repositories/mongodb/PgConsentEventRepository";

const consentRepo = new MongoConsentEventRepository();

export async function logConsentEventController(req: Request, res: Response) {
  try {
    const {
      orgId, userId, categories, timestamp, userAgent, ipAddress, eventType
    } = req.body;

    const event = new ConsentEvent(
      null, // Mongo will assign ID
      orgId,
      userId,
      categories,
      timestamp ? new Date(timestamp) : new Date(),
      userAgent,
      ipAddress,
      eventType
    );
    const saved = await consentRepo.logEvent(event);
    res.status(201).json(saved);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function getConsentEventsByOrgController(req: Request, res: Response) {
  try {
    const { orgId } = req.params;
    const events = await consentRepo.findByOrg(orgId);
    res.json(events);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function getConsentEventsByUserController(req: Request, res: Response) {
  try {
    const { orgId, userId } = req.params;
    const events = await consentRepo.findByUser(orgId, userId);
    res.json(events);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function getConsentEventsByTypeController(req: Request, res: Response) {
  try {
    const { orgId, type } = req.params;
    const events = await consentRepo.findByType(orgId, type);
    res.json(events);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}
