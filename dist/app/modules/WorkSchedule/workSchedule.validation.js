"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleValidation = void 0;
const zod_1 = require("zod");
const createWorkScheduleZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        work_name: zod_1.z.string({
            required_error: 'Teacher Name is required',
        }),
        work_details: zod_1.z.string({
            required_error: 'Teacher designation is required',
        }),
        work_for: zod_1.z.string({
            required_error: 'Teacher designation is required',
        }),
        assign_date: zod_1.z.string({
            required_error: 'Teacher designation is required',
        }),
        complete_date: zod_1.z.string({
            required_error: 'Teacher salary is required',
        }),
        status: zod_1.z.enum(['active', 'inactive'], {
            required_error: 'Status is required',
        }),
    }),
});
const updateWorkScheduleZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        work_name: zod_1.z.string().optional(),
        work_details: zod_1.z.string().optional(),
        work_for: zod_1.z.string().optional(),
        assign_date: zod_1.z.string().optional(),
        complete_date: zod_1.z.string().optional(),
        status: zod_1.z.enum(['active', 'inactive']).optional(),
    }),
});
exports.WorkScheduleValidation = {
    createWorkScheduleZodSchema,
    updateWorkScheduleZodSchema,
};
