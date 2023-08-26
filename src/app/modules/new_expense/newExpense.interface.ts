export type IExpense = {
  expenseName: string;
  expenseHeader: string;
  date: string; // You can use a specific date format here
  invoiceNumber: string;
  quantity: number;
  document?: string;
  description: string;
};

export default IExpense;
