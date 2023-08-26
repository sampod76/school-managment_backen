import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import IIncome from './newIncome.interface';
import { IncomeModel } from './newIncome.model';

const createNewIncomeFromDb = async (
  BookData: IIncome
): Promise<IIncome | null> => {
  const createdCLass = IncomeModel.create(BookData);
  if (!createdCLass) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Income'
    );
  }
  return createdCLass;
};

const getAllNewIncomesFromDb = async (): Promise<IIncome[] | null> => {
  const allBooks = IncomeModel.find({});
  if (!allBooks) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Incomes'
    );
  }
  return allBooks;
};

const getSingleNewIncomeFromDb = async (
  id: string
): Promise<IIncome | null> => {
  const result = await IncomeModel.findOne({ _id: id });
  return result;
};

const updateNewIncomeFromDb = async (
  id: string,
  payload: Partial<IIncome>
): Promise<IIncome | null> => {
  const result = await IncomeModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Income not found!');
  }
  return result;
};

const deleteNewIncomeFromDb = async (id: string): Promise<IIncome | null> => {
  const isExist = await IncomeModel.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Income not found!');
  }
  const books = await IncomeModel.findOneAndDelete({ _id: id });
  if (!books) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete Income');
  }
  return books;
};

export const NewIncomeService = {
  createNewIncomeFromDb,
  getAllNewIncomesFromDb,
  getSingleNewIncomeFromDb,
  updateNewIncomeFromDb,
  deleteNewIncomeFromDb,
};
