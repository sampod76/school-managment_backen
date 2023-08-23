export type ILoginUser = {
  userId: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  userId: string;
  name:any;
  password?: string;
  role: string;
  phone_number?: string;
  // _id:string
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

// export type IVerifiedLoginUser = {
//   userId: string;
//   role: ENUM_USER_ROLE;
// };
