import { z } from 'zod';

const createWorkScheduleZodSchema = z.object({
  body: z.object({
    work_name: z.string({
      required_error: 'Teacher Name is required',
    }),
    work_details: z.string({
      required_error: 'Teacher designation is required',
    }),
   
    work_for: z.string({
      required_error: 'Teacher designation is required',
    }),
   
    assign_date: z.string({
      required_error: 'Teacher designation is required',
    }),
   
    complete_date: z.string({
      required_error: 'Teacher salary is required',
    }),
    status: z.enum(['active', 'inactive'], {
      required_error: 'Status is required',
    }),
  }),
});

const updateWorkScheduleZodSchema = z.object({
  body: z.object({
    work_name: z.string().optional(),
    work_details: z.string().optional(),
    work_for: z.string().optional(),
    assign_date: z.string().optional(),
    complete_date: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional(),
  }),
});

export const WorkScheduleValidation = {
    createWorkScheduleZodSchema,
    updateWorkScheduleZodSchema,
};