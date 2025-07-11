// src/domain/interfaces/IAuthRequestRepository.ts

import { AuthRequest } from "../auth_request";


export interface IAuthRequestRepository {
  create(authRequest: AuthRequest): Promise<AuthRequest>;
  findById(id: string): Promise<AuthRequest | null>;
  list(): Promise<AuthRequest[]>;
  listBySession(sessionId: string): Promise<AuthRequest[]>;
  update(authRequest: AuthRequest): Promise<AuthRequest>;
}
