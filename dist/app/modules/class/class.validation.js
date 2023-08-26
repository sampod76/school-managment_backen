"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassValidation = void 0;
const zod_1 = require("zod");
const createClassZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        className: zod_1.z.string({
            required_error: 'Class Name is required',
        }),
        status: zod_1.z.enum(['active', 'inactive'], {
            required_error: 'Status is required',
        }),
    }),
});
const updateClassZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        className: zod_1.z.string().optional(),
        status: zod_1.z.enum(['active', 'inactive']).optional(),
    }),
});
exports.ClassValidation = {
    createClassZodSchema,
    updateClassZodSchema,
};
