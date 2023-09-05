import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';

import { IExamInformation } from './exam.interface';
import { ExamService } from './exam.service';

const createExam = catchAsync(async (req: Request, res: Response) => {
  const exam = req.body;
  const result = await ExamService.createExamToDb(exam);

  sendResponse<IExamInformation>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Exam created successfully!',
    data: result,
  });
});

const getAllExams = catchAsync(async (req: Request, res: Response) => {
  const result = await ExamService.getAllExamFromDb();

  sendResponse<IExamInformation[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Exam retrieved successfully',
    data: result,
  });
});

const getSingleExam = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ExamService.getSingleExamFromDb(id);

  sendResponse<IExamInformation>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Exam retrieved successfully',
    data: result,
  });
});

const updateExam = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const updatedData = req.body;

  const result = await ExamService.updateExamFromDb(id, updatedData);

  sendResponse<IExamInformation>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Exam updated successfully',
    data: result,
  });
});

const deleteExam = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await ExamService.deleteExamFromDb(id);

  sendResponse<IExamInformation>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Exam deleted successfully',
    data: result,
  });
});

export const examController = {
  createExam,
  getAllExams,
  getSingleExam,
  updateExam,
  deleteExam,
};
