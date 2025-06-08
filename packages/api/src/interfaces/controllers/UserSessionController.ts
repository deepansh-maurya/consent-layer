import { Request, Response } from "express";
import createUserSession from "../../application/use_cases/user_session/create";
import updateUserSession from "../../application/use_cases/user_session/update";
import deleteUserSession from "../../application/use_cases/user_session/delete";
import { ServiceLocator } from "../../infrastructure/config/service-locator";
import { userSessionSerializer } from "../serializers/userSessionSerializer";
import getUserSessionById from "../../application/use_cases/user_session/get";
import { listUserSessionsByUser } from "../../application/use_cases/user_session/listAll";

// Create
export async function createUserSessionController(req: Request, res: Response) {
  try {
    const { orgId, userId, sessionId, consentStatus } = req.body;
    const serviceLocator = req.app.locals as ServiceLocator;
    const session = await createUserSession(orgId, userId, sessionId, consentStatus, serviceLocator);
    res.status(201).json(userSessionSerializer.serialize(session));
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// Get by ID
export async function getUserSessionByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const serviceLocator = req.app.locals as ServiceLocator;
    const session = await getUserSessionById(id, serviceLocator);
    if (!session) {
      res.status(404).json({ error: "User session not found" });
      return;
    }
    res.json(userSessionSerializer.serialize(session));
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// List by Org + User
export async function listUserSessionsByUserController(req: Request, res: Response) {
  try {
    const { orgId, userId } = req.params;
    const serviceLocator = req.app.locals as ServiceLocator;
    const sessions = await listUserSessionsByUser(orgId, userId, serviceLocator);
    res.json(sessions.map(userSessionSerializer.serialize));
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// Update
export async function updateUserSessionController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { consentStatus } = req.body;
    const serviceLocator = req.app.locals as ServiceLocator;
    const updatedSession = await updateUserSession(id, consentStatus, serviceLocator);
    res.json(userSessionSerializer.serialize(updatedSession));
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// Delete
export async function deleteUserSessionController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const serviceLocator = req.app.locals as ServiceLocator;
    await deleteUserSession(id, serviceLocator);
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}
