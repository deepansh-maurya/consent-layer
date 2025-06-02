import { Router } from "express";
import { getConsentEventsByOrgController, getConsentEventsByTypeController, getConsentEventsByUserController, logConsentEventController } from "../controllers/ConsentEventController";


const router = Router();

router.post("/", logConsentEventController);
router.get("/org/:orgId", getConsentEventsByOrgController);
router.get("/org/:orgId/user/:userId", getConsentEventsByUserController);
router.get("/org/:orgId/type/:type", getConsentEventsByTypeController);

export default router;
