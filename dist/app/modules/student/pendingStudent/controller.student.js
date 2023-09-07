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
exports.PendingStudentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const pagination_1 = require("../../../../constant/pagination");
const catchAsync_1 = __importDefault(require("../../../share/catchAsync"));
const pick_1 = __importDefault(require("../../../share/pick"));
const sendResponse_1 = __importDefault(require("../../../share/sendResponse"));
const constant_student_1 = require("../constant.student");
const service_student_1 = require("./service.student");
const getAllPendingStudents = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = (0, pick_1.default)(req.query, constant_student_1.studentFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.PAGINATION_FIELDS);
    const result = yield service_student_1.PendingStudentService.getAllPendingStudentsFromDb(filter, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'শিক্ষার্থী খোজা সফল হয়েছে!',
        meta: result.meta,
        data: result.data,
    });
}));
const createSinglePendingStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const result = yield service_student_1.PendingStudentService.createSinglePendingStudentFromDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'শিক্ষার্থী রেজিস্ট্রেশন আবেদন সফল হয়েছে !',
        data: result,
    });
}));
const getSinglePendingStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_student_1.PendingStudentService.getSinglePendingStudentFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'শিক্ষার্থী খোজা সফল হয়েছে !',
        data: result,
    });
}));
const updatePendingStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield service_student_1.PendingStudentService.updatePendingStudentFromDb(id, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'শিক্ষার্থী ডাটা সফলভাবে আপডেট হয়েছে!',
        data: result,
    });
}));
const approvedPendingStudentAdminssion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield service_student_1.PendingStudentService.approvedPendingStudentAdminssionFromDb(id, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'অ্যাপ্লিকেশন আপডেট সফল হয়েছে',
        data: result,
    });
}));
const deletePendingStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_student_1.PendingStudentService.deletePendingStudentFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Student deleted successfully !',
        data: result,
    });
}));
exports.PendingStudentController = {
    getAllPendingStudents,
    getSinglePendingStudent,
    updatePendingStudent,
    deletePendingStudent,
    createSinglePendingStudent,
    approvedPendingStudentAdminssion
};
