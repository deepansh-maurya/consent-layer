export enum ScanType {
    COOKIE_CONCENT = '   COOKIE_CONCENT',
    COOKIE_CONCENT_RELABILITY = ' COOKIE_CONCENT_RELABILITY',
    PRIVACY_LINKS = ' PRIVACY_LINKS',
    TRACKERS_DETECTION = ' TRACKERS_DETECTION',
    ADMIN_SECURITY = ' ADMIN_SECURITY',
    HTTP_SSL = ' HTTP_SSL',
    COOKIE_FLAGS = ' COOKIE_FLAGS',
}

export interface ScanBatchRequest {
    startUrl: string;
    scanDepth: number;
    specificPages: string[];
    scanType: string[] | string;
    regions: string[];
    userAgent: string;
    metaData: any;
}