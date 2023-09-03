import { Model, Schema, model } from 'mongoose';
import { STATUS } from '../book/book.model';
import { IOnlineAssignment } from './onlineAssignment.interface';

const onlineAssignmentScheema = new Schema<IOnlineAssignment>({
  dateFrom: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  roomNo: {
    type: String,
    required: true,
  },
  markMin: {
    type: String,
    required: true,
  },
  markMax: {
    type: String,
    required: true,
  },
  exam: {
    type: String,
    required: true,
  },
  quiz: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  attempts: {
    type: String,
    required: true,
  },
  examFrom: {
    type: String,
    required: true,
  },
  examTo: {
    type: String,
    required: true,
  },
  examPublished: {
    type: Boolean,
  },
  resultPublished: {
    type: Boolean,
  },
  status: {
    type: String,
    enum: STATUS,
    required: true,
  },
  description: String,
  subject: {
    type: Schema.Types.ObjectId,
    ref: 'Book', // 'Book' model name for the subject
    required: true,
  },
});

export const OnlineAssignmentModel: Model<IOnlineAssignment> = model(
  'OnlineAssignment',
  onlineAssignmentScheema
);
