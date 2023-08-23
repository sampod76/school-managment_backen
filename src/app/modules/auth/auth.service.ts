import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helper/jwtHelpers';
import ApiError from '../../errors/ApiError';
import { User } from '../users/user.model';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';

// const loginAdmin = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
//   const { phone_number, password } = payload;

//   // const isUserExist = await UserExistService.isUserExist(phone_number);
//   // const isUserExist = await Admin.findOne({ phone_number });
//   const isUserExist = await Admin.isUserExist(phone_number);
//   console.log(isUserExist, 'hi');

//   if (!isUserExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Admin does not exist');
//   }

//   if (
//     isUserExist.password &&
//     (await Admin.isPasswordMatched(password, isUserExist.password))
//   ) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
//   }
//   // if (
//   //   (isUserExist.password &&
//   //     !(await User.isPasswordMatched(password, isUserExist.password))) ||
//   //   !(await Admin.isPasswordMatched(password, isUserExist.password))
//   // ) {
//   //   throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
//   // }

//   //create access token & refresh token

//   // console.log(isUserExist._id.toString());
//   const { _id, role } = isUserExist;
//   console.log(_id);

//   const accessToken = jwtHelpers.createToken(
//     { _id, role },
//     config.jwt.secret as Secret,
//     config.jwt.expires_in as string
//   );

//   const refreshToken = jwtHelpers.createToken(
//     { _id, role },
//     config.jwt.refresh_secret as Secret,
//     config.jwt.refresh_expires_in as string
//   );

//   return {
//     accessToken,
//     refreshToken,
//     // needsPasswordChange,
//   };
// };

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { userId, password } = payload;

  const isUserExist = await User.isUserExist(userId);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const {name, role } = isUserExist;

  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    userId,
    password,
    role,
    name,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  //verify token
  // invalid token - synchronous

  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }

  const { userId } = verifiedToken;

  // tumi delete hye gso  kintu tumar refresh token ase
  // checking deleted user's refresh token

  // const isUserExist = await User.isUserExist(role);
  const isUserExist = await User.findById(userId);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }
  //generate new token

  const newAccessToken = jwtHelpers.createToken(
    {
      userId: isUserExist?.userId,
      role: isUserExist.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  // loginAdmin,
  loginUser,
  refreshToken,
};
