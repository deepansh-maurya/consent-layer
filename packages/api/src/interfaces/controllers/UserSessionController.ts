import { Request, Response } from "express";
import { UserSession } from "../../domain/user_session";
import { v4 as uuidv4 } from "uuid";
import { PgUserSessionRepository } from "../../infrastructure/repositories/postgres/PgUserSessionRepository";

const sessionRepo = new PgUserSessionRepository();

export async function createUserSessionController(req: Request, res: Response) {
    try {
        const { orgId, userId, sessionId, consentStatus } = req.body;
        const session = new UserSession(
            uuidv4(),
            orgId,
            userId,
            sessionId,
            consentStatus,
            new Date()
        );
        const created = await sessionRepo.create(session);
        res.status(201).json(created);
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function getUserSessionByIdController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const session = await sessionRepo.findById(id);
        if (!session) { res.status(404).json({ error: "Session not found" }); return }
        res.json(session);
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function getUserSessionsByUserController(req: Request, res: Response) {
    try {
        const { orgId, userId } = req.params;
        const sessions = await sessionRepo.findByUser(orgId, userId);
        res.json(sessions);
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function updateUserSessionController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const { consentStatus } = req.body;
        const existing = await sessionRepo.findById(id);
        if (!existing) { res.status(404).json({ error: "Session not found" }); return   }
        existing.consentStatus = consentStatus;
        existing.lastUpdated = new Date();
        const updated = await sessionRepo.update(existing);
        res.json(updated);
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}

export async function deleteUserSessionController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await sessionRepo.delete(id);
        res.status(204).send();
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
}
