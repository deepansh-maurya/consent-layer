import { Router } from "express";
import {
  createUserSessionController,
  getUserSessionByIdController,
  listUserSessionsByUserController,
  updateUserSessionController,
  deleteUserSessionController
} from "../controllers/UserSessionController";
import { apiKeyAuth } from "../../infrastructure/security/AuthForApiKey";

// All routes prefixed with /user-sessions
const userSessionRouter = Router();

userSessionRouter.post("/", apiKeyAuth, createUserSessionController);  // POST   /user-sessions
userSessionRouter.get("/:id", apiKeyAuth, getUserSessionByIdController); // GET /user-sessions/:id
userSessionRouter.get("/org/:orgId/user/:userId", apiKeyAuth, listUserSessionsByUserController); // GET /user-sessions/org/:orgId/user/:userId
userSessionRouter.put("/:id", apiKeyAuth, updateUserSessionController); // PUT /user-sessions/:id
userSessionRouter.delete("/:id", apiKeyAuth, deleteUserSessionController); // DELETE /user-sessions/:id

export default userSessionRouter;
