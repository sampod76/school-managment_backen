import { Schema, model } from 'mongoose';
import IMeeting from './meeting.interface';

const meetingSchema = new Schema<IMeeting>({
  meeting_subject: { type: String, required: true },
  meeting_place: { type: String, required: true },
  meeting_date: { type: String, required: true },
  details: { type: String, required: true },
  participants: [{ type: String, trim: true }],
});

export const MeetingModel = model<IMeeting>('Meeting', meetingSchema);
