import fg from "fast-glob"
import path from "node:path"
import fs from "node:fs/promises"

export class RepoWatcher {

    private baseDir = path.join(__dirname, './data/tracker')
    static _instance: RepoWatcher

    static get instance() {
        if (!this._instance) {
            this._instance = new RepoWatcher()
        }
        return this._instance
    }

    async getAllJsonFiles() {
        return fg(['**/*.json'], { cwd: this.baseDir, absolute: true });
    }

    async parseAndProcessJsonFiles(repoInfo: any, processFn: (json: any) => Promise<void>) {
        const jsonFiles = await this.getAllJsonFiles();
        for (const file of jsonFiles) {
            try {
                const content = await fs.readFile(file, 'utf-8');
                const json = JSON.parse(content);
                await processFn(repoInfo);

                await Promise.all(Object.entries(json).map(async ([key, value]) => {
                    await processFn({
                        domain: key,
                        value: value
                    })
                }))
            } catch (err) {
                console.error(`Failed to process ${file}:`, err);
            }
        }
    }

}

