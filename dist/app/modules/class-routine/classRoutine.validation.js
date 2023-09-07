"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRoutineValidation = void 0;
const zod_1 = require("zod");
const createClassRoutineZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        class: zod_1.z.string({
            required_error: 'Exam Name is required',
        }),
        section: zod_1.z.string({
            required_error: 'Class Name is required',
        }),
        startTime: zod_1.z.string({
            required_error: 'Date is required',
        }),
        endTime: zod_1.z.string({
            required_error: 'Time is required',
        }),
        subject: zod_1.z.string({
            required_error: 'Subject is required',
        }),
        teacher: zod_1.z.string({
            required_error: 'Teacher is required',
        }),
    }),
});
const updateClassRoutineZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        class: zod_1.z.string().optional(),
        section: zod_1.z.string().optional(),
        startTime: zod_1.z.string().optional(),
        endTime: zod_1.z.string().optional(),
        subject: zod_1.z.string().optional(),
        teacher: zod_1.z.string().optional(),
    }),
});
exports.ClassRoutineValidation = {
    updateClassRoutineZodSchema,
    createClassRoutineZodSchema,
};
