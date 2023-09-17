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
exports.TeachersAttendanceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const pagination_1 = require("../../../constant/pagination");
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const pick_1 = __importDefault(require("../../share/pick"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const constant_teachers_attendance_1 = require("./constant.teachers_attendance");
const service_teachers_attendance_1 = require("./service.teachers_attendance");
const getAllTeachersAttendances = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pick_1.default)(req.query, constant_teachers_attendance_1.teacherAttendanceFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.PAGINATION_FIELDS);
    const result = yield service_teachers_attendance_1.TeachersAttendanceService.getAllTeachersAttendancesFromDb(filter, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'TeachersAttendances retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
}));
const createSingleTeachersAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield service_teachers_attendance_1.TeachersAttendanceService.createSingleTeachersAttendanceFromDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'TeachersAttendance create successfully !',
        data: result,
    });
}));
const getSingleTeachersAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_teachers_attendance_1.TeachersAttendanceService.getSingleTeachersAttendanceFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'TeachersAttendance retrieved successfully !',
        data: result,
    });
}));
const updateTeachersAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield service_teachers_attendance_1.TeachersAttendanceService.updateTeachersAttendanceFromDb(id, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'TeachersAttendance updated successfully !',
        data: result,
    });
}));
const deleteTeachersAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_teachers_attendance_1.TeachersAttendanceService.deleteTeachersAttendanceFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'TeachersAttendance deleted successfully !',
        data: result,
    });
}));
exports.TeachersAttendanceController = {
    getAllTeachersAttendances,
    getSingleTeachersAttendance,
    updateTeachersAttendance,
    deleteTeachersAttendance,
    createSingleTeachersAttendance,
};
