import { Schema, model } from 'mongoose';
import IExpense from './newExpense.interface';

const earnSchema = new Schema<IExpense>({
  expenseName: { type: String, required: true },
  expenseHeader: { type: String, required: true },
  date: { type: String, required: true },
  invoiceNumber: { type: String, required: true },
  quantity: { type: Number, required: true },
  document: { type: String, required: false },
  description: { type: String, required: true },
});

export const ExpenseModel = model<IExpense>('Expense', earnSchema);
