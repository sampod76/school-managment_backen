"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeValidation = void 0;
const zod_1 = require("zod");
const createNoticeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'নোটিসের শিরোনাম বাধ্যতামূলক',
        }),
        document: zod_1.z.string().max(300).optional(),
        notice_date: zod_1.z.string({
            required_error: 'নোটিশের তারিখ বাধ্যতামূলক',
        }).max(100),
        publishe_date: zod_1.z.string().max(100).optional(),
        message: zod_1.z.string().max(3000).optional(),
    }),
});
const updateNoticeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        document: zod_1.z.string().optional(),
        notice_date: zod_1.z.string().optional(),
        publishe_date: zod_1.z.string().optional(),
        message: zod_1.z.string().max(3000).optional(),
    }),
});
exports.NoticeValidation = {
    createNoticeZodSchema,
    updateNoticeZodSchema,
};
