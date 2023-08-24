"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneNumber: zod_1.z.string({
            required_error: 'Phone number is required',
        }),
        userId: zod_1.z.string({
            required_error: 'user id is required',
        }),
        role: zod_1.z.enum(['student', 'teacher']),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        name: zod_1.z.object({
            firstName: zod_1.z.string({
                required_error: 'First name is required',
            }),
            lastName: zod_1.z.string({
                required_error: 'last name is required',
            }),
        }),
        email: zod_1.z.string({
            required_error: 'email is required',
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        phoneNumber: zod_1.z.string({}).optional(),
        password: zod_1.z.string({}).optional(),
        name: zod_1.z
            .object({
            firstName: zod_1.z.string({}).optional(),
            lastName: zod_1.z.string({}).optional(),
        })
            .optional(),
        address: zod_1.z.string({}).optional(),
        budget: zod_1.z.number({}).optional(),
        income: zod_1.z.number({}).optional(),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};
