export type ILoginUser = {
  userId: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  userId: string;
  password: string;
  role: string;
  phone_number: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

// export type IVerifiedLoginUser = {
//   userId: string;
//   role: ENUM_USER_ROLE;
// };
