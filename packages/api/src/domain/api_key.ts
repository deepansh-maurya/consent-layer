// /src/domain/APIKey.ts
export class APIKey {
  constructor(
    public id: string,
    public orgId: string,
    public key: string,
    public createdAt: Date,
    public lastUsedAt: Date | null,
    public revoked: boolean,
  ) {}

  revoke() {
    this.revoked = true;
  }
}
