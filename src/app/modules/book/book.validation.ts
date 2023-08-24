import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    bookName: z.string({
      required_error: 'Book Name is required',
    }),
    status: z.enum(['active', 'inactive'], {
      required_error: 'Status is required',
    }),
    bookCode: z.string({
      required_error: 'Book code is required',
    }),
    class: z
      .string({
        required_error: 'Class ID is required',
      })
      .optional(),
  }),
});

const updateBookZodSchema = z.object({
  bookName: z.string().optional(),
  status: z.enum(['active', 'inactive']).optional(),
  bookCode: z.string().optional(),
  class: z.string().optional(),
});

export const BookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
};
