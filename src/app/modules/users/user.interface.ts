import { Model } from 'mongoose';

/* eslint-disable no-unused-vars */
export type UserName = {
  name_bangla: string;
  name_english: string;
};

export type IUser = {
  userId: string;
  password: string;
  phone_number?: string;
  role: "student" | 'teacher' | 'admin' | 'super-admin';
  name: UserName;
  email?: string;
};

export type UserModel = {
  isUserExist(
    userId: string
  ): Promise<
    Pick<
      IUser,
      'email' | 'name' | 'phone_number' | 'password' | 'role' | 'userId'
    >
  >;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
