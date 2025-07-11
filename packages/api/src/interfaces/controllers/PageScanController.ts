// src/controllers/PageScanResultController.ts

import { Request, Response } from "express";
import { createPageScanResult } from "../../application/use_cases/page_scan/create";
import { getPageScanResultById, listPageScanResults, listPageScanResultsBySession } from "../../application/use_cases/page_scan/get";
import { PageScanResult } from "../../domain/page_scan";
import { updatePageScanResult } from "../../application/use_cases/page_scan/update";

export async function createPageScanResultController(req: Request, res: Response) {
  try {
    const {
      scanningSessionId, url, statusCode, parentUrl, depth, scanResult,
      trackers, securityIssues, complianceIssues, cookies, screenshotUrl,
      timeTakenMs, scannedAt
    } = req.body;
    const serviceLocator = req.app.locals as any;
    const result = await createPageScanResult(
      scanningSessionId, url, statusCode, parentUrl, depth, scanResult,
      trackers, securityIssues, complianceIssues, cookies, screenshotUrl,
      timeTakenMs, scannedAt, serviceLocator
    );
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function getPageScanResultByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const serviceLocator = req.app.locals as any;
    const result = await getPageScanResultById(id, serviceLocator);
    if (!result) {
      res.status(404).json({ error: "PageScanResult not found" });
      return;
    }
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function listPageScanResultsController(req: Request, res: Response) {
  try {
    const serviceLocator = req.app.locals as any;
    const results = await listPageScanResults(serviceLocator);
    res.json(results);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function listPageScanResultsBySessionController(req: Request, res: Response) {
  try {
    const { scanningSessionId } = req.query as { scanningSessionId: string };
    const serviceLocator = req.app.locals as any;
    const results = await listPageScanResultsBySession(scanningSessionId, serviceLocator);
    res.json(results);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function updatePageScanResultController(req: Request, res: Response) {
  try {
    const serviceLocator = req.app.locals as any;
    const resultData = req.body as PageScanResult;
    const updated = await updatePageScanResult(resultData, serviceLocator);
    res.status(200).json(updated);
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}
