import { Schema, model } from 'mongoose';
import { IWorkPlan } from './workPlan.interface';

const workPlanSchema = new Schema<IWorkPlan>(
  {
    work_plan_name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    duration_date: {
      type: String,

      required: true,
    },
    plan_date: {
      type: String,
      required: true,
    },
    // status: {
    //   type: String,
    //   // enum: STATUS,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

export const WorkPlanModel = model<IWorkPlan>('workPlan', workPlanSchema);
