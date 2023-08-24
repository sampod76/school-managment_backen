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
exports.classController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const class_service_1 = require("./class.service");
const createClass = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const result = yield class_service_1.ClassService.createClass(user);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'class created successfully!',
        data: result,
    });
}));
// const getAllUsers = catchAsync(async (req: Request, res: Response) => {
//   // const  = req.headers.authorization;
//   // console.log(, '');
//   const result = await UserService.getAllUsers();
//   sendResponse<IUser[]>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Users retrieved successfully',
//     data: result,
//   });
// });
// const getSingleUser = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await UserService.getSingleUser(id);
//   sendResponse<IUser>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'User retrieved successfully',
//     data: result,
//   });
// });
// const updateUser = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const result = await UserService.updateUser(id, updatedData);
//   sendResponse<IUser>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'User updated successfully',
//     data: result,
//   });
// });
// const deleteUser = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await UserService.deleteUser(id);
//   sendResponse<IUser>(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'User deleted successfully',
//     data: result,
//   });
// });
exports.classController = {
    createClass,
    // getAllUsers,
    // getSingleUser,
    // updateUser,
    // deleteUser,
};
