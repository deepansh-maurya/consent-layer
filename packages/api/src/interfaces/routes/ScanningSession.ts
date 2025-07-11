// src/routes/scanningSessionRouter.ts
import { Router } from "express";
import {
  createScanningSessionController,
  getScanningSessionByIdController,
  listScanningSessionsController,
  listScanningSessionsByOrgController,
  updateScanningSessionController,
} from "../controllers/ScanningSessionController";

const scanningSessionRouter = Router();

scanningSessionRouter.post("/", createScanningSessionController);
scanningSessionRouter.get("/:id", getScanningSessionByIdController);
scanningSessionRouter.get("/", listScanningSessionsController);
scanningSessionRouter.get("/by-org", listScanningSessionsByOrgController);
scanningSessionRouter.put("/", updateScanningSessionController); 

export default scanningSessionRouter;
