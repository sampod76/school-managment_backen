import { Request, Response } from 'express';
import config from '../../../config';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { ILoginUserResponse, IRefreshTokenResponse } from './auth.interface';
import { AuthService } from './auth.service';
// import { ILoginUserResponse, IRefreshTokenResponse } from './auth.interface';
// import { AuthService } from './auth.service';

// const loginAdmin = catchAsync(async (req: Request, res: Response) => {
//   const { ...loginData } = req.body;
//   const result = await AuthService.loginAdmin(loginData);
//   const { refreshToken, ...others } = result;

//   // set refresh token into cookie

//   const cookieOptions = {
//     secure: config.env === 'production',
//     httpOnly: true,
//   };

//   res.cookie('refreshToken', refreshToken, cookieOptions);

//   sendResponse<ILoginUserResponse>(res, {
//     statusCode: 200,
//     success: true,
//     message: 'User logged in successfully !',
//     data: others,
//   });
// });

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);
  const { refreshToken, ...others } = result;

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<ILoginUserResponse>(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in successfully !',
    data: others,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await AuthService.refreshToken(refreshToken);

  // set refresh token into cookie

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: 200,
    success: true,
    message: 'Token generated successfully !',
    data: result,
  });
});

export const AuthController = {
  //   loginAdmin,
  loginUser,
  refreshToken,
};
