import { Request, Response } from "express";
import createSdkConfig from "../../application/use_cases/sdk_config/create";
import updateSdkConfig from "../../application/use_cases/sdk_config/update";
import { ServiceLocator } from "../../infrastructure/config/service-locator";
import getSdkConfigById, { getActiveSdkConfigByOrg } from "../../application/use_cases/sdk_config/get";
import listSdkConfigsByOrg from "../../application/use_cases/sdk_config/listAll";
import deactivateAllSdkConfigsForOrg from "../../application/use_cases/sdk_config/delete";
import { sdkConfigSerializer } from "../serializers/sdkConfigSerializer";

// Create new SDK Config
export async function createSdkConfigController(req: Request, res: Response) {
  try {
    const { orgId, configJson, isActive } = req.body;
    const serviceLocator = req.app.locals as ServiceLocator;
    const sdkConfig = await createSdkConfig(orgId, configJson, isActive, serviceLocator);
    res.status(201).json(sdkConfigSerializer.serialize(sdkConfig));
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// Get SDK Config by ID
export async function getSdkConfigByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const serviceLocator = req.app.locals as ServiceLocator;
    const sdkConfig = await getSdkConfigById(id, serviceLocator);
    if (!sdkConfig) {
      res.status(404).json({ error: "SDKConfig not found" });
      return;
    }
    res.json(sdkConfigSerializer.serialize(sdkConfig));
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// Get active SDK Config for an org
export async function getActiveSdkConfigByOrgController(req: Request, res: Response) {
  try {
    const { orgId } = req.query as { orgId: string };
    const serviceLocator = req.app.locals as ServiceLocator;
    const sdkConfig = await getActiveSdkConfigByOrg(orgId, serviceLocator);
    if (!sdkConfig) {
      res.status(404).json({ error: "Active SDKConfig not found" });
      return;
    }
    res.json(sdkConfigSerializer.serialize(sdkConfig));
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// List all SDK Configs for an org
export async function listSdkConfigsByOrgController(req: Request, res: Response) {
  try {
    const { orgId } = req.query as { orgId: string };
    const serviceLocator = req.app.locals as ServiceLocator;
    const sdkConfigs = await listSdkConfigsByOrg(orgId, serviceLocator);
    res.json(sdkConfigs.map(sdkConfigSerializer.serialize));
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// Update SDK Config by ID
export async function updateSdkConfigController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updates = req.body;
    const serviceLocator = req.app.locals as ServiceLocator;
    const updatedSdkConfig = await updateSdkConfig(id, updates, serviceLocator);
    res.json(sdkConfigSerializer.serialize(updatedSdkConfig));
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

// Deactivate all SDK Configs for an org
export async function deactivateAllSdkConfigsForOrgController(req: Request, res: Response) {
  try {
    const { orgId } = req.body;
    const serviceLocator = req.app.locals as ServiceLocator;
    await deactivateAllSdkConfigsForOrg(orgId, serviceLocator);
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}
