import { Router } from "express";
import {
  createApiKeyController,
  listApiKeysByOrgController,
  getApiKeyByIdController,
  deleteApiKeyController
} from "../controllers/ApiKeyController";
import { authOrgUser } from "../../infrastructure/security/AuthOrgUser";

// You can use any base path (here using "/api-keys")
const apiKeyRouter = Router();

apiKeyRouter.post("/",authOrgUser, createApiKeyController);                   // POST   /api-keys
apiKeyRouter.get("/",authOrgUser, listApiKeysByOrgController);                // GET    /api-keys?orgId=...
apiKeyRouter.get("/:id",authOrgUser, getApiKeyByIdController);                // GET    /api-keys/:id
apiKeyRouter.delete("/:id",authOrgUser, deleteApiKeyController);              // DELETE /api-keys/:id

export default apiKeyRouter;
