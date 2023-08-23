"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phone_number: zod_1.z.string(),
        userId: zod_1.z.string({
            required_error: 'user id is required',
        }),
        role: zod_1.z.enum(['student', 'teacher', "super-admin"]),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        name: zod_1.z.object({
            name_bangla: zod_1.z.string({
                required_error: 'bangla name is required',
            }),
            name_english: zod_1.z.string({
                required_error: 'english name is required',
            }),
        }),
        email: zod_1.z.string().optional(),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phone_number: zod_1.z.string({}).optional(),
        password: zod_1.z.string({}).optional(),
        name: zod_1.z
            .object({
            name_english: zod_1.z.string({}).optional(),
            name_bangla: zod_1.z.string({}).optional(),
        })
            .optional(),
        email: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};
