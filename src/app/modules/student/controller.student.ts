import { Request, Response } from 'express';
import catchAsync from '../../share/catchAsync';
import pick from '../../share/pick';
import { studentFilterableFields } from './constant.student';
import sendResponse from '../../share/sendResponse';
import { IStudent } from './interface.student';
import httpStatus from 'http-status';
import { StudentService } from './service.student';
import { PAGINATION_FIELDS } from '../../../constant/pagination';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, studentFilterableFields);
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await StudentService.getAllStudentsFromDb(
    filter,
    paginationOptions
  );
  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.getSingleStudentFromDb(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrieved successfully !',
    data: result,
  });
});

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await StudentService.updateStudentFromDb(id, updatedData);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student updated successfully !',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await StudentService.deleteStudentFromDb(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully !',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
