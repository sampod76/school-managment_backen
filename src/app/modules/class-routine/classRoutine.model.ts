import { Schema, model } from 'mongoose';
import { IClassRoutine } from './classRoutine.Interface';

export const STATUS = ['active', 'inactive'];

const ClassRoutineSchema = new Schema<IClassRoutine>(
  {
    class: {
      type: Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },

    subject: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'Teacher',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ClassRoutineModel = model<IClassRoutine>(
  'ClassRoutine',
  ClassRoutineSchema
);
