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
exports.TeacherSalaryService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const teacherSalary_model_1 = require("./teacherSalary.model");
const CreateTeacherSalary = (TeacherSalaryData) => {
    const createdTeacherSalary = teacherSalary_model_1.TeacherSalaryModel.create(TeacherSalaryData);
    if (!createdTeacherSalary) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to create Teachers Salary first');
    }
    return createdTeacherSalary;
};
const getAllTeacherSalary = () => __awaiter(void 0, void 0, void 0, function* () {
    const allTeacherSalary = teacherSalary_model_1.TeacherSalaryModel.find({});
    if (!allTeacherSalary) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to get Teachers Salary');
    }
    return allTeacherSalary;
});
const singleTeacherService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield teacherSalary_model_1.TeacherSalaryModel.findOne({ _id: id });
    return result;
});
const updateTeacherSalary = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield teacherSalary_model_1.TeacherSalaryModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Teacher Salary not found!');
    }
    return result;
});
const deleteTeacherService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield teacherSalary_model_1.TeacherSalaryModel.findOne({ _id: id });
    console.log('after', isExist);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Teacher not found!');
    }
    const teacherSalary = yield teacherSalary_model_1.TeacherSalaryModel.findOneAndDelete({ _id: id });
    if (!teacherSalary) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Failed to delete Teacher salary');
    }
    return teacherSalary;
});
exports.TeacherSalaryService = {
    CreateTeacherSalary,
    getAllTeacherSalary,
    deleteTeacherService,
    updateTeacherSalary,
    singleTeacherService,
};
