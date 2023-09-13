"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'ব্যবহারকারী একাউন্ট তৈরি ব্যর্থ হয়েছে ');
    }
    return createdUser;
};
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = user_model_1.User.find();
    if (!allUsers) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'সকল ব্যবহারকারীর তথ্য পেতে ব্যর্থ হয়েছে');
    }
    return allUsers;
});
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
    getAllUsers,
    // getSingleUser,
    // updateUser,
    // deleteUser,
};
