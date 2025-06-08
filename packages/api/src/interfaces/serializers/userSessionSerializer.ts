import { UserSession } from "../../domain/user_session";

export const userSessionSerializer = {
  serialize(session: UserSession) {
    return {
      id: session.id,
      orgId: session.orgId,
      userId: session.userId,
      sessionId: session.sessionId,
      consentStatus: session.consentStatus,
      lastUpdated: session.lastUpdated.toISOString(),
    };
  }
};
