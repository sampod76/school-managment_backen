import { z } from 'zod';

const loginZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'ব্যবহারকারী আইডি বাধ্যতামূলক দিতে হবে',
    }),
    password: z.string({
      required_error: 'পাসওয়ার্ড বাধ্যতামূলক দিতে হবে',
    }),
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token is required',
    }),
  }),
});
export const AuthValidation = {
  loginZodSchema,
  refreshTokenZodSchema,
};
