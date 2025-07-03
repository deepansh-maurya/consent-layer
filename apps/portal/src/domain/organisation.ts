export class Organization {
    constructor(
        public id: string,
        public name: string,
        public createdAt: Date,
        public updatedAt: Date,
        // Multitenancy: Org's DB connection info
        public dbName?: string,
        public dbHost?: string,
        public dbUser?: string,
        public dbPassword?: string,
        public dbPort?: number,    // optional
        public dbSchema?: string,  // optional
        public slug?: string

    ) { }
}
