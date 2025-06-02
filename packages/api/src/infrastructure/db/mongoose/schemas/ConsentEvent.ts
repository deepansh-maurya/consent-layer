// /packages/api/src/models/ConsentEvent.ts
import mongoose from 'mongoose';

const ConsentEventSchema = new mongoose.Schema({
  org_id: { type: String, required: true },
  user_id: { type: String, required: true },
  categories: { type: Object, required: true },
  timestamp: { type: Date, default: Date.now },
  user_agent: { type: String },
  ip_address: { type: String },
  event_type: { type: String, enum: ['accept', 'reject', 'update'], required: true }
});

export const ConsentEventModel = mongoose.model('ConsentEvent', ConsentEventSchema);
