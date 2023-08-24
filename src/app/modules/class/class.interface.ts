/* eslint-disable no-unused-vars */

import { Types } from 'mongoose';

export type IClass = {
  className: string;
  status: 'active' | 'inactive';
  // section: Types.ObjectId;
  book: Types.ObjectId[];
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
