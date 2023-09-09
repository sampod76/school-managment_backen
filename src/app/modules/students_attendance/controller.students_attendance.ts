import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PAGINATION_FIELDS } from '../../../constant/pagination';
import catchAsync from '../../share/catchAsync';
import pick from '../../share/pick';
import sendResponse from '../../share/sendResponse';
import { studentAttendanceFilterableFields } from './constant.students_attendance';

import { IStudentAttendance } from './interface.students_attendance';
import { StudentsAttendanceService } from './service.students_attendance';

const getAllStudentsAttendances = catchAsync(
  async (req: Request, res: Response) => {
    const filter = pick(req.query, studentAttendanceFilterableFields);
    const paginationOptions = pick(req.query, PAGINATION_FIELDS);

    const result =
      await StudentsAttendanceService.getAllStudentsAttendancesFromDb(
        filter,
        paginationOptions
      );
    sendResponse<IStudentAttendance[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentsAttendances retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

const createSingleStudentsAttendance = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result =
      await StudentsAttendanceService.createSingleStudentsAttendanceFromDb(
        req.body
      );
    sendResponse<IStudentAttendance>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentsAttendance create successfully !',
      data: result,
    });
  }
);
const getSingleStudentsAttendance = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result =
      await StudentsAttendanceService.getSingleStudentsAttendanceFromDb(id);

    sendResponse<IStudentAttendance>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentsAttendance retrieved successfully !',
      data: result,
    });
  }
);

const updateStudentsAttendance = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;

    const result =
      await StudentsAttendanceService.updateStudentsAttendanceFromDb(
        id,
        updatedData
      );

    sendResponse<IStudentAttendance>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentsAttendance updated successfully !',
      data: result,
    });
  }
);

const deleteStudentsAttendance = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result =
      await StudentsAttendanceService.deleteStudentsAttendanceFromDb(id);

    sendResponse<IStudentAttendance>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StudentsAttendance deleted successfully !',
      data: result,
    });
  }
);

export const StudentsAttendanceController = {
  getAllStudentsAttendances,
  getSingleStudentsAttendance,
  updateStudentsAttendance,
  deleteStudentsAttendance,
  createSingleStudentsAttendance,
};
