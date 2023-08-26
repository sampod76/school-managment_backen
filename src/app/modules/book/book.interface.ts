/* eslint-disable no-unused-vars */

import { ObjectId } from "mongoose";

export type IBook = {
  _id:ObjectId
  bookName: string;
  bookCode: string;
  bookType: string;
  status: 'active' | 'inactive';
};

// export type UserModel = {
//   isUserExist(
//     userId: string
//   ): Promise<
//     Pick<
//       IUser,
//       'email' | 'name' | 'phoneNumber' | 'password' | 'role' | 'userId'
//     >
//   >;
//   isPasswordMatched(
//     givenPassword: string,
//     savedPassword: string
//   ): Promise<boolean>;
// } & Model<IUser>;
