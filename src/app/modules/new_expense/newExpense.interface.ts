export type IExpense = {
  expenseName: string;
  expenseHeader: string;
  date: string; // You can use a specific date format here
  invoiceNumber: string;
  amount: string;
  document?: string;
  description: string;
};

export default IExpense;
