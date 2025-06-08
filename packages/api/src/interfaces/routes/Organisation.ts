import { Router } from "express";
import { createOrganizationController, deleteOrganizationController, getOrganizationByIdController, getOrganizationByNameController, listOrganizationsController, updateOrganizationController } from "../controllers/OrganisationController";
import { authOrgUser } from "../../infrastructure/security/AuthOrgUser";
// Router for /organizations
const organizationRouter = Router();

// Create organization
organizationRouter.post("/",authOrgUser, createOrganizationController);// Get org by ID
organizationRouter.get("/:id",authOrgUser, getOrganizationByIdController);// Get org by name (using query param: /organizations/by-name?name=ACME)
organizationRouter.get("/by-name",authOrgUser, getOrganizationByNameController);// Update organization
organizationRouter.put("/:id",authOrgUser, updateOrganizationController);// Delete organization
organizationRouter.delete("/:id",authOrgUser, deleteOrganizationController);// List all organizations
organizationRouter.get("/",authOrgUser, listOrganizationsController);

export default organizationRouter;
