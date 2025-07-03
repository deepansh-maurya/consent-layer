import createSdkConfig from "@/src/application/use_cases/sdk_config/create";
import deactivateAllSdkConfigsForOrg from "@/src/application/use_cases/sdk_config/delete";
import getSdkConfigById, { getActiveSdkConfigByOrg } from "@/src/application/use_cases/sdk_config/get";
import listSdkConfigsByOrg from "@/src/application/use_cases/sdk_config/listAll";
import updateSdkConfig from "@/src/application/use_cases/sdk_config/update";
import { SDKConfig } from "@/src/domain/sdk_config";
import { buildBeans } from "@/src/infrastructure/config/service-locator";

export class SdkConfigHandler {

    static async createSdkConfig(orgId: string,
        configJson: Record<string, any>,
        isActive: boolean,) {
        return await createSdkConfig(orgId, configJson, isActive, buildBeans())
    }

    static async getSdkConfiById(orgId: string) {
        return await getSdkConfigById(orgId, buildBeans())
    }

    static async getActiveSdkConfiByOrg(orgId: string) {
        return await getActiveSdkConfigByOrg(orgId, buildBeans())
    }

    static async listSdkConfigsByOrgController(orgId: string) {
        return await listSdkConfigsByOrg(orgId, buildBeans())
    }

    static async updateSdkConfigController(id: string, config: SDKConfig) {
        return await updateSdkConfig(id, config, buildBeans())
    }

    static async deactivateAllSdkConfigsForOrgController(orgId: string) {
        return await deactivateAllSdkConfigsForOrg(orgId, buildBeans())
    }

}