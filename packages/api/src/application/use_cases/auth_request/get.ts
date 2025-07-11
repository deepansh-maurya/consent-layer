// src/application/authRequest/getAuthRequestById.ts

import { AuthRequest } from "../../../domain/auth_request";
import { IAuthRequestRepository } from "../../../domain/repositories/IAuthRequest";

export async function getAuthRequestById(
  id: string,
  repoCtx: { authRequestRepository: IAuthRequestRepository }
): Promise<AuthRequest | null> {
  return await repoCtx.authRequestRepository.findById(id);
}


export async function listAuthRequests(
  repoCtx: { authRequestRepository: IAuthRequestRepository }
): Promise<AuthRequest[]> {
  return await repoCtx.authRequestRepository.list();
}

export async function listAuthRequestsBySession(
  scanningSessionId: string,
  repoCtx: { authRequestRepository: IAuthRequestRepository }
): Promise<AuthRequest[]> {
  return await repoCtx.authRequestRepository.listBySession(scanningSessionId);
}