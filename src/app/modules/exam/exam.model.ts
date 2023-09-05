import { Schema, Types, model } from 'mongoose';
import { IExamInformation } from './exam.interface';

export const STATUS = ['active', 'inactive'];

const examSchema = new Schema<IExamInformation>(
  {
    examName: { type: String, required: true },
    className: { type: Types.ObjectId, ref: 'Class' },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'] },
    subject: { type: Types.ObjectId, ref: 'Book' },
    teacher: { type: Types.ObjectId, ref: 'Teacher' },
  },
  {
    timestamps: true,
  }
);

export const ExamModel = model<IExamInformation>('Exam', examSchema);
