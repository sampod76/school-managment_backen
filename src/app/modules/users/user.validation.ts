import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    phone_number: z.string(),
    userId: z.string({
      required_error: 'user id is required',
    }),
    role: z.enum(['student', 'teacher',"super-admin"]),
    password: z.string({
      required_error: 'Password is required',
    }),
    name: z.object({
      name_bangla: z.string({
        required_error: 'bangla name is required',
      }),
      name_english: z.string({
        required_error: 'english name is required',
      }),
    }),
    email: z.string().optional(),
  }),
});
const updateUserZodSchema = z.object({
  body: z.object({
    phone_number: z.string({}).optional(),
    password: z.string({}).optional(),
    name: z
      .object({
        name_english: z.string({}).optional(),
        name_bangla: z.string({}).optional(),
      })
      .optional(),
      email: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
