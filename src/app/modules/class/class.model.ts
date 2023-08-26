import { Schema, model } from 'mongoose';
import { IClass } from './class.interface';
import { STATUS } from '../book/book.model';

const classSchema = new Schema<IClass>(
  {
    className: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: STATUS,// enum type
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

export const ClassModel = model<IClass>('Class', classSchema);
