import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { IUser } from './user.interface';
import { UserService } from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await UserService.createUser(user);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'user created successfully!',
    data: result,
  });
});

// const getAllUsers = catchAsync(async (req: Request, res: Response) => {
//   // const test = req.headers.authorization;
//   // console.log(test, 'testing');
//   const result = await UserService.getAllUsers();

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

export const userController = {
  createUser,
  // getAllUsers,
  // getSingleUser,
  // updateUser,
  // deleteUser,
};
