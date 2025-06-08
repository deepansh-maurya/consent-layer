import { Router } from 'express';
import { createAdminUserController, deleteAdminUserController, getAdminUserByIdController, listAdminUsersByOrgController, updateAdminUserController } from '../controllers/AdminController';
import { authOrgUser } from '../../infrastructure/security/AuthOrgUser';

export const adminRouter = Router()

adminRouter.post("/admin-users", authOrgUser,createAdminUserController);
adminRouter.get("/admin-users", authOrgUser,listAdminUsersByOrgController );
adminRouter.get("/admin-users/:id", authOrgUser,getAdminUserByIdController);
adminRouter.put("/admin-users/:id", authOrgUser,updateAdminUserController);
adminRouter.delete("/admin-users/:id", authOrgUser,deleteAdminUserController);
