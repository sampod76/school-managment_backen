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
exports.ExamService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const exam_model_1 = require("./exam.model");
const createExamToDb = (ExamData) => __awaiter(void 0, void 0, void 0, function* () {
    const createdExam = exam_model_1.ExamModel.create(ExamData);
    if (!createdExam) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to create Exam');
    }
    return createdExam;
});
const getAllExamFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const allExams = exam_model_1.ExamModel.find({})
        .populate({
        path: 'subject',
        select: 'bookName',
    })
        .populate({
        path: 'className',
        select: 'className',
    })
        .populate({
        path: 'teacher',
        select: 'teacher_info.name_bangla',
    });
    if (!allExams) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to get all Exam');
    }
    return allExams;
});
const getSingleExamFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exam_model_1.ExamModel.findOne({ _id: id })
        .populate({
        path: 'subject',
        select: 'bookName',
    })
        .populate({
        path: 'className',
        select: 'className',
    })
        .populate({
        path: 'teacher',
        select: 'teacher_info.name_bangla',
    });
    return result;
});
const updateExamFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exam_model_1.ExamModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Exam not found!');
    }
    return result;
});
const deleteExamFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield exam_model_1.ExamModel.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Exam not found!');
    }
    const exam = yield exam_model_1.ExamModel.findOneAndDelete({ _id: id });
    if (!exam) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Failed to delete Exam');
    }
    return exam;
});
exports.ExamService = {
    createExamToDb,
    getAllExamFromDb,
    getSingleExamFromDb,
    updateExamFromDb,
    deleteExamFromDb,
};
