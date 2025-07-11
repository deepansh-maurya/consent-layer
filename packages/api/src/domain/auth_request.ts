// src/domain/AuthRequest.ts

export class AuthRequest {
  constructor(
    public id: string,
    public scanningSessionId: string,
    public url: string,
    public reason: string,
    public requestedAt: Date,
    public providedBy: string | null,
    public providedAt: Date | null,
    public status: string // "PENDING" | "PROVIDED" | "SKIPPED"
  ) {}
}
