// src/application/authRequest/updateAuthRequest.ts

import { AuthRequest } from "../../../domain/auth_request";
import { IAuthRequestRepository } from "../../../domain/repositories/IAuthRequest";

export async function updateAuthRequest(
  req: AuthRequest,
  repoCtx: { authRequestRepository: IAuthRequestRepository }
): Promise<AuthRequest> {
  return await repoCtx.authRequestRepository.update(req);
}
