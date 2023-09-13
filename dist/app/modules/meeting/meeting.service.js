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
exports.MeetingService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const meeting_model_1 = require("./meeting.model");
const createMeetingFromDb = (MeetingData) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    MeetingData.meeting_date = formattedDate;
    const createdCLass = meeting_model_1.MeetingModel.create(MeetingData);
    if (!createdCLass) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'নতুন মিটিং তৈরি ব্যর্থ হয়েছে');
    }
    return createdCLass;
});
const getAllMeetingFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const allExpense = yield meeting_model_1.MeetingModel.find({}).sort({ _id: -1 });
    if (!allExpense) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'মিটিং এর তালিকা খুঁজে পেতে ব্যর্থ হয়েছে');
    }
    return allExpense;
});
const getSingleMeetingFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meeting_model_1.MeetingModel.findOne({ _id: id });
    return result;
});
const updateMeetingFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meeting_model_1.MeetingModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'মিটিং এর তালিকা খুঁজে পেতে ব্যর্থ হয়েছে!');
    }
    return result;
});
const deleteMeetingFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield meeting_model_1.MeetingModel.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'মিটিং এর তালিকা খুঁজে পেতে ব্যর্থ হয়েছে!');
    }
    const books = yield meeting_model_1.MeetingModel.findOneAndDelete({ _id: id });
    if (!books) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'মিটিং এর তালিকা আপডেট করতে ব্যর্থ হয়েছে');
    }
    return books;
});
exports.MeetingService = {
    createMeetingFromDb,
    getAllMeetingFromDb,
    getSingleMeetingFromDb,
    updateMeetingFromDb,
    deleteMeetingFromDb,
};
