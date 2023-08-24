import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IBook } from './book.interface';
import { BookModel } from './book.model';

const createBook = (BookData: IBook): Promise<IBook | null> => {
  const createdCLass = BookModel.create(BookData);

  if (!createdCLass) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Book first'
    );
  }

  return createdCLass;
};

// const getAllUsers = async (): Promise<IUser[] | null> => {
//   const allUsers = User.find();

//   if (!allUsers) {
//     throw new ApiError(
//       httpStatus.EXPECTATION_FAILED,
//       'failed to get all Users'
//     );
//   }

//   return allUsers;
// };

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

export const BookService = {
  createBook,
  // getAllUsers,
  // getSingleUser,
  // updateUser,
  // deleteUser,
};
