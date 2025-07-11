// src/domain/FailedPage.ts

export class FailedPage {
  constructor(
    public id: string,
    public scanningSessionId: string,
    public url: string,
    public failReason: string,  // Use string to match enum
    public attempts: number,
    public lastAttemptAt: Date,
    public message: string | null,
    public parentUrl: string | null
  ) {}
}
