// /src/domain/Organization.ts
export class Organization {
  constructor(
    public id: string,
    public name: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
