// src/interfaces/serializers/organizationSerializer.ts

import { Organization } from "../../domain/organisation";

export const organizationSerializer = {
  serialize(org: Organization) {
    return {
      id: org.id,
      name: org.name,
      createdAt: org.createdAt.toISOString(),
      updatedAt: org.updatedAt.toISOString()
    };
  }
};
