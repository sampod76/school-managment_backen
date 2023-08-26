export type IIncome = {
  incomeName: string;
  incomeHeader: string;
  date: string; // You can use a specific date format here
  invoiceNumber: string;
  amount: string;
  document?: string;
  description: string;
};

export default IIncome;
