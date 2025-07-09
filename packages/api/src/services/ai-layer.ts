import { BreakageRule, Domain, Entity, Resource, TrackingParameter } from "../application/interfaces/service"
import { DeepSeekConfig } from "../infrastructure/config/openai"
import { prisma } from "../infrastructure/db/prisma/prisma"

export class AiLayer extends DeepSeekConfig {

    static _instance: AiLayer
    static get instance() {
        if (!this._instance) {
            this._instance = new AiLayer()
        }
        return this._instance
    }

    private constructor() {
        super()
    }

    private preparePrompt(rawjson: any, schema: any, trackerName: string) {
        return `
            You are a privacy and tracker intelligence assistant.
                
            I will give you:
            1. The schema for how I want the tracker information returned (as a JSON object).
            2. The raw JSON data, which may be large and complex.
            3. The name of the tracker I want information about.
                
            Your tasks:
            - Search through the provided JSON data and extract as much information as possible about the specified tracker, following the schema exactly.
            - If a value is missing, set it as null or "not found".
            - Your answer must be a single JSON object:
                - The top level should be the schema structure, filled with values you extract.
                - At the end, add a key "llm_words" with a brief explanation (in natural language) of what you found about this tracker.
                
            Here is the tracker I want info about:
            \`\`\`
            ${trackerName}
            \`\`\`
                
            Here is the schema:
            \`\`\`json
            ${JSON.stringify(schema, null, 2)}
            \`\`\`
                
            Here is the raw JSON data:
            \`\`\`json
            ${JSON.stringify(rawjson, null, 2)}
            \`\`\`
                
            Return only the JSON response, nothing else.
            `;
    }


    async analyze(rawjson: any, schema: any, trakerName: string) {
        const prompt = this.preparePrompt(rawjson, schema, trakerName)
        const result = await this.main(prompt)

        await Promise.all(Object.entries(JSON.parse(result!)).
            map(async ([key, val]) => {
                switch (key) {
                    case "entity": {
                        await prisma.entity.create({
                            data: {
                                name: (val as Entity).name,
                                displayName: (val as Entity).displayName,
                                url: (val as Entity).url,
                                privacyPolicy: (val as Entity).privacyPolicy,
                                prevalence: (val as Entity).prevalence,
                                properties: (val as Entity).properties,
                            }
                        })
                        break
                    }

                    case 'domain': {
                        await prisma.domain.create({
                            data: {
                                domain: (val as Domain).domain,
                                prevalence: (val as Domain).prevalence,
                                cookies: (val as Domain).cookies,
                                fingerprinting: (val as Domain).fingerprinting,
                                performance: (val as Domain).performance,
                                categories: (val as Domain).categories,
                                types: (val as Domain).types,
                                cnames: (val as Domain).cnames,
                                nameservers: (val as Domain).nameservers,
                                ownerId: (val as Domain).ownerId,
                                owner: (val as Domain).owner
                            }
                        })
                    }

                    case "resource":
                        await prisma.resource.create({
                            data: {
                                domainId: (val as Resource).domainId, // You must resolve this, e.g. via domain lookup
                                rule: (val as Resource).rule,
                                cookies: (val as Resource).cookies,
                                fingerprinting: (val as Resource).fingerprinting,
                                apis: (val as Resource).apis,
                                prevalence: (val as Resource).prevalence,
                                cnames: (val as Resource).cnames,
                                exampleSites: (val as Resource).exampleSites,
                                firstPartyCookies: (val as Resource).firstPartyCookies,
                                firstPartyCookiesSent: (val as Resource).firstPartyCookiesSent,
                            },
                        });
                        break;

                    case "trackingParameter":
                        await prisma.trackingParameter.create({
                            data: {
                                paramName: (val as TrackingParameter).paramName,
                                prevalence: (val as TrackingParameter).prevalence,
                                requests3p: (val as TrackingParameter).requests3p,
                                cookies: (val as TrackingParameter).cookies,
                                exampleSites: (val as TrackingParameter).exampleSites,
                            },
                        });
                        break;

                    case "breakageRule":
                        await prisma.breakageRule.create({
                            data: {
                                rule: (val as BreakageRule).rule,
                                domains: (val as BreakageRule).domains,
                                types: (val as BreakageRule).types,
                                reason: (val as BreakageRule).reason,
                            },
                        });
                        break;

                    default:
                        console.warn(`Unknown result key: ${key}`);
                }
            }))

        return result
    }
}