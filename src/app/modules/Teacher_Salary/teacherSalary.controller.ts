import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { ITeacherSalary } from './teacherSalary.interface';
import { TeacherSalaryService } from './teacherSalary.service';
// import { IClass } from './class.interface';
// import { ClassService } from './class.service';

const createTeacherSalary = catchAsync(async (req: Request, res: Response) => {
  const teacherSalary = req.body;
  const result = await TeacherSalaryService.CreateTeacherSalary(teacherSalary);

  sendResponse<ITeacherSalary>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Class created successfully!',
    data: result,
  });
});

// const getAllClasses = catchAsync(async (req: Request, res: Response) => {
//   const result = await ClassService.getAllClasses();

//   sendResponse<IClass[]>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Class retrieved successfully',
//     data: result,
//   });
// });

// const getSingleClass = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await ClassService.getSingleClass(id);

//   sendResponse<IClass>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Class retrieved successfully',
//     data: result,
//   });
// });

// const updateClass = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   const result = await ClassService.updateClass(id, updatedData);

//   sendResponse<IClass>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Class updated successfully',
//     data: result,
//   });
// });

// const deleteClass = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await ClassService.deleteClass(id);

//   sendResponse<IClass>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Class deleted successfully',
//     data: result,
//   });
// });

export const teacherSalaryController = {
  createTeacherSalary,
//   getAllClasses,
//   getSingleClass,
//   updateClass,
//   deleteClass,
};
