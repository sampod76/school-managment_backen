"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const createBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookName: zod_1.z.string({
            required_error: 'Book Name is required',
        }),
        status: zod_1.z.enum(['active', 'inactive'], {
            required_error: 'Status is required',
        }),
        bookCode: zod_1.z
            .string({
            required_error: 'Book code is required',
        })
            .optional(),
        class: zod_1.z
            .string({
            required_error: 'Class ID is required',
        })
            .optional(),
    }),
});
const updateBookZodSchema = zod_1.z.object({
    bookName: zod_1.z.string().optional(),
    status: zod_1.z.enum(['active', 'inactive']).optional(),
    bookCode: zod_1.z.string().optional(),
    class: zod_1.z.string().optional(),
});
exports.BookValidation = {
    createBookZodSchema,
    updateBookZodSchema,
};
