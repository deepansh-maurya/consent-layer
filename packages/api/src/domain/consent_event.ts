// /src/domain/ConsentEvent.ts

export class ConsentEvent {
  constructor(
    public id: string | null, // Mongoose _id, can be string or ObjectId; nullable if not yet saved
    public orgId: string,
    public userId: string,
    public categories: Record<string, any>, // or more specific type if you know it
    public timestamp: Date,
    public userAgent: string | null,
    public ipAddress: string | null,
    public eventType: 'accept' | 'reject' | 'update'
  ) {}

  // You could add business logic here, for example:
  isAcceptEvent() {
    return this.eventType === 'accept';
  }
  isRejectEvent() {
    return this.eventType === 'reject';
  }
  isUpdateEvent() {
    return this.eventType === 'update';
  }
}
