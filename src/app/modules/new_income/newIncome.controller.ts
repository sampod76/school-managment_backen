import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import IIncome from './newIncome.interface';
import { NewIncomeService } from './newIncome.service';

const createNewIncome = catchAsync(async (req: Request, res: Response) => {
  const income = req.body;
  console.log(income, 'test');
  const result = await NewIncomeService.createNewIncomeFromDb(income);

  sendResponse<IIncome>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Income created successfully!',
    data: result,
  });
});

const getDailyIncome = catchAsync(async (req: Request, res: Response) => {
  const result = await NewIncomeService.getDailyIncomeFromDb();
  //   console.log(result, 'control');

  sendResponse<IIncome[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Income retrieved successfully',
    data: result,
  });
});

const getWeeklyIncome = catchAsync(async (req: Request, res: Response) => {
  const result = await NewIncomeService.getWeeklyIncomesFromDb();

  sendResponse<IIncome[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Income retrieved successfully',
    data: result,
  });
});
const getMonthlyIncome = catchAsync(async (req: Request, res: Response) => {
  const result = await NewIncomeService.getMonthlyIncomesFromDb();

  sendResponse<IIncome[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense retrieved successfully',
    data: result,
  });
});
const getYearlyIncome = catchAsync(async (req: Request, res: Response) => {
  const result = await NewIncomeService.getYearlyIncomesFromDb();

  sendResponse<IIncome[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense retrieved successfully',
    data: result,
  });
});

const getAllNewIncome = catchAsync(async (req: Request, res: Response) => {
  const result = await NewIncomeService.getAllNewIncomesFromDb();

  sendResponse<IIncome[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Income retrieved successfully',
    data: result,
  });
});

const getSingleNewIncome = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await NewIncomeService.getSingleNewIncomeFromDb(id);

  sendResponse<IIncome>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Income retrieved successfully',
    data: result,
  });
});

const updateNewIncome = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await NewIncomeService.updateNewIncomeFromDb(id, updatedData);

  sendResponse<IIncome>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Income updated successfully',
    data: result,
  });
});

const deleteNewIncome = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await NewIncomeService.deleteNewIncomeFromDb(id);

  sendResponse<IIncome>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Income deleted successfully',
    data: result,
  });
});

export const newIncomeController = {
  createNewIncome,
  getDailyIncome,
  getWeeklyIncome,
  getMonthlyIncome,
  getYearlyIncome,
  getAllNewIncome,
  getSingleNewIncome,
  updateNewIncome,
  deleteNewIncome,
};
