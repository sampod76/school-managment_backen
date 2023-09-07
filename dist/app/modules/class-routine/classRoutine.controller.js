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
exports.classRoutineController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const classRoutine_service_1 = require("./classRoutine.service");
const createClassRoutine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const classRoutine = req.body;
    const result = yield classRoutine_service_1.ClassRoutineService.createClassRoutineToDb(classRoutine);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Class Routine created successfully!',
        data: result,
    });
}));
const getAllClassRoutine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield classRoutine_service_1.ClassRoutineService.getAllClassRoutineFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Class Routine retrieved successfully',
        data: result,
    });
}));
const getSingleClassRoutine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield classRoutine_service_1.ClassRoutineService.getSingleClassRoutineFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Class Routine retrieved successfully',
        data: result,
    });
}));
const updateClassRoutine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield classRoutine_service_1.ClassRoutineService.updateClassRoutineFromDb(id, updatedData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Class Routine updated successfully',
        data: result,
    });
}));
const deleteClassRoutine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield classRoutine_service_1.ClassRoutineService.deleteClassRoutineFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Class Routine deleted successfully',
        data: result,
    });
}));
exports.classRoutineController = {
    createClassRoutine,
    getAllClassRoutine,
    getSingleClassRoutine,
    updateClassRoutine,
    deleteClassRoutine,
};
