import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { ITeacherSalary } from './teacherSalary.interface';
import { TeacherSalaryService } from './teacherSalary.service';

const createTeacherSalary = catchAsync(async (req: Request, res: Response) => {
  const teacherSalary = req.body;
  const result = await TeacherSalaryService.CreateTeacherSalary(teacherSalary);

  sendResponse<ITeacherSalary>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Teacher Salary created successfully!',
    data: result,
  });
});

const getAllTeacherSalary = catchAsync(async (req: Request, res: Response) => {
  const result = await TeacherSalaryService.getAllTeacherSalary();

  sendResponse<ITeacherSalary[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Teachers Salary Info retrieved successfully',
    data: result,
  });
});

const updateTeacherSalary = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await TeacherSalaryService.updateTeacherSalary(
    id,
    updatedData
  );

  sendResponse<ITeacherSalary>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Teacher Salary updated successfully',
    data: result,
  });
});

const deleteTeacherSalaryController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id);

    const result = await TeacherSalaryService.deleteTeacherService(id);

    sendResponse<ITeacherSalary>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Class deleted successfully',
      data: result,
    });
  }
);

export const teacherSalaryController = {
  createTeacherSalary,
  getAllTeacherSalary,
  deleteTeacherSalaryController,
  updateTeacherSalary,
};
