import { z } from 'zod';

const createNoticeZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন',
    }),
    document: z.string(),
    noticeDate: z.string({
      required_error: 'ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন',
    }),
    publishe_date: z.string().optional(),
    message: z.string().optional(),
  }),
});

const updateNoticeZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    document: z.string().optional(),
    noticeDate: z.string().optional(),
    publishe_date: z.string().optional(),
    message: z.string().optional(),
  }),
});

export const NoticeValidation = {
  createNoticeZodSchema,
  updateNoticeZodSchema,
};
