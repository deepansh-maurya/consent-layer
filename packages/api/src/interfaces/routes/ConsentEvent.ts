import { Router } from "express";
import {
  logConsentEventController,
  listConsentEventsByOrgController,
  listConsentEventsByUserController,
  listConsentEventsByTypeController,
  listAllConsentEventsController
} from "../controllers/ConsentEventController";
import { apiKeyAuth } from "../../infrastructure/security/AuthForApiKey";

// Using "/consent-events" as base path
const consentEventRouter = Router();

consentEventRouter.post("/", apiKeyAuth, logConsentEventController);                   // POST   /consent-events
consentEventRouter.get("/", apiKeyAuth, listAllConsentEventsController);               // GET    /consent-events
consentEventRouter.get("/org/:orgId", apiKeyAuth, listConsentEventsByOrgController);   // GET    /consent-events/org/:orgId
consentEventRouter.get("/user", apiKeyAuth, listConsentEventsByUserController);        // GET    /consent-events/user?orgId=...&userId=...
consentEventRouter.get("/type", apiKeyAuth, listConsentEventsByTypeController);        // GET    /consent-events/type?orgId=...&eventType=...

export default consentEventRouter;
