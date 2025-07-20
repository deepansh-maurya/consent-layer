import ADMIN_SECURITY_SCAN from "../scans/admin_security_scan";
import COOKIE_CONCENT_RELABILITY from "../scans/cookie_consent__relialbility_scan";
import COOKIE_FLAGS from "../scans/cookie_flags_scan";
import HTTP_SSL from "../scans/http_ssl_scan";
import PRIVACY_LINKS from "../scans/privacy_liniks_scan";
import TRACKERS_DETECTION from "../scans/traccker_detection_scan";

export const ScanTypeRegistry = {
    COOKIE_CONCENT_RELABILITY: new COOKIE_CONCENT_RELABILITY(),
    COOKIE_FLAGS: new COOKIE_FLAGS(),
    ADMIN_SECURITY_SCAN: new ADMIN_SECURITY_SCAN(),
    HTTP_SSL: new HTTP_SSL(),
    PRIVACY_LINKS: new PRIVACY_LINKS(),
    TRACKERS_DETECTION: new TRACKERS_DETECTION()
}

export type ScanType = keyof typeof ScanTypeRegistry