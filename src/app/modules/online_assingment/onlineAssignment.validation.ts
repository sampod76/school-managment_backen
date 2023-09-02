import { z } from 'zod';

const createOnlineAssignmentZodSchema = z.object({
  body: z.object({
    dateFrom: z.string({
      required_error: 'Date From is required',
    }),
    startTime: z.string({
      required_error: 'Start Time is required',
    }),
    duration: z.string({
      required_error: 'Duration is required',
    }),
    roomNo: z.string({
      required_error: 'Room Number is required',
    }),
    markMin: z.string({
      required_error: 'Minimum Mark is required',
    }),
    markMax: z.string({
      required_error: 'Maximum Mark is required',
    }),
    exam: z.string({
      required_error: 'Exam is required',
    }),
    quiz: z.string({
      required_error: 'Quiz is required',
    }),
    question: z.string({
      required_error: 'Question is required',
    }),
    attempts: z.string({
      required_error: 'Attempts is required',
    }),
    examFrom: z.string({
      required_error: 'Exam From is required',
    }),
    examTo: z.string({
      required_error: 'Exam To is required',
    }),

    status: z.enum(['active', 'inactive'], {
      required_error: 'Status is required',
    }),
    description: z.string().optional(),
    subject: z.string({
      required_error: 'Subject is required',
    }),
  }),
});

const updateOnlineAssignmentZodSchema = z.object({
  dateFrom: z.string().optional(),
  startTime: z.string().optional(),
  duration: z.string().optional(),
  roomNo: z.string().optional(),
  markMin: z.string().optional(),
  markMax: z.string().optional(),
  exam: z.string().optional(),
  quiz: z.string().optional(),
  question: z.string().optional(),
  attempts: z.string().optional(),
  examFrom: z.string().optional(),
  examTo: z.string().optional(),

  status: z.enum(['active', 'inactive']).optional(),
  description: z.string().optional(),
  subject: z.string().optional(),
});

export const OnlineExamValidation = {
  createOnlineAssignmentZodSchema,
  updateOnlineAssignmentZodSchema,
};
