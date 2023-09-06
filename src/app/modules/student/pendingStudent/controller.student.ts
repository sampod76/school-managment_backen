import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PAGINATION_FIELDS } from '../../../../constant/pagination';
import catchAsync from '../../../share/catchAsync';
import pick from '../../../share/pick';
import sendResponse from '../../../share/sendResponse';
import { studentFilterableFields } from '../constant.student';
import { IStudent } from '../interface.student';
import { PendingStudentService } from './service.student';

const getAllPendingStudents = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, studentFilterableFields);
  const paginationOptions = pick(req.query, PAGINATION_FIELDS);

  const result = await PendingStudentService.getAllPendingStudentsFromDb(
    filter,
    paginationOptions
  );
  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'শিক্ষার্থী খোজা সফল হয়েছে!',
    meta: result.meta,
    data: result.data,
  });
});

const createSinglePendingStudent = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await PendingStudentService.createSinglePendingStudentFromDb(req.body);
  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'শিক্ষার্থী রেজিস্ট্রেশন আবেদন সফল হয়েছে !',
    data: result,
  });
});
const getSinglePendingStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await PendingStudentService.getSinglePendingStudentFromDb(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'শিক্ষার্থী খোজা সফল হয়েছে !',
    data: result,
  });
});

const updatePendingStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await PendingStudentService.updatePendingStudentFromDb(id, updatedData);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'শিক্ষার্থী ডাটা সফলভাবে আপডেট হয়েছে!',
    data: result,
  });
});

const approvedPendingStudentAdminssion = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await PendingStudentService.approvedPendingStudentAdminssionFromDb(id, updatedData);

  sendResponse<any>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'অ্যাপ্লিকেশন আপডেট সফল হয়েছে',
    data: result,
  });
});

const deletePendingStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await PendingStudentService.deletePendingStudentFromDb(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully !',
    data: result,
  });
});

export const PendingStudentController = {
  getAllPendingStudents,
  getSinglePendingStudent,
  updatePendingStudent,
  deletePendingStudent,
  createSinglePendingStudent,
  approvedPendingStudentAdminssion
};
