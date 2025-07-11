// src/controllers/AuthRequestController.ts

import { Request, Response } from "express";
import { createAuthRequest } from "../../application/use_cases/auth_request/create";
import { getAuthRequestById, listAuthRequests, listAuthRequestsBySession } from "../../application/use_cases/auth_request/get";
import { updateAuthRequest } from "../../application/use_cases/auth_request/update";
import { AuthRequest } from "../../domain/auth_request";

export async function createAuthRequestController(req: Request, res: Response) {
  try {
    const {
      scanningSessionId, url, reason, requestedAt, providedBy, providedAt, status
    } = req.body;
    const serviceLocator = req.app.locals as any;
    const authReq = await createAuthRequest(
      scanningSessionId, url, reason, new Date(requestedAt), providedBy, providedAt ? new Date(providedAt) : null, status, serviceLocator
    );
    res.status(201).json(authReq);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function getAuthRequestByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const serviceLocator = req.app.locals as any;
    const authReq = await getAuthRequestById(id, serviceLocator);
    if (!authReq) {
      res.status(404).json({ error: "AuthRequest not found" });
      return;
    }
    res.json(authReq);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function listAuthRequestsController(req: Request, res: Response) {
  try {
    const serviceLocator = req.app.locals as any;
    const authReqs = await listAuthRequests(serviceLocator);
    res.json(authReqs);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function listAuthRequestsBySessionController(req: Request, res: Response) {
  try {
    const { scanningSessionId } = req.query as { scanningSessionId: string };
    const serviceLocator = req.app.locals as any;
    const authReqs = await listAuthRequestsBySession(scanningSessionId, serviceLocator);
    res.json(authReqs);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function updateAuthRequestController(req: Request, res: Response) {
  try {
    const serviceLocator = req.app.locals as any;
    const reqData = req.body as AuthRequest;
    const updated = await updateAuthRequest(reqData, serviceLocator);
    res.status(200).json(updated);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}
