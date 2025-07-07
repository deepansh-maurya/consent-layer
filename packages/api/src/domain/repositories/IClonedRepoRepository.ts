import { ClonedRepo } from "../cloned_repo";

export interface IClonedRepoRepository {
    create(clonedRepo: ClonedRepo): Promise<ClonedRepo>
    findById(id: string): Promise<ClonedRepo | null>
    list(): Promise<ClonedRepo[]>
    checkIfUpdate(clonedRepo: ClonedRepo): Promise<Boolean>
    deactivate(id: string,active:boolean): Promise<void>
}