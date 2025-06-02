// /src/domain/UserSession.ts
export class UserSession {
  constructor(
    public id: string,
    public orgId: string,
    public userId: string,
    public sessionId: string,
    public consentStatus: Record<string, any>,
    public lastUpdated: Date,
  ) {}

  updateConsent(newConsent: Record<string, any>) {
    this.consentStatus = newConsent;
    this.lastUpdated = new Date();
  }
}
