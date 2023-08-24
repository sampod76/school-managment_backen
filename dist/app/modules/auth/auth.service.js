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
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helper/jwtHelpers");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const user_model_1 = require("../users/user.model");
// const loginAdmin = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
//   const { phone_number, password } = payload;
//   // const isUserExist = await UserExistService.isUserExist(phone_number);
//   // const isUserExist = await Admin.findOne({ phone_number });
//   const isUserExist = await Admin.isUserExist(phone_number);
//   console.log(isUserExist, 'hi');
//   if (!isUserExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Admin does not exist');
//   }
//   if (
//     isUserExist.password &&
//     (await Admin.isPasswordMatched(password, isUserExist.password))
//   ) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
//   }
//   // if (
//   //   (isUserExist.password &&
//   //     !(await User.isPasswordMatched(password, isUserExist.password))) ||
//   //   !(await Admin.isPasswordMatched(password, isUserExist.password))
//   // ) {
//   //   throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
//   // }
//   //create access token & refresh token
//   // console.log(isUserExist._id.toString());
//   const { _id, role } = isUserExist;
//   console.log(_id);
//   const accessToken = jwtHelpers.createToken(
//     { _id, role },
//     config.jwt.secret as Secret,
//     config.jwt.expires_in as string
//   );
//   const refreshToken = jwtHelpers.createToken(
//     { _id, role },
//     config.jwt.refresh_secret as Secret,
//     config.jwt.refresh_expires_in as string
//   );
//   return {
//     accessToken,
//     refreshToken,
//     // needsPasswordChange,
//   };
// };
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, password } = payload;
    const isUserExist = yield user_model_1.User.isUserExist(userId);
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    if (isUserExist.password &&
        !(yield user_model_1.User.isPasswordMatched(password, isUserExist.password))) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    const { name, role } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
        userId,
        password,
        role,
        name
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    //verify token
    // invalid token - synchronous
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_secret);
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Invalid Refresh Token');
    }
    const { userId } = verifiedToken;
    // tumi delete hye gso  kintu tumar refresh token ase
    // checking deleted user's refresh token
    // const isUserExist = await User.isUserExist(role);
    const isUserExist = yield user_model_1.User.findById(userId);
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    //generate new token
    const newAccessToken = jwtHelpers_1.jwtHelpers.createToken({
        userId: isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.userId,
        role: isUserExist.role,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return {
        accessToken: newAccessToken,
    };
});
exports.AuthService = {
    // loginAdmin,
    loginUser,
    refreshToken,
};
