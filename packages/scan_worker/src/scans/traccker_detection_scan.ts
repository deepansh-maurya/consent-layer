/**
 * 
 * 4. TRACKERS_DETECTION
 Crawl all/specified pages

 Detect known third-party trackers, scripts, iframes, pixels

 Compare detected trackers with your tracker vector DB (Chroma)

 Save: tracker type, name, script URL, found on which pages, cookies set, first-party/third-party status

 Optionally, cross-check with consent banner (does consent mention all found trackers?)

 Region/user-agent logic, job timeouts, metrics, robots.txt (shared)
 */