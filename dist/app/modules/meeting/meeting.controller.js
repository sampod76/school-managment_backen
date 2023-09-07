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
exports.meetingController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const meeting_service_1 = require("./meeting.service");
const createMeeting = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const meeting = req.body;
    const result = yield meeting_service_1.MeetingService.createMeetingFromDb(meeting);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Meeting created successfully!',
        data: result,
    });
}));
const getAllMeeting = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meeting_service_1.MeetingService.getAllMeetingFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Meeting retrieved successfully',
        data: result,
    });
}));
const getSingleMeeting = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield meeting_service_1.MeetingService.getSingleMeetingFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Meeting retrieved successfully',
        data: result,
    });
}));
const updateMeeting = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield meeting_service_1.MeetingService.updateMeetingFromDb(id, updatedData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Meeting updated successfully',
        data: result,
    });
}));
const deleteMeeting = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield meeting_service_1.MeetingService.deleteMeetingFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Meeting deleted successfully',
        data: result,
    });
}));
exports.meetingController = {
    createMeeting,
    getAllMeeting,
    getSingleMeeting,
    updateMeeting,
    deleteMeeting,
};
