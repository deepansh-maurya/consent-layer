// src/controllers/FailedPageController.ts

import { Request, Response } from "express";
import { createFailedPage } from "../../application/use_cases/fail_page/create";
import { getFailedPageById, listFailedPages, listFailedPagesBySession } from "../../application/use_cases/fail_page/get";
import { updateFailedPage } from "../../application/use_cases/fail_page/update";
import { FailedPage } from "../../domain/failed_page";

export async function createFailedPageController(req: Request, res: Response) {
  try {
    const {
      scanningSessionId, url, failReason, attempts, lastAttemptAt, message, parentUrl
    } = req.body;
    const serviceLocator = req.app.locals as any;
    const failedPage = await createFailedPage(
      scanningSessionId, url, failReason, attempts, new Date(lastAttemptAt), message, parentUrl, serviceLocator
    );
    res.status(201).json(failedPage);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function getFailedPageByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const serviceLocator = req.app.locals as any;
    const failedPage = await getFailedPageById(id, serviceLocator);
    if (!failedPage) {
      res.status(404).json({ error: "FailedPage not found" });
      return;
    }
    res.json(failedPage);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function listFailedPagesController(req: Request, res: Response) {
  try {
    const serviceLocator = req.app.locals as any;
    const failedPages = await listFailedPages(serviceLocator);
    res.json(failedPages);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function listFailedPagesBySessionController(req: Request, res: Response) {
  try {
    const { scanningSessionId } = req.query as { scanningSessionId: string };
    const serviceLocator = req.app.locals as any;
    const failedPages = await listFailedPagesBySession(scanningSessionId, serviceLocator);
    res.json(failedPages);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function updateFailedPageController(req: Request, res: Response) {
  try {
    const serviceLocator = req.app.locals as any;
    const failedPageData = req.body as FailedPage;
    const updated = await updateFailedPage(failedPageData, serviceLocator);
    res.status(200).json(updated);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}
