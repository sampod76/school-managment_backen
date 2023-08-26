import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import IExpense from './newExpense.interface';
import { ExpenseModel } from './newExpense.model';

const createNewExpenseFromDb = async (
  BookData: IExpense
): Promise<IExpense | null> => {
  const createdCLass = ExpenseModel.create(BookData);
  if (!createdCLass) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Expense'
    );
  }
  return createdCLass;
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
  getAllNewExpensesFromDb,
  getSingleNewExpenseFromDb,
  updateNewExpenseFromDb,
  deleteNewExpenseFromDb,
};
