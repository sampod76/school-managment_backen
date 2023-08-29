import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import IExpense from './newExpense.interface';
import { NewExpenseService } from './newExpense.service';

const createNewExpense = catchAsync(async (req: Request, res: Response) => {
  const expense = req.body;
  console.log(expense, 'now');
  const result = await NewExpenseService.createNewExpenseFromDb(expense);

  sendResponse<IExpense>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense created successfully!',
    data: result,
  });
});

const getAllNewExpense = catchAsync(async (req: Request, res: Response) => {
  const result = await NewExpenseService.getAllNewExpensesFromDb();

  sendResponse<IExpense[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense retrieved successfully',
    data: result,
  });
});
const getDailyExpense = catchAsync(async (req: Request, res: Response) => {
  console.log('h1');
  const result = await NewExpenseService.getDailyExpensesFromDb();

  sendResponse<IExpense[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense retrieved successfully',
    data: result,
  });
});
const getWeeklyExpense = catchAsync(async (req: Request, res: Response) => {
  const result = await NewExpenseService.getWeeklyExpensesFromDb();

  sendResponse<IExpense[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense retrieved successfully',
    data: result,
  });
});
const getMonthlyExpense = catchAsync(async (req: Request, res: Response) => {
  const result = await NewExpenseService.getMonthlyExpensesFromDb();

  sendResponse<IExpense[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense retrieved successfully',
    data: result,
  });
});
const getYearlyExpense = catchAsync(async (req: Request, res: Response) => {
  const result = await NewExpenseService.getYearlyExpensesFromDb();

  sendResponse<IExpense[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense retrieved successfully',
    data: result,
  });
});

const getSingleNewExpense = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await NewExpenseService.getSingleNewExpenseFromDb(id);

  sendResponse<IExpense>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense retrieved successfully',
    data: result,
  });
});

const updateNewExpense = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log(id, 'I am checking anisa');
  console.log(updatedData, 'I am checking anisa');

  const result = await NewExpenseService.updateNewExpenseFromDb(
    id,
    updatedData
  );

  sendResponse<IExpense>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense updated successfully',
    data: result,
  });
});

const deleteNewExpense = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await NewExpenseService.deleteNewExpenseFromDb(id);

  sendResponse<IExpense>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Expense deleted successfully',
    data: result,
  });
});

export const newExpenseController = {
  createNewExpense,
  getDailyExpense,
  getWeeklyExpense,
  getMonthlyExpense,
  getYearlyExpense,
  getAllNewExpense,
  getSingleNewExpense,
  updateNewExpense,
  deleteNewExpense,
};
