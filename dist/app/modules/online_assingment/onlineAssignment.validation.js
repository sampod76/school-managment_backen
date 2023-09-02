"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineExamValidation = void 0;
const zod_1 = require("zod");
const createOnlineAssignmentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        dateFrom: zod_1.z.string({
            required_error: 'Date From is required',
        }),
        startTime: zod_1.z.string({
            required_error: 'Start Time is required',
        }),
        duration: zod_1.z.string({
            required_error: 'Duration is required',
        }),
        roomNo: zod_1.z.string({
            required_error: 'Room Number is required',
        }),
        markMin: zod_1.z.string({
            required_error: 'Minimum Mark is required',
        }),
        markMax: zod_1.z.string({
            required_error: 'Maximum Mark is required',
        }),
        exam: zod_1.z.string({
            required_error: 'Exam is required',
        }),
        quiz: zod_1.z.string({
            required_error: 'Quiz is required',
        }),
        question: zod_1.z.string({
            required_error: 'Question is required',
        }),
        attempts: zod_1.z.string({
            required_error: 'Attempts is required',
        }),
        examFrom: zod_1.z.string({
            required_error: 'Exam From is required',
        }),
        examTo: zod_1.z.string({
            required_error: 'Exam To is required',
        }),
        status: zod_1.z.enum(['active', 'inactive'], {
            required_error: 'Status is required',
        }),
        description: zod_1.z.string().optional(),
        subject: zod_1.z.string({
            required_error: 'Subject is required',
        }),
    }),
});
const updateOnlineAssignmentZodSchema = zod_1.z.object({
    dateFrom: zod_1.z.string().optional(),
    startTime: zod_1.z.string().optional(),
    duration: zod_1.z.string().optional(),
    roomNo: zod_1.z.string().optional(),
    markMin: zod_1.z.string().optional(),
    markMax: zod_1.z.string().optional(),
    exam: zod_1.z.string().optional(),
    quiz: zod_1.z.string().optional(),
    question: zod_1.z.string().optional(),
    attempts: zod_1.z.string().optional(),
    examFrom: zod_1.z.string().optional(),
    examTo: zod_1.z.string().optional(),
    status: zod_1.z.enum(['active', 'inactive']).optional(),
    description: zod_1.z.string().optional(),
    subject: zod_1.z.string().optional(),
});
exports.OnlineExamValidation = {
    createOnlineAssignmentZodSchema,
    updateOnlineAssignmentZodSchema,
};
