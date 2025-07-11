// src/application/authRequest/createAuthRequest.ts
import { v4 as uuidv4 } from "uuid";
import { IAuthRequestRepository } from "../../../domain/repositories/IAuthRequest";
import { AuthRequest } from "../../../domain/auth_request";

export async function createAuthRequest(
  scanningSessionId: string,
  url: string,
  reason: string,
  requestedAt: Date,
  providedBy: string | null,
  providedAt: Date | null,
  status: string,
  repoCtx: { authRequestRepository: IAuthRequestRepository }
): Promise<AuthRequest> {
  const req = new AuthRequest(
    uuidv4(), scanningSessionId, url, reason, requestedAt, providedBy, providedAt, status
  );
  return await repoCtx.authRequestRepository.create(req);
}
