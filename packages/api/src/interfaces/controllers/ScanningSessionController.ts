// src/controllers/ScanningSessionController.ts
import { Request, Response } from "express";
import { createScanningSession } from "../../application/use_cases/scanning_session/create";
import { getScanningSessionById, listScanningSessions, listScanningSessionsByOrg } from "../../application/use_cases/scanning_session/get";
import { ScanningSession } from "../../domain/scanning_session";
import { updateScanningSession } from "../../application/use_cases/scanning_session/update";

export async function createScanningSessionController(req: Request, res: Response) {
  try {
    const {
      orgId, startedBy, scanType, startUrls, scanDepth, maxPages, settings
    } = req.body;
    const serviceLocator = req.app.locals as any;
    const session = await createScanningSession(
      orgId, startedBy, scanType, startUrls, scanDepth, maxPages, settings, serviceLocator
    );
    res.status(201).json(session);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function getScanningSessionByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const serviceLocator = req.app.locals as any;
    const session = await getScanningSessionById(id, serviceLocator);
    if (!session) {
      res.status(404).json({ error: "ScanningSession not found" });
      return;
    }
    res.json(session);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function listScanningSessionsController(req: Request, res: Response) {
  try {
    const serviceLocator = req.app.locals as any;
    const sessions = await listScanningSessions(serviceLocator);
    res.json(sessions);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function listScanningSessionsByOrgController(req: Request, res: Response) {
  try {
    const { orgId } = req.query as { orgId: string };
    const serviceLocator = req.app.locals as any;
    const sessions = await listScanningSessionsByOrg(orgId, serviceLocator);
    res.json(sessions);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// This expects the whole session in body, or you can load/update as you need.
export async function updateScanningSessionController(req: Request, res: Response) {
  try {
    const serviceLocator = req.app.locals as any;
    // For PATCH/PUT, you may want to first fetch, merge changes, then save:
    const sessionData = req.body as ScanningSession;
    const updatedSession = await updateScanningSession(sessionData, serviceLocator);
    res.status(200).json(updatedSession);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}
