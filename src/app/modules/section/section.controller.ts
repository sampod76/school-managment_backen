import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { ISection } from './section.interface';
import { SectionService } from './section.service';

const createSection = catchAsync(async (req: Request, res: Response) => {
  const section = req.body;
  const result = await SectionService.createSection(section);

  sendResponse<ISection>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'section created successfully!',
    data: result,
  });
});

// const getAllSections = catchAsync(async (req: Request, res: Response) => {
//   // const  = req.headers.authorization;
//   // console.log(, '');
//   const result = await SectionService.getAllSection();

//   sendResponse<IUser[]>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Users retrieved successfully',
//     data: result,
//   });
// });

// const getSingleUser = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await UserService.getSingleUser(id);

//   sendResponse<IUser>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'User retrieved successfully',
//     data: result,
//   });
// });

// const updateUser = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   const result = await UserService.updateUser(id, updatedData);

//   sendResponse<IUser>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'User updated successfully',
//     data: result,
//   });
// });

// const deleteUser = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await UserService.deleteUser(id);

//   sendResponse<IUser>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'User deleted successfully',
//     data: result,
//   });
// });

export const sectionController = {
  createSection,
  // getAllSection,
  // getSingleSection,
  // updateSection,
  // deleteSection,
};
