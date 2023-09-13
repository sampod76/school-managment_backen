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
exports.StudentsAttendanceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const pagination_1 = require("../../../constant/pagination");
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const pick_1 = __importDefault(require("../../share/pick"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const constant_students_attendance_1 = require("./constant.students_attendance");
const service_students_attendance_1 = require("./service.students_attendance");
const getAllStudentsAttendances = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pick_1.default)(req.query, constant_students_attendance_1.studentAttendanceFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.PAGINATION_FIELDS);
    const result = yield service_students_attendance_1.StudentsAttendanceService.getAllStudentsAttendancesFromDb(filter, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'StudentsAttendances retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
}));
const createSingleStudentsAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield service_students_attendance_1.StudentsAttendanceService.createSingleStudentsAttendanceFromDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'StudentsAttendance create successfully !',
        data: result,
    });
}));
const getSingleStudentsAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_students_attendance_1.StudentsAttendanceService.getSingleStudentsAttendanceFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'StudentsAttendance retrieved successfully !',
        data: result,
    });
}));
const updateStudentsAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield service_students_attendance_1.StudentsAttendanceService.updateStudentsAttendanceFromDb(id, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'StudentsAttendance updated successfully !',
        data: result,
    });
}));
const deleteStudentsAttendance = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_students_attendance_1.StudentsAttendanceService.deleteStudentsAttendanceFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'StudentsAttendance deleted successfully !',
        data: result,
    });
}));
exports.StudentsAttendanceController = {
    getAllStudentsAttendances,
    getSingleStudentsAttendance,
    updateStudentsAttendance,
    deleteStudentsAttendance,
    createSingleStudentsAttendance,
};
