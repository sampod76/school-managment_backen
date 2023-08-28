import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import IExpense from './newExpense.interface';
import { ExpenseModel } from './newExpense.model';

const createNewExpenseFromDb = async (
  ExpenseData: IExpense
): Promise<IExpense | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  ExpenseData.date = formattedDate;

  const createdCLass = ExpenseModel.create(ExpenseData);
  if (!createdCLass) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Expense'
    );
  }
  return createdCLass;
};

const getDailyExpensesFromDb = async (): Promise<IExpense[] | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const allExpense = await ExpenseModel.find({
    date: { $eq: formattedDate },
  }).exec();

  //   const totalAmount = allExpense.reduce((total, el) => {
  //     if (el.amount) {
  //       const amount = parseFloat(el.amount);
  //       if (!isNaN(amount)) {
  //         return total + amount;
  //       }
  //     }
  //     return total;
  //   }, 0);

  //   console.log('Total Amount:', totalAmount); // This will give you the sum of amounts

  if (!allExpense) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Expenses'
    );
  }
  return allExpense;
};
const getWeeklyExpensesFromDb = async (): Promise<IExpense[] | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const allExpense = await ExpenseModel.find({
    date: { $eq: formattedDate },
  }).exec();

  //   const totalAmount = allExpense.reduce((total, el) => {
  //     if (el.amount) {
  //       const amount = parseFloat(el.amount);
  //       if (!isNaN(amount)) {
  //         return total + amount;
  //       }
  //     }
  //     return total;
  //   }, 0);

  //   console.log('Total Amount:', totalAmount); // This will give you the sum of amounts

  if (!allExpense) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Expenses'
    );
  }
  return allExpense;
};
const getMonthlyExpensesFromDb = async (): Promise<IExpense[] | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const allExpense = await ExpenseModel.find({
    date: { $eq: formattedDate },
  }).exec();

  //   const totalAmount = allExpense.reduce((total, el) => {
  //     if (el.amount) {
  //       const amount = parseFloat(el.amount);
  //       if (!isNaN(amount)) {
  //         return total + amount;
  //       }
  //     }
  //     return total;
  //   }, 0);

  //   console.log('Total Amount:', totalAmount); // This will give you the sum of amounts

  if (!allExpense) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Expenses'
    );
  }
  return allExpense;
};
const getYearlyExpensesFromDb = async (): Promise<IExpense[] | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const allExpense = await ExpenseModel.find({
    date: { $eq: formattedDate },
  }).exec();

  //   const totalAmount = allExpense.reduce((total, el) => {
  //     if (el.amount) {
  //       const amount = parseFloat(el.amount);
  //       if (!isNaN(amount)) {
  //         return total + amount;
  //       }
  //     }
  //     return total;
  //   }, 0);

  //   console.log('Total Amount:', totalAmount); // This will give you the sum of amounts

  if (!allExpense) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Expenses'
    );
  }
  return allExpense;
};
const getAllNewExpensesFromDb = async (): Promise<IExpense[] | null> => {
  const allBooks = ExpenseModel.find({});
  if (!allBooks) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Expenses'
    );
  }
  return allBooks;
};

const getSingleNewExpenseFromDb = async (
  id: string
): Promise<IExpense | null> => {
  const result = await ExpenseModel.findOne({ _id: id });
  return result;
};

const updateNewExpenseFromDb = async (
  id: string,
  payload: Partial<IExpense>
): Promise<IExpense | null> => {
  const result = await ExpenseModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found!');
  }
  return result;
};

const deleteNewExpenseFromDb = async (id: string): Promise<IExpense | null> => {
  const isExist = await ExpenseModel.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Expense not found!');
  }
  const books = await ExpenseModel.findOneAndDelete({ _id: id });
  if (!books) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete Expense');
  }
  return books;
};

export const NewExpenseService = {
  createNewExpenseFromDb,
  getDailyExpensesFromDb,
  getWeeklyExpensesFromDb,
  getMonthlyExpensesFromDb,
  getYearlyExpensesFromDb,
  getAllNewExpensesFromDb,
  getSingleNewExpenseFromDb,
  updateNewExpenseFromDb,
  deleteNewExpenseFromDb,
};
