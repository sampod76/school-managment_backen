import { Schema, model } from 'mongoose';
import { STATUS } from '../../interface/enumType';
import { IWorkSchedule } from './workSchedule.interface';
const workScheduleSchema = new Schema<IWorkSchedule>(
  {
    work_name: {
      type: String,
      required: true,
    },
    work_details: {
      type: String,
      required: true,
    },
    work_for: {
      type: String,
   
      required: true,
    },
    assign_date: {
      type: String,
      required: true,
    },
    complete_date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum:STATUS,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

export const WorkScheduleModel = model<IWorkSchedule>('workSchedule', workScheduleSchema);