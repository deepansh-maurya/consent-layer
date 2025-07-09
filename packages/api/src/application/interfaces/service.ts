export interface Entity {
  id: number;
  name: string;
  displayName?: string | null;
  url?: string | null;
  privacyPolicy?: string | null;
  prevalence?: number | null;
  properties: string[]; // domains owned by this entity
  domains?: Domain[];  // relation
}


export interface Domain {
  id: number;
  domain: string;
  prevalence?: number | null;
  cookies?: number | null;
  fingerprinting?: number | null; // 0-3
  performance?: Record<string, any> | null; // e.g. { cache, time, size, cpu }
  categories: string[];
  types: string[];
  cnames: string[];
  nameservers: string[];
  ownerId?: number | null;
  owner?: Entity | null;    // relation
  resources?: Resource[];   // relation
}

export interface Resource {
  id: number;
  domainId: number;
  rule: string;
  cookies?: number | null;
  fingerprinting?: number | null;
  apis: string[];
  prevalence?: number | null;
  cnames: string[];
  exampleSites: string[];
  firstPartyCookies?: Record<string, any> | null;
  firstPartyCookiesSent?: Record<string, any> | null;
  domain?: Domain; // relation
}

export interface TrackingParameter {
  paramName: string;
  prevalence?: number | null;
  requests3p?: Record<string, any> | null; // { prevalence, entities, domains }
  cookies?: Record<string, any> | null;    // { prevalence, firstParty, thirdParty, entities, domains }
  exampleSites: string[];
}

export interface BreakageRule {
  id: number;
  rule: string;
  domains: string[];
  types: string[];
  reason?: Record<string, any> | null;
}
