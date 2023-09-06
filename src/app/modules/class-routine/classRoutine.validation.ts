import { z } from 'zod';

const createClassRoutineZodSchema = z.object({
  body: z.object({
    class: z.string({
      required_error: 'Exam Name is required',
    }),
    section: z.string({
      required_error: 'Class Name is required',
    }),
    startTime: z.string({
      required_error: 'Date is required',
    }),
    endTime: z.string({
      required_error: 'Time is required',
    }),

    subject: z.string({
      required_error: 'Subject is required',
    }),
    teacher: z.string({
      required_error: 'Teacher is required',
    }),
  }),
});

const updateClassRoutineZodSchema = z.object({
  body: z.object({
    class: z.string().optional(),
    section: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    subject: z.string().optional(),
    teacher: z.string().optional(),
  }),
});

export const ClassRoutineValidation = {
  updateClassRoutineZodSchema,
  createClassRoutineZodSchema,
};
