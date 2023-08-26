import { z } from 'zod';

const createNewIncomeZodSchema = z.object({
  body: z.object({
    incomeName: z.string({
      required_error: 'income Name is required',
    }),
    incomeHeader: z.string({
      required_error: 'income Header is required',
    }),
    date: z.string({
      required_error: 'Date is required',
    }),
    invoiceNumber: z.string({
      required_error: 'invoice number is required',
    }),
    amount: z.string({
      required_error: 'amount is required',
    }),
    document: z
      .string({
        required_error: 'document is required',
      })
      .optional(),
    description: z.string({
      required_error: 'description  is required',
    }),
  }),
});

const updateNewIncomeZodSchema = z.object({
  body: z.object({
    incomeName: z.string().optional(),
    incomeHeader: z.string().optional(),
    date: z.string().optional(),
    invoiceNumber: z.string().optional(),
    string: z.string().optional(),
    document: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const NewIncomeValidation = {
  createNewIncomeZodSchema,
  updateNewIncomeZodSchema,
};
