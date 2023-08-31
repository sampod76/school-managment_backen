import { z } from 'zod';

const createNoticeZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'নোটিসের শিরোনাম বাধ্যতামূলক',
    }),
    document: z.string().max(300).optional(),
    notice_date: z.string({
      required_error: 'নোটিশের তারিখ বাধ্যতামূলক',
    }).max(100),
    publishe_date: z.string().max(100).optional(),
    message: z.string().max(3000).optional(),
  }),
});

const updateNoticeZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    document: z.string().optional(),
    notice_date: z.string().optional(),
    publishe_date: z.string().optional(),
    message: z.string().max(3000).optional(),
  }),
});

export const NoticeValidation = {
  createNoticeZodSchema,
  updateNoticeZodSchema,
};
