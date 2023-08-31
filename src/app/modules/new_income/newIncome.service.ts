import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import IIncome from './newIncome.interface';
import { IncomeModel } from './newIncome.model';
// import test from './test';

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
      'failed to create Income'
    );
  }
  return createdCLass;
};

// const getDailyIncomeFromDb = async (): Promise<IIncome[] | null> => {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = (today.getMonth() + 1).toString().padStart(2, '0');
//   const day = today.getDate().toString().padStart(2, '0');

//   const formattedDate = `${year}-${month}-${day}`;
//   // console.log(formattedDate, 'date');

//   const AllIncomes = await IncomeModel.find({
//     date: { $eq: formattedDate },
//   }).exec();

//   // const totalAmount = AllIncomes.reduce((total, el) => {
//   //   if (el.amount) {
//   //     const amount = parseFloat(el.amount);
//   //     if (!isNaN(amount)) {
//   //       return total + amount;
//   //     }
//   //   }
//   //   return total;
//   // }, 0);

//   if (!AllIncomes) {
//     throw new ApiError(
//       httpStatus.EXPECTATION_FAILED,
//       'failed to get all Incomes'
//     );
//   }
//   return AllIncomes;
// };

const getWeeklyIncomesFromDb = async (): Promise<IIncome[] | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const allExpense = await IncomeModel.find({
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
const getMonthlyIncomesFromDb = async (): Promise<IIncome[] | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const allExpense = await IncomeModel.find({
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
const getYearlyIncomesFromDb = async (): Promise<IIncome[] | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const allExpense = await IncomeModel.find({
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

const getAllNewIncomesFromDb = async (): Promise<IIncome[] | null> => {
  const allIncomes = await IncomeModel.find({}).sort({ _id: -1 });

  console.log(allIncomes);

  if (!allIncomes) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Incomes'
    );
  }
  return allIncomes;
};
const getDailyIncomeFromDb = async (
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
  const currentDateWithMonthYear = `${currentYear}-${currentMonth}-${currentDate}`;
  const currentDay = new Date().getDay() + 1;

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
      subDate = date;
    }

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
      'failed to get all Incomes'
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
  getDailyIncomeFromDb,
  getWeeklyIncomesFromDb,
  getMonthlyIncomesFromDb,
  getYearlyIncomesFromDb,
  getAllNewIncomesFromDb,
  getSingleNewIncomeFromDb,
  updateNewIncomeFromDb,
  deleteNewIncomeFromDb,
};
