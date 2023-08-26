"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewExpenseValidation = void 0;
const zod_1 = require("zod");
const createNewExpenseZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        expenseName: zod_1.z.string({
            required_error: 'Expense Name is required',
        }),
        expenseHeader: zod_1.z.string({
            required_error: 'Expense Header is required',
        }),
        date: zod_1.z.string({
            required_error: 'Date is required',
        }),
        invoiceNumber: zod_1.z.string({
            required_error: 'invoice number is required',
        }),
        amount: zod_1.z.string({
            required_error: 'amount is required',
        }),
        document: zod_1.z
            .string({
            required_error: 'document is required',
        })
            .optional(),
        description: zod_1.z.string({
            required_error: 'description  is required',
        }),
    }),
});
const updateNewExpenseZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        expenseName: zod_1.z.string().optional(),
        expenseHeader: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
        invoiceNumber: zod_1.z.string().optional(),
        amount: zod_1.z.string().optional(),
        document: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
    }),
});
exports.NewExpenseValidation = {
    createNewExpenseZodSchema,
    updateNewExpenseZodSchema,
};
