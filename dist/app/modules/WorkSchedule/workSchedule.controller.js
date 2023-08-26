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
exports.workScheduleController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const workSchedule_service_1 = require("./workSchedule.service");
const createWorkSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workScheduleAssign = req.body;
    const result = yield workSchedule_service_1.WorkScheduleService.createWorkSchedule(workScheduleAssign);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Work Schedule created successfully!',
        data: result,
    });
}));
const getAllWorkScheduleController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield workSchedule_service_1.WorkScheduleService.getAllWorkSchedule();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All Work Schedule Info retrieved successfully',
        data: result,
    });
}));
const getSingleWork = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield workSchedule_service_1.WorkScheduleService.getSingleWorkService(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Work retrieved successfully',
        data: result,
    });
}));
const UpdateWorkSchedule = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield workSchedule_service_1.WorkScheduleService.updateWorkScheduleService(id, updatedData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Work Schedule updated successfully',
        data: result,
    });
}));
const deleteWorkScheduleController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log(id);
    const result = yield workSchedule_service_1.WorkScheduleService.deleteWorkScheduleService(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Work deleted successfully',
        data: result,
    });
}));
const getTodaysWorkController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const events = yield workSchedule_service_1.WorkScheduleService.getTodaysWork();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Today\'s Works retrieved successfully',
        data: events,
    });
}));
exports.workScheduleController = {
    createWorkSchedule,
    getAllWorkScheduleController,
    UpdateWorkSchedule,
    deleteWorkScheduleController,
    getSingleWork,
    getTodaysWorkController
};
