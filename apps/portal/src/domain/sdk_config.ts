// /src/domain/SDKConfig.ts
export class SDKConfig {
  constructor(
    public id: string,
    public orgId: string,
    public configJson: Record<string, any>,
    public isActive: boolean,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  activate() {
    this.isActive = true;
    this.updatedAt = new Date();
  }

  deactivate() {
    this.isActive = false;
    this.updatedAt = new Date();
  }
}
