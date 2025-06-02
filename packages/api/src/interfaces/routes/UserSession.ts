import { Router } from "express";
import { createUserSessionController, deleteUserSessionController, getUserSessionByIdController, getUserSessionsByUserController, updateUserSessionController } from "../controllers/UserSessionController";


const router = Router();

router.post("/", createUserSessionController);
router.get("/:id", getUserSessionByIdController);
router.get("/org/:orgId/user/:userId", getUserSessionsByUserController);
router.put("/:id", updateUserSessionController);
router.delete("/:id", deleteUserSessionController);

export default router;
