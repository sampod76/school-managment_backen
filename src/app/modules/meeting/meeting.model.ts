import { Schema, model } from 'mongoose';
import IMeeting from './meeting.interface';

const meetingSchema = new Schema<IMeeting>({
  name: { type: String, required: true },
  date: { type: String, required: true },
  subject: { type: String, required: true },
  participant: [{ type: String, trim: true }],
});

export const MeetingModel = model<IMeeting>('Meeting', meetingSchema);
