// src/routes/failedPageRouter.ts

import { Router } from "express";
import { createFailedPageController, getFailedPageByIdController, listFailedPagesBySessionController, listFailedPagesController, updateFailedPageController } from "../controllers/FailPageController";

const failedPageRouter = Router();

failedPageRouter.post("/", createFailedPageController);
failedPageRouter.get("/:id", getFailedPageByIdController);
failedPageRouter.get("/", listFailedPagesController);
failedPageRouter.get("/by-session", listFailedPagesBySessionController);
failedPageRouter.put("/", updateFailedPageController);

export default failedPageRouter;
