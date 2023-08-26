import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PAGINATION_FIELDS } from '../../../constant/pagination';
import catchAsync from '../../share/catchAsync';
import pick from '../../share/pick';
import sendResponse from '../../share/sendResponse';
import { studentFilterableFields } from './constant.student';
import { IStudent } from './interface.student';
import { StudentService } from './service.student';

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
    message: 'Students retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const createSingleStudent = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await StudentService.createSingleStudentFromDb(req.body);
  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student create successfully !',
    data: result,
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

const approvedStudentAdminssion = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await StudentService.approvedStudentAdminssionFromDb(id, updatedData);

  sendResponse<any>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'অ্যাপ্লিকেশন আপডেট সফল হয়েছে',
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
  createSingleStudent,
  approvedStudentAdminssion
};
