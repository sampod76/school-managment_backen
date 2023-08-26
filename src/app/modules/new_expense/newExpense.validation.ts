import { z } from 'zod';

const createNewExpenseZodSchema = z.object({
  body: z.object({
    expenseName: z.string({
      required_error: 'Expense Name is required',
    }),
    expenseHeader: z.string({
      required_error: 'Expense Header is required',
    }),
    date: z.string({
      required_error: 'Date is required',
    }),
    invoiceNumber: z.string({
      required_error: 'invoice number is required',
    }),
    quantity: z.number({
      required_error: 'Quantity is required',
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

const updateNewExpenseZodSchema = z.object({
  body: z.object({
    expenseName: z.string().optional(),
    expenseHeader: z.string().optional(),
    date: z.string().optional(),
    invoiceNumber: z.string().optional(),
    quantity: z.number().optional(),
    document: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const NewExpenseValidation = {
  createNewExpenseZodSchema,
  updateNewExpenseZodSchema,
};
