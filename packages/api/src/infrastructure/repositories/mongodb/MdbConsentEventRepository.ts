// /infrastructure/repositories/MongoConsentEventRepository.ts

import { ConsentEvent } from "../../../domain/consent_event";
import { IConsentEventRepository } from "../../../domain/repositories/IConsentEventRepository";
import { ConsentEventModel } from "../../db/mongoose/schemas/ConsentEvent";


export class MongoConsentEventRepository implements IConsentEventRepository {
  async logEvent(event: ConsentEvent): Promise<ConsentEvent> {
    const created = await ConsentEventModel.create({
      orgId: event.orgId,
      userId: event.userId,
      categories: event.categories,
      timestamp: event.timestamp,
      userAgent: event.userAgent,
      ipAddress: event.ipAddress,
      eventType: event.eventType,
    });
    return this.toDomain(created);
  }

  async findByOrg(orgId: string): Promise<ConsentEvent[]> {
    const events = await ConsentEventModel.find({ orgId }).exec();
    return events.map(this.toDomain);
  }

  async findByUser(orgId: string, userId: string): Promise<ConsentEvent[]> {
    const events = await ConsentEventModel.find({ orgId, userId }).exec();
    return events.map(this.toDomain);
  }

  async findByType(orgId: string, type: string): Promise<ConsentEvent[]> {
    const events = await ConsentEventModel.find({ orgId, eventType: type }).exec();
    return events.map(this.toDomain);
  }

  async listAll(): Promise<ConsentEvent[]> {
    const events = await ConsentEventModel.find().exec();
    return events.map(this.toDomain);
  }

  private toDomain(doc: any): ConsentEvent {
    return new ConsentEvent(
      doc._id.toString(),
      doc.orgId,
      doc.userId,
      doc.categories,
      doc.timestamp,
      doc.userAgent,
      doc.ipAddress,
      doc.eventType
    );
  }
}
