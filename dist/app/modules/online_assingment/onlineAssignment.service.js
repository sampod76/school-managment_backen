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
exports.OnlineAssignmentService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const onlineAssignment_model_1 = require("./onlineAssignment.model");
const createOnlineAssignmentToDB = (OnlineAssignmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const createdOnlineAssignment = onlineAssignment_model_1.OnlineAssignmentModel.create(OnlineAssignmentData);
    if (!createdOnlineAssignment) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'নতুন অনলাইন এসাইনমেন্ট তৈরি ব্যর্থ হয়েছে ');
    }
    return createdOnlineAssignment;
});
const getOnlineAssignmentToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBooks = onlineAssignment_model_1.OnlineAssignmentModel.find({}).populate('subject');
    if (!allBooks) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'অনলাইন এসাইনমেন্ট এর তালিকা পেতে ব্যর্থ হয়েছে');
    }
    return allBooks;
});
const getSingleOnlineAssignmentFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield onlineAssignment_model_1.OnlineAssignmentModel.findOne({ _id: id });
    return result;
});
const updateOnlineAssignmentFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield onlineAssignment_model_1.OnlineAssignmentModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'অনলাইন এসাইনমেন্ট এর তালিকা আপডেট করতে ব্যর্থ হয়েছে!');
    }
    return result;
});
const deleteOnlineAssignmentFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield onlineAssignment_model_1.OnlineAssignmentModel.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'অনলাইন এসাইনমেন্ট এর তালিকা পেতে ব্যর্থ হয়েছে!');
    }
    const onlineAssignment = yield onlineAssignment_model_1.OnlineAssignmentModel.findOneAndDelete({
        _id: id,
    });
    if (!onlineAssignment) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'অনলাইন এসাইনমেন্ট মুছে ফেলা ব্যর্থ হয়েছে ');
    }
    return onlineAssignment;
});
exports.OnlineAssignmentService = {
    createOnlineAssignmentToDB,
    getOnlineAssignmentToDB,
    getSingleOnlineAssignmentFromDb,
    updateOnlineAssignmentFromDb,
    deleteOnlineAssignmentFromDb,
};
