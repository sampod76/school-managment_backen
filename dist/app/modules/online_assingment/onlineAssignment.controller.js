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
exports.onlineAssignmentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const onlineAssignment_service_1 = require("./onlineAssignment.service");
const createOnlineAssignment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const onlineAssignment = req.body;
    const result = yield onlineAssignment_service_1.OnlineAssignmentService.createOnlineAssignmentToDB(onlineAssignment);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Online Assignment created successfully!',
        data: result,
    });
}));
const getAllOnlineAssignment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield onlineAssignment_service_1.OnlineAssignmentService.getOnlineAssignmentToDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All Online Assignment retrieved successfully',
        data: result,
    });
}));
const getSingleOnlineAssignment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield onlineAssignment_service_1.OnlineAssignmentService.getSingleOnlineAssignmentFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Online Assignment retrieved successfully',
        data: result,
    });
}));
const updateSingleOnlineAssignment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield onlineAssignment_service_1.OnlineAssignmentService.updateOnlineAssignmentFromDb(id, updatedData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Online Assignment updated successfully',
        data: result,
    });
}));
const deleteOnlineAssignment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield onlineAssignment_service_1.OnlineAssignmentService.deleteOnlineAssignmentFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Online Assignment deleted successfully',
        data: result,
    });
}));
exports.onlineAssignmentController = {
    createOnlineAssignment,
    getAllOnlineAssignment,
    getSingleOnlineAssignment,
    updateSingleOnlineAssignment,
    deleteOnlineAssignment,
};
