import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import IExpense from './newExpense.interface';
import { NewExpenseService } from './newExpense.service';

const createNewExpense = catchAsync(async (req: Request, res: Response) => {
  const income = req.body;
  console.log(income, 'test');
  const result = await NewExpenseService.createNewExpenseFromDb(income);

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
  getAllNewExpense,
  getSingleNewExpense,
  updateNewExpense,
  deleteNewExpense,
};
