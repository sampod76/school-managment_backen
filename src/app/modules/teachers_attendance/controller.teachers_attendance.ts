import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { PAGINATION_FIELDS } from '../../../constant/pagination';
import catchAsync from '../../share/catchAsync';
import pick from '../../share/pick';
import sendResponse from '../../share/sendResponse';
import {teacherAttendanceFilterableFields } from './constant.teachers_attendance';

import { ITeacherAttendance } from './interface.teachers_attendance';
import { TeachersAttendanceService } from './service.teachers_attendance';

const getAllTeachersAttendances = catchAsync(
  async (req: Request, res: Response) => {
    const filter = pick(req.query,teacherAttendanceFilterableFields);
    const paginationOptions = pick(req.query, PAGINATION_FIELDS);

    const result =
      await TeachersAttendanceService.getAllTeachersAttendancesFromDb(
        filter,
        paginationOptions
      );
    sendResponse<ITeacherAttendance[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'TeachersAttendances retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

const createSingleTeachersAttendance = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result =
      await TeachersAttendanceService.createSingleTeachersAttendanceFromDb(
        req.body
      );
    sendResponse<ITeacherAttendance>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'TeachersAttendance create successfully !',
      data: result,
    });
  }
);
const getSingleTeachersAttendance = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result =
      await TeachersAttendanceService.getSingleTeachersAttendanceFromDb(id);

    sendResponse<ITeacherAttendance>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'TeachersAttendance retrieved successfully !',
      data: result,
    });
  }
);

const updateTeachersAttendance = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;

    const result =
      await TeachersAttendanceService.updateTeachersAttendanceFromDb(
        id,
        updatedData
      );

    sendResponse<ITeacherAttendance>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'TeachersAttendance updated successfully !',
      data: result,
    });
  }
);

const deleteTeachersAttendance = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result =
      await TeachersAttendanceService.deleteTeachersAttendanceFromDb(id);

    sendResponse<ITeacherAttendance>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'TeachersAttendance deleted successfully !',
      data: result,
    });
  }
);

export const TeachersAttendanceController = {
  getAllTeachersAttendances,
  getSingleTeachersAttendance,
  updateTeachersAttendance,
  deleteTeachersAttendance,
  createSingleTeachersAttendance,
};
