import { z } from 'zod';

const createExamInformationZodSchema = z.object({
  body: z.object({
    examName: z.string({
      required_error: 'Exam Name is required',
    }),
    className: z.string({
      required_error: 'Class Name is required',
    }),
    date: z.string({
      required_error: 'Date is required',
    }),
    time: z.string({
      required_error: 'Time is required',
    }),
    status: z.enum(['active', 'inactive']).optional(),
    subject: z.string({
      required_error: 'Subject is required',
    }),
    teacher: z.string({
      required_error: 'Teacher is required',
    }),
  }),
});

const updateExamInformationZodSchema = z.object({
  body: z.object({
    examName: z.string().optional(),
    className: z.string().optional(),
    date: z.string().optional(),
    time: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional(),
    subject: z.string().optional(),
    teacher: z.string().optional(),
  }),
});

export const ExamInformationValidation = {
  createExamInformationZodSchema,
  updateExamInformationZodSchema,
};
