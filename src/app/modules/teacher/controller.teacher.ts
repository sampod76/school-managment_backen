import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PAGINATION_FIELDS } from '../../../constant/pagination';
import catchAsync from '../../share/catchAsync';
import pick from '../../share/pick';
import sendResponse from '../../share/sendResponse';
import { teacherSearchableFields } from './constant.teacher';

import { TeacherService } from './service.teacher';
import { ITeacher } from './interface.teacher';

const getAllTeachers = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, teacherSearchableFields);
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await TeacherService.getAllTeachersFromDb(
    filter,
    paginationOptions
  );
  sendResponse<ITeacher[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teachers retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const createSingleTeacher = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await TeacherService.createSingleTeacherFromDb(req.body);
  sendResponse<ITeacher>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teacher create successfully !',
    data: result,
  });
});
const getSingleTeacher = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await TeacherService.getSingleTeacherFromDb(id);

  sendResponse<ITeacher>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teacher retrieved successfully !',
    data: result,
  });
});

const updateTeacher = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await TeacherService.updateTeacherFromDb(id, updatedData);

  sendResponse<ITeacher>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teacher updated successfully !',
    data: result,
  });
});

const approvedTeacherAdminssion = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await TeacherService.approvedTeacherAdminssionFromDb(id, updatedData);

  sendResponse<any>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'অ্যাপ্লিকেশন আপডেট সফল হয়েছে',
    data: result,
  });
});

const deleteTeacher = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await TeacherService.deleteTeacherFromDb(id);

  sendResponse<ITeacher>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Teacher deleted successfully !',
    data: result,
  });
});

export const TeacherController = {
  getAllTeachers,
  getSingleTeacher,
  updateTeacher,
  deleteTeacher,
  createSingleTeacher,
  approvedTeacherAdminssion
};
