import { Schema, model } from 'mongoose';
import IIncome from './newIncome.interface';

const earnSchema = new Schema<IIncome>({
  incomeName: { type: String, required: true },
  incomeHeader: { type: String, required: true },
  date: { type: String, required: true },
  invoiceNumber: { type: String, required: true },
  amount: { type: String, required: true },
  document: { type: String, required: false },
  description: { type: String, required: true },
});

export const IncomeModel = model<IIncome>('Income', earnSchema);
