"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherSalaryValidation = void 0;
const zod_1 = require("zod");
const createTeacherSalaryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        teacher_name: zod_1.z.string({
            required_error: 'Teacher Name is required',
        }),
        teacher_designation: zod_1.z.string({
            required_error: 'Teacher designation is required',
        }),
        teacher_salary_scale: zod_1.z.enum(['A', 'B'], {
            required_error: 'Teacher salary_scale is required',
        }),
        salary: zod_1.z.string({
            required_error: 'Teacher salary is required',
        }),
        status: zod_1.z.enum(['active', 'inactive'], {
            required_error: 'Status is required',
        }),
    }),
});
const updateTeacherSalaryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        teacher_name: zod_1.z.string().optional(),
        teacher_designation: zod_1.z.enum(['A', 'B']).optional(),
        teacher_salary_scale: zod_1.z.string().optional(),
        salary: zod_1.z.string().optional(),
        status: zod_1.z.enum(['active', 'inactive']).optional(),
    }),
});
exports.TeacherSalaryValidation = {
    createTeacherSalaryZodSchema,
    updateTeacherSalaryZodSchema,
};
