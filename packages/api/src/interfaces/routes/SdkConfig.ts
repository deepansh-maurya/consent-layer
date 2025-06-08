import { Router } from "express";
import {
  createSdkConfigController,
  getSdkConfigByIdController,
  getActiveSdkConfigByOrgController,
  listSdkConfigsByOrgController,
  updateSdkConfigController,
  deactivateAllSdkConfigsForOrgController
} from "../controllers/SdkConfigController";

const sdkConfigRouter = Router();

sdkConfigRouter.post("/", createSdkConfigController);
sdkConfigRouter.get("/:id", getSdkConfigByIdController);
sdkConfigRouter.get("/active", getActiveSdkConfigByOrgController);
sdkConfigRouter.get("/", listSdkConfigsByOrgController);
sdkConfigRouter.put("/:id", updateSdkConfigController);
sdkConfigRouter.post("/deactivate-all", deactivateAllSdkConfigsForOrgController);

export default sdkConfigRouter;
