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

const getExpensesTimeRangeFromDb = async (
  timeRange: string
): Promise<IExpense[] | null> => {
  function addLeadingZero(number: number) {
    if (number < 10) {
      return number.toString().padStart(2, '0');
    } else {
      return number.toString();
    }
  }

  let allExpense;

  const currentYear = new Date().getFullYear();
  const presentMonth = new Date().getMonth() + 1;
  const currentMonth = addLeadingZero(presentMonth);
  const date = new Date().getDate();
  const currentDate = addLeadingZero(date);
  const currentDateWithMonthYear = `${currentYear}-${currentMonth}-${currentDate}`;
  const currentDay = new Date().getDay() + 1;

  if (timeRange === 'yearly') {
    allExpense = await ExpenseModel.find({
      date: { $lte: `${currentYear}-12-31`, $gte: `${currentYear}-01-01` },
    }).sort({ _id: -1 });
  } else if (timeRange === 'monthly') {
    allExpense = await ExpenseModel.find({
      date: {
        $lte: `${currentYear}-${currentMonth}-31`,
        $gte: `${currentYear}-${currentMonth}-01`,
      },
    }).sort({ _id: -1 });
  } else if (timeRange === 'weekly') {
    let subDate;

    if (date > currentDay) {
      subDate = date - currentDay;
    } else {
      if (date > currentDay) {
        subDate = date - currentDay;
      } else {
        subDate = date - date + 1;
      }
    }
    subDate = addLeadingZero(subDate);
    allExpense = await ExpenseModel.find({
      date: {
        $lte: `${currentYear}-${currentMonth}-${currentDate}`,
        $gte: `${currentYear}-${currentMonth}-${subDate}`,
      },
    }).sort({ _id: -1 });
  } else if (timeRange === 'daily') {
    allExpense = await ExpenseModel.find({
      date: currentDateWithMonthYear,
    }).sort({ _id: -1 });
  }

  if (!allExpense) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Expenses'
    );
  }
  return allExpense;
};

const getAllNewExpensesFromDb = async (): Promise<IExpense[] | null> => {
  // const allBooks = await ExpenseModel.find({}).sort({ createdAt: -1 });
  const allExpense = await ExpenseModel.find({}).sort({ _id: -1 });

  if (!allExpense) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Expenses'
    );
  }
  return allExpense;
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
  getExpensesTimeRangeFromDb,
  getAllNewExpensesFromDb,
  getSingleNewExpenseFromDb,
  updateNewExpenseFromDb,
  deleteNewExpenseFromDb,
};
