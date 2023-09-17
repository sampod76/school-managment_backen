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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachersAttendanceService = void 0;
const paginationHelper_1 = require("../../../helper/paginationHelper");
const constant_teachers_attendance_1 = require("./constant.teachers_attendance");
const model_teachers_attendance_1 = require("./model.teachers_attendance");
const getAllTeachersAttendancesFromDb = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(paginationOptions);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: constant_teachers_attendance_1.teacherAttendanceSearchableFields.map(field => ({
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
    const result = yield model_teachers_attendance_1.TeacherAttendance.find(whereConditions)
        .populate('teachers.teacher')
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield model_teachers_attendance_1.TeacherAttendance.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleTeachersAttendanceFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_teachers_attendance_1.TeacherAttendance.findOne({ _id: id });
    return result;
});
const createSingleTeachersAttendanceFromDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_teachers_attendance_1.TeacherAttendance.create(data);
    return result;
});
// module 15 --> 14,15 video
const updateTeachersAttendanceFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_teachers_attendance_1.TeacherAttendance.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteTeachersAttendanceFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_teachers_attendance_1.TeacherAttendance.findByIdAndDelete(id);
    return result;
});
exports.TeachersAttendanceService = {
    createSingleTeachersAttendanceFromDb,
    getAllTeachersAttendancesFromDb,
    getSingleTeachersAttendanceFromDb,
    updateTeachersAttendanceFromDb,
    deleteTeachersAttendanceFromDb,
};
