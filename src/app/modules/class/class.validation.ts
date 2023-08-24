import { z } from 'zod';

const createClassZodSchema = z.object({
  body: z.object({
    className: z.string({
      required_error: 'Class Name is required',
    }),
    status: z.enum(['active', 'inactive'], {
      required_error: 'Status is required',
    }),
  }),
});

const updateClassZodSchema = z.object({
  body: z.object({
    className: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional(),
  }),
});

export const ClassValidation = {
  createClassZodSchema,
  updateClassZodSchema,
};
