import COOKIE_CONCENT_RELABILITY from "../scans/cookie_consent__relialbility_scan";
import COOKIE_FLAGS from "../scans/cookie_flags_scan";
import HTTP_SSL from "../scans/http_ssl_scan";
import TRACKERS_DETECTION from "../scans/traccker_detection_scan";

export const ScanTypeRegistry = {
    CONCENT_RELABILITY: new COOKIE_CONCENT_RELABILITY(),
    COOKIE_FLAGS: new COOKIE_FLAGS(),
    HTTP_SSL: new HTTP_SSL(),
    TRACKERS_DETECTION: new TRACKERS_DETECTION()
}

export type ScanType = keyof typeof ScanTypeRegistry