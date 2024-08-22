import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { IClassRoutine } from './classRoutine.Interface';
import { ClassRoutineService } from './classRoutine.service';

const createClassRoutine = catchAsync(async (req: Request, res: Response) => {
  const classRoutine = req.body;
  const result = await ClassRoutineService.createClassRoutineToDb(classRoutine);

  sendResponse<IClassRoutine>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Class Routine created successfully!',
    data: result,
  });
});

const getAllClassRoutine = catchAsync(async (req: Request, res: Response) => {
  const result = await ClassRoutineService.getAllClassRoutineFromDb();

  sendResponse<IClassRoutine[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Class Routine retrieved successfully!',
    data: result,
  });
});

const getSingleClassRoutine = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await ClassRoutineService.getSingleClassRoutineFromDb(id);

    sendResponse<IClassRoutine>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Class Routine retrieved successfully!',
      data: result,
    });
  }
);

const updateClassRoutine = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const updatedData = req.body;

  const result = await ClassRoutineService.updateClassRoutineFromDb(
    id,
    updatedData
  );

  sendResponse<IClassRoutine>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Class Routine updated successfully!',
    data: result,
  });
});

const deleteClassRoutine = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ClassRoutineService.deleteClassRoutineFromDb(id);

  sendResponse<IClassRoutine>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Class Routine deleted successfully!',
    data: result,
  });
});

export const classRoutineController = {
  createClassRoutine,
  getAllClassRoutine,
  getSingleClassRoutine,
  updateClassRoutine,
  deleteClassRoutine,
};
