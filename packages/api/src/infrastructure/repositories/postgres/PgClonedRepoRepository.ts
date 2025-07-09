import { ClonedRepo } from "../../../domain/cloned_repo";
import { IClonedRepoRepository } from "../../../domain/repositories/IClonedRepoRepository";
import { git } from "../../config/simple-git";
import { prisma } from "../../db/prisma/prisma";
import path from "node:path";
import { simpleGit } from 'simple-git';
import fs from "node:fs"

export class PgClonedRepoRpository implements IClonedRepoRepository {

    async create(clonedRepo: ClonedRepo): Promise<ClonedRepo> {
        const baseDir = path.join(__dirname, './data/tracker')
        const repoName = clonedRepo.name
        const localPath = path.join(baseDir, repoName);

        if (!fs.existsSync(baseDir)) {
            fs.mkdirSync(baseDir, { recursive: true });
        }

        await git.clone(clonedRepo.url, localPath);

        const created = await prisma.clonedRepo.create({
            data: {
                id: clonedRepo.id,
                url: clonedRepo.url,
                name: clonedRepo.name,
                addsAt: clonedRepo.addsAt,
                lastCommitId: clonedRepo.lastCommitId,
                active: clonedRepo.active,
                localPath: localPath //! no local path 
            }
        })

        return created
    }

    async findById(id: string): Promise<ClonedRepo | null> {
        const found = await prisma.clonedRepo.findUnique({ where: { id } });
        return found ? (found) : null;
    }

    async list(): Promise<ClonedRepo[]> {
        const all = await prisma.clonedRepo.findMany();
        return all.map(repo => new ClonedRepo(repo.id, repo.url, repo.name, repo.addsAt, repo.lastCommitId, repo.active, repo.localPath));
    }

    async deactivate(id: string, active: boolean): Promise<void> {
        await prisma.clonedRepo.update({
            where: { id: id },
            data: {
                active: active,
            }
        })
    }

    async checkIfUpdate(clonedRepo: ClonedRepo): Promise<boolean> {
        // TODO needs changes here in logic 
        const git = simpleGit(clonedRepo.localPath);
        await git.fetch();
        const localLog = await git.log(['-1']);
        if (localLog.latest) {
            const localHash = localLog.latest.hash;
            let remoteHash;
            try {
                remoteHash = await git.revparse(['origin/main']);
            } catch {
                try {
                    remoteHash = await git.revparse(['origin/master']);
                } catch {
                    return false;
                }
            }
            if (localHash !== remoteHash) {
                await git.pull();
                return true; 
            }
        }
        return false;
    }

}
