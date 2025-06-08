// /src/domain/APIKey.ts
export class APIKey {
  constructor(
    public id: string,
    public orgId: string,
    public key: string,
    public createdAt: Date,
    public lastUsedAt: Date | null | number,
    public revoked: boolean,
  ) {}

  revoke() {
    this.revoked = true;
  }
}
