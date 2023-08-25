"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const user_model_1 = require("./user.model");
const createUser = (userData) => {
    const createdUser = user_model_1.User.create(userData);
    if (!createdUser) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to create User first');
    }
    return createdUser;
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
exports.UserService = {
    createUser,
    // getAllUsers,
    // getSingleUser,
    // updateUser,
    // deleteUser,
};