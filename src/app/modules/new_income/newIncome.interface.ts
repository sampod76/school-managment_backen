export type IIncome = {
  incomeName: string;
  incomeHeader: string;
  date: string; // You can use a specific date format here
  invoiceNumber: string;
  amount: string;
  document?: string;
  description: string;
};
export type ITimeRange = {
  yearly: string;
  monthly: string;
  weekly: string;
  daily: string;
};

export default IIncome;
