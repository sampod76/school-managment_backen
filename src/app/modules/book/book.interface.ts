/* eslint-disable no-unused-vars */

export type IBook = {
  bookName: string;
  bookCode: string;
  bookType: 'A' | 'B';
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
