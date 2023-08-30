"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeValidation = void 0;
const zod_1 = require("zod");
const createNoticeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন',
        }),
        document: zod_1.z.string(),
        noticeDate: zod_1.z.string({
            required_error: 'ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন',
        }),
        publishe_date: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
    }),
});
const updateNoticeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        document: zod_1.z.string().optional(),
        noticeDate: zod_1.z.string().optional(),
        publishe_date: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
    }),
});
exports.NoticeValidation = {
    createNoticeZodSchema,
    updateNoticeZodSchema,
};
