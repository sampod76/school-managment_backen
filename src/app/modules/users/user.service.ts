import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = (userData: IUser): Promise<IUser | null> => {
  const createdUser = User.create(userData);

  if (!createdUser) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'ব্যবহারকারী একাউন্ট তৈরি ব্যর্থ হয়েছে '
    );
  }

  return createdUser;
};

const getAllUsers = async (): Promise<IUser[] | null> => {
  const allUsers = User.find();

  if (!allUsers) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'সকল ব্যবহারকারীর তথ্য পেতে ব্যর্থ হয়েছে'
    );
  }

  return allUsers;
};

// const getSingleUser = async (id: string): Promise<IUser | null> => {
//   const result = await User.findOne({ _id: id });

//   return result;
// };

// const updateUser = async (
//   id: string,
//   payload: Partial<IUser>
// ): Promise<IUser | null> => {
//   const result = await User.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });
//   if (!result) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');
//   }
//   return result;
// };

// const deleteUser = async (id: string): Promise<IUser | null> => {
//   const isExist = await User.findOne({ _id: id });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');
//   }

//   const user = await User.findOneAndDelete({ _id: id });

//   if (!user) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete user');
//   }

//   return user;
// };

export const UserService = {
  createUser,
  getAllUsers,
  // getSingleUser,
  // updateUser,
  // deleteUser,
};
