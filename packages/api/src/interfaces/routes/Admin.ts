import { Router } from 'express';
import { createAdminUserController, deleteAdminUserController, getAdminUserByIdController, listAdminUsersByOrgController, updateAdminUserController } from '../controllers/AdminController';

export const adminRouter = Router()

adminRouter.post("/admin-users", createAdminUserController);
adminRouter.get("/admin-users", listAdminUsersByOrgController );
adminRouter.get("/admin-users/:id", getAdminUserByIdController);
adminRouter.put("/admin-users/:id", updateAdminUserController);
adminRouter.delete("/admin-users/:id", deleteAdminUserController);
