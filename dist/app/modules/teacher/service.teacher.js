"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const usersEnums_1 = require("../../../enums/usersEnums");
const paginationHelper_1 = require("../../../helper/paginationHelper");
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const user_service_1 = require("../users/user.service");
const constant_teacher_1 = require("./constant.teacher");
const model_teacher_1 = require("./model.teacher");
const getAllTeachersFromDb = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(paginationOptions);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: constant_teacher_1.teacherSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield model_teacher_1.Teacher.find(whereConditions)
        .populate("teacher_info.photo")
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield model_teacher_1.Teacher.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleTeacherFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_teacher_1.Teacher.findOne({ _id: id }).populate("teacher_info.photo");
    return result;
});
const createSingleTeacherFromDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_teacher_1.Teacher.create(data);
    let userResult = null;
    if (result._id) {
        const userdata = {
            userId: data.userId,
            password: data.password,
            name: {
                name_english: data.teacher_info.name_english,
                name_bangla: data.teacher_info.name_bangla,
            },
            // role: "super-admin",
            role: usersEnums_1.ENUM_USER_ROLE.TEACHER,
            // Teacher: String(result._id),
            teacher: result._id.toString(),
        };
        userResult = yield user_service_1.UserService.createUser(userdata);
        console.log(userResult);
    }
    if (!userResult) {
        yield model_teacher_1.Teacher.findByIdAndDelete({ _id: result._id });
    }
    return result;
});
// module 15 --> 14,15 video
const updateTeacherFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield model_teacher_1.Teacher.findOne({ id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Teacher not found !');
    }
    const { current_address, permanent_address, father_info, guardian_info, mother_info, teacher_info } = payload, TeacherData = __rest(payload, ["current_address", "permanent_address", "father_info", "guardian_info", "mother_info", "teacher_info"]);
    const updatedTeacherData = Object.assign({}, TeacherData);
    if (teacher_info && Object.keys(teacher_info).length > 0) {
        Object.keys(teacher_info).forEach(key => {
            const teacher_infoKey = `Teacher.${key}`; // `Teacher.fisrtTeachers`
            updatedTeacherData[teacher_infoKey] =
                teacher_info[key];
        });
    }
    if (current_address && Object.keys(current_address).length > 0) {
        Object.keys(current_address).forEach(key => {
            const current_addressKey = `current_address.${key}`; // `current_address.fisrtcurrent_address`
            updatedTeacherData[current_addressKey] =
                current_address[key];
        });
    }
    if (permanent_address && Object.keys(permanent_address).length > 0) {
        Object.keys(permanent_address).forEach(key => {
            const permanent_addressKey = `permanent_address.${key}`; // `permanent_address.fisrtpermanent_address`
            updatedTeacherData[permanent_addressKey] =
                permanent_address[key];
        });
    }
    if (mother_info && Object.keys(mother_info).length > 0) {
        Object.keys(mother_info).forEach(key => {
            const mother_infoKey = `mother_info.${key}`; // `mother_info.fisrtmother_info`
            updatedTeacherData[mother_infoKey] =
                mother_info[key];
        });
    }
    if (father_info && Object.keys(father_info).length > 0) {
        Object.keys(father_info).forEach(key => {
            const father_infoKey = `father_info.${key}`; // `father_info.fisrtfather_info`
            updatedTeacherData[father_infoKey] =
                father_info[key]; // updatedTeacherData['father_info.motherContactNo']=father_info[motherContactNo]
            // updatedTeacherData --> object create --> "father_info.motherContactNo": 0177
        });
    }
    if (guardian_info && Object.keys(guardian_info).length > 0) {
        Object.keys(guardian_info).forEach(key => {
            const localGuradianKey = `guardian_info.${key}`; // `guardian_info.fisrtName`
            updatedTeacherData[localGuradianKey] =
                guardian_info[key];
        });
    }
    const result = yield model_teacher_1.Teacher.findOneAndUpdate({ _id: id }, updatedTeacherData, {
        new: true,
    });
    return result;
});
const approvedTeacherAdminssionFromDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    let result = null;
    if ((data === null || data === void 0 ? void 0 : data.admission_approved) === usersEnums_1.ENUM_YN.NO) {
        result = yield model_teacher_1.Teacher.findByIdAndDelete(id);
        if (!result) {
            throw new ApiError_1.default(404, 'কোন কিছু ভুল হচ্ছে');
        }
    }
    else {
        result = yield model_teacher_1.Teacher.findOneAndUpdate({ _id: id }, data, {
            new: true,
        });
    }
    if (!result) {
        throw new ApiError_1.default(400, 'কোন কিছু ভুল হচ্ছে');
    }
    return result;
});
const deleteTeacherFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_teacher_1.Teacher.findByIdAndDelete(id);
    return result;
});
exports.TeacherService = {
    createSingleTeacherFromDb,
    getAllTeachersFromDb,
    getSingleTeacherFromDb,
    updateTeacherFromDb,
    deleteTeacherFromDb,
    approvedTeacherAdminssionFromDb,
};
