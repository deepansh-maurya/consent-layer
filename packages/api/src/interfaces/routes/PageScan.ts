// src/routes/pageScanResultRouter.ts
import { Router } from "express";
import { createPageScanResultController, getPageScanResultByIdController, listPageScanResultsBySessionController, listPageScanResultsController, updatePageScanResultController } from "../controllers/PageScanController";

const pageScanResultRouter = Router();

pageScanResultRouter.post("/", createPageScanResultController);
pageScanResultRouter.get("/:id", getPageScanResultByIdController);
pageScanResultRouter.get("/", listPageScanResultsController);
pageScanResultRouter.get("/by-session", listPageScanResultsBySessionController);
pageScanResultRouter.put("/", updatePageScanResultController); // or PATCH

export default pageScanResultRouter;
