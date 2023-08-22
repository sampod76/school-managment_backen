import { Model } from 'mongoose';

/* eslint-disable no-unused-vars */
export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  userId: string;
  password: string;
  phoneNumber: string;
  role: 'student' | 'teacher' | 'admin';
  name: UserName;
  email: string;
};

export type UserModel = {
  isUserExist(
    userId: string
  ): Promise<
    Pick<
      IUser,
      'email' | 'name' | 'phoneNumber' | 'password' | 'role' | 'userId'
    >
  >;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
