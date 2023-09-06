import { z } from 'zod';

const createWorkPlanZodSchema = z.object({
  body: z.object({
    work_plan_name: z.string({
      required_error: 'Teacher Name is required',
    }),
    details: z.string({
      required_error: 'Teacher designation is required',
    }),

    duration_date: z.string({
      required_error: 'Teacher designation is required',
    }),

    plan_date: z.string({
      required_error: 'Teacher designation is required',
    }),

    // status: z.enum(['active', 'inactive'], {
    //   required_error: 'Status is required',
    // }),
  }),
});

const updateWorkPlanZodSchema = z.object({
  body: z.object({
    work_plan_name: z.string().optional(),
    details: z.string().optional(),
    duration_date: z.string().optional(),
    plan_date: z.string().optional(),

    // status: z.enum(['active', 'inactive']).optional(),
  }),
});

export const WorkPlanValidation = {
  createWorkPlanZodSchema,
  updateWorkPlanZodSchema,
};
