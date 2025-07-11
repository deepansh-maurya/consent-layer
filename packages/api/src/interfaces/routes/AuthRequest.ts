// src/routes/authRequestRouter.ts

import { Router } from "express";
import {
  createAuthRequestController,
  getAuthRequestByIdController,
  listAuthRequestsController,
  listAuthRequestsBySessionController,
  updateAuthRequestController
} from "../controllers/AuthRequestController";

const authRequestRouter = Router();

authRequestRouter.post("/", createAuthRequestController);
authRequestRouter.get("/:id", getAuthRequestByIdController);
authRequestRouter.get("/", listAuthRequestsController);
authRequestRouter.get("/by-session", listAuthRequestsBySessionController);
authRequestRouter.put("/", updateAuthRequestController);

export default authRequestRouter;
