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
exports.ClassRoutineService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const classRoutine_model_1 = require("./classRoutine.model");
const createClassRoutineToDb = (classRoutineData) => __awaiter(void 0, void 0, void 0, function* () {
    const createdClassRoutine = classRoutine_model_1.ClassRoutineModel.create(classRoutineData);
    if (!createdClassRoutine) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'শ্রেণীর রুটিন তৈরি করতে ব্যর্থ হয়েছে');
    }
    return createdClassRoutine;
});
const getAllClassRoutineFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const allClassRoutine = classRoutine_model_1.ClassRoutineModel.find({})
        .populate({
        path: 'subject',
        select: 'bookName',
    })
        .populate({
        path: 'class',
        select: 'className',
    })
        .populate({
        path: 'teacher',
        select: 'teacher_info.name_bangla',
    });
    if (!allClassRoutine) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'শ্রেণীর রুটিন খুঁজে পেতে ব্যর্থ হয়েছে');
    }
    return allClassRoutine;
});
const getSingleClassRoutineFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield classRoutine_model_1.ClassRoutineModel.findOne({ _id: id })
        .populate({
        path: 'subject',
        select: 'bookName',
    })
        .populate({
        path: 'class',
        select: 'className',
    })
        .populate({
        path: 'teacher',
        select: 'teacher_info.name_bangla',
    });
    return result;
});
const updateClassRoutineFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield classRoutine_model_1.ClassRoutineModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'শ্রেণীর রুটিন খুঁজে পেতে ব্যর্থ হয়েছে।');
    }
    return result;
});
const deleteClassRoutineFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield classRoutine_model_1.ClassRoutineModel.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'শ্রেণীর রুটিন খুঁজে পেতে ব্যর্থ হয়েছে।');
    }
    const classRoutine = yield classRoutine_model_1.ClassRoutineModel.findOneAndDelete({ _id: id });
    if (!classRoutine) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'শ্রেণীর রুটিন আপডেট করতে ব্যর্থ হয়েছে!');
    }
    return classRoutine;
});
exports.ClassRoutineService = {
    createClassRoutineToDb,
    getAllClassRoutineFromDb,
    getSingleClassRoutineFromDb,
    updateClassRoutineFromDb,
    deleteClassRoutineFromDb,
};
