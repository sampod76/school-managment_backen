import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import IIncome from './newIncome.interface';
import { IncomeModel } from './newIncome.model';

const createNewIncomeFromDb = async (
  IncomeData: IIncome
): Promise<IIncome | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  IncomeData.date = formattedDate;

  const createdCLass = IncomeModel.create(IncomeData);
  if (!createdCLass) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'নতুন আয় তৈরি করা ব্যর্থ হয়েছে'
    );
  }
  return createdCLass;
};

const getAllNewIncomesFromDb = async (): Promise<IIncome[] | null> => {
  const allIncomes = await IncomeModel.find({}).sort({ _id: -1 });

  console.log(allIncomes);

  if (!allIncomes) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'সকল আয় খুজে পাওয়া ব্যর্থ হয়েছে'
    );
  }
  return allIncomes;
};
const getIncomeTimeRangeFromDb = async (
  timeRange: string
): Promise<IIncome[] | null> => {
  function addLeadingZero(number: number) {
    if (number < 10) {
      return number.toString().padStart(2, '0');
    } else {
      return number.toString();
    }
  }

  let allIncomes;

  const currentYear = new Date().getFullYear();
  const presentMonth = new Date().getMonth() + 1;
  const currentMonth = addLeadingZero(presentMonth);
  const date = new Date().getDate();
  const currentDate = addLeadingZero(date);
  const currentDay = new Date().getDay();
  const currentDateWithMonthYear = `${currentYear}-${currentMonth}-${currentDate}`;

  if (timeRange === 'yearly') {
    allIncomes = await IncomeModel.find({
      date: { $lte: `${currentYear}-12-31`, $gte: `${currentYear}-01-01` },
    }).sort({ _id: -1 });
  } else if (timeRange === 'monthly') {
    allIncomes = await IncomeModel.find({
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
    allIncomes = await IncomeModel.find({
      date: {
        $lte: `${currentYear}-${currentMonth}-${currentDate}`,
        $gte: `${currentYear}-${currentMonth}-${subDate}`,
      },
    }).sort({ _id: -1 });
  } else if (timeRange === 'daily') {
    allIncomes = await IncomeModel.find({
      date: currentDateWithMonthYear,
    }).sort({ _id: -1 });
  }
  if (!allIncomes) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'সকল আয় খুজে পাওয়া ব্যর্থ হয়েছে'
    );
  }
  return allIncomes;
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
    throw new ApiError(httpStatus.NOT_FOUND, 'আয়ের তালিকা আপডেট করা ব্যর্থ হয়েছে!');
  }
  return result;
};

const deleteNewIncomeFromDb = async (id: string): Promise<IIncome | null> => {
  const isExist = await IncomeModel.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'আয় তৈরি করা ব্যর্থ হয়েছে!');
  }
  const books = await IncomeModel.findOneAndDelete({ _id: id });
  if (!books) {
    throw new ApiError(httpStatus.NOT_FOUND, 'আয়ের তালিকা মুছে ফেলা ব্যর্থ হয়েছে');
  }
  return books;
};

export const NewIncomeService = {
  createNewIncomeFromDb,
  getIncomeTimeRangeFromDb,
  getAllNewIncomesFromDb,
  getSingleNewIncomeFromDb,
  updateNewIncomeFromDb,
  deleteNewIncomeFromDb,
};
