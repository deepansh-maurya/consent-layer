

export class ClonedRepo {

    constructor(
        public id: string,
        public url: string,
        public name: string,
        public addsAt: Date,
        public lastCommitId: string,
        public active: Boolean,
        public localPath:string
    ) {}

}