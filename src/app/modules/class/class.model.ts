import { Schema, model } from 'mongoose';
import { IClass } from './class.interface';

const classSchema = new Schema<IClass>(
  {
    className: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ClassModel = model<IClass>('Class', classSchema);
