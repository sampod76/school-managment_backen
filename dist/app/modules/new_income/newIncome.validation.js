"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewIncomeValidation = void 0;
const zod_1 = require("zod");
const createNewIncomeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        incomeName: zod_1.z.string({
            required_error: 'income Name is required',
        }),
        incomeHeader: zod_1.z.string({
            required_error: 'income Header is required',
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
const updateNewIncomeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        incomeName: zod_1.z.string().optional(),
        incomeHeader: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
        invoiceNumber: zod_1.z.string().optional(),
        string: zod_1.z.string().optional(),
        document: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
    }),
});
exports.NewIncomeValidation = {
    createNewIncomeZodSchema,
    updateNewIncomeZodSchema,
};
