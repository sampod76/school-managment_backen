"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkPlanValidation = void 0;
const zod_1 = require("zod");
const createWorkPlanZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        work_plan_name: zod_1.z.string({
            required_error: 'Teacher Name is required',
        }),
        details: zod_1.z.string({
            required_error: 'Teacher designation is required',
        }),
        duration_date: zod_1.z.string({
            required_error: 'Teacher designation is required',
        }),
        plan_date: zod_1.z.string({
            required_error: 'Teacher designation is required',
        }),
        status: zod_1.z.enum(['active', 'inactive'], {
            required_error: 'Status is required',
        }),
    }),
});
const updateWorkPlanZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        work_plan_name: zod_1.z.string().optional(),
        details: zod_1.z.string().optional(),
        duration_date: zod_1.z.string().optional(),
        plan_date: zod_1.z.string().optional(),
        status: zod_1.z.enum(['active', 'inactive']).optional(),
    }),
});
exports.WorkPlanValidation = {
    createWorkPlanZodSchema,
    updateWorkPlanZodSchema,
};
