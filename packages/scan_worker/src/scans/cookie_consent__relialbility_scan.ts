
/**
 * TODO:
 * get scan prerequisite depth, pages - specific, all
 * any auth required then pause mechanism
 * parallelism in scanning 
 * what type of scan is this only consent scan or reliability scan or 
 * correctness scan also 
 * rate limit or ddos thing
 * save all results pass fail 
 * Banner Re-detection Logic
 * region based scan 
 * default region ?
 * Custom User-Agent/Headers ?
 * Session/Job Timeouts ?  
 * metrics for future 
 * optional (notify web hook)
 * Pre-crawl Robots.txt Check
 * 
 * 
 * 
 *  Crawl all/specified pages

 Detect if consent banner appears

 Banner re-detection logic (does it reappear when navigating?)

 Save banner details (selector, text, screenshot)

 Region-based scan (proxy), set custom user-agent

 Pause/resume if auth needed

 Handle session/job timeouts, rate limiting

 Save results (pass/fail)

 Track metrics, notify on completion (optional)

 Pre-crawl robots.txt check
 */




 /**
  * 
  * 2. COOKIE_CONCENT_RELABILITY (Consent Banner Consistency)
 All TODOs from COOKIE_CONCENT

 Crawl multiple pages from all major user paths (home, about, signup, checkout, etc)

 Track:

On how many pages is banner present/missing?

Does banner appear in all intended user flows/regions?

Any pages where banner does NOT show but should?

 Save consistency stats per session

 Detect if banner can be bypassed/skipped

 Attach screenshots for outlier/missing cases


  */


 export default  class COOKIE_CONCENT_RELABILITY{
    
 }