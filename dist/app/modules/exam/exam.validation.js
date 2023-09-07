"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamInformationValidation = void 0;
const zod_1 = require("zod");
const createExamInformationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        examName: zod_1.z.string({
            required_error: 'Exam Name is required',
        }),
        className: zod_1.z.string({
            required_error: 'Class Name is required',
        }),
        date: zod_1.z.string({
            required_error: 'Date is required',
        }),
        time: zod_1.z.string({
            required_error: 'Time is required',
        }),
        status: zod_1.z.enum(['active', 'inactive']).optional(),
        subject: zod_1.z.string({
            required_error: 'Subject is required',
        }),
        teacher: zod_1.z.string({
            required_error: 'Teacher is required',
        }),
    }),
});
const updateExamInformationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        examName: zod_1.z.string().optional(),
        className: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
        time: zod_1.z.string().optional(),
        status: zod_1.z.enum(['active', 'inactive']).optional(),
        subject: zod_1.z.string().optional(),
        teacher: zod_1.z.string().optional(),
    }),
});
exports.ExamInformationValidation = {
    createExamInformationZodSchema,
    updateExamInformationZodSchema,
};
