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
exports.PendingStudentService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const usersEnums_1 = require("../../../../enums/usersEnums");
const paginationHelper_1 = require("../../../../helper/paginationHelper");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const user_service_1 = require("../../users/user.service");
const constant_student_1 = require("../constant.student");
const model_student_1 = require("../model.student");
const getAllPendingStudentsFromDb = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelper.calculatePagination(paginationOptions);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: constant_student_1.studentSearchableFields.map(field => ({
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
    const result = yield model_student_1.Pending_student.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield model_student_1.Pending_student.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSinglePendingStudentFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_student_1.Pending_student.findOne({ _id: id })
        .populate('student.photo')
        .populate('student.books');
    return result;
});
const createSinglePendingStudentFromDb = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_student_1.Pending_student.create(data);
    let userResult = null;
    if (result._id) {
        const userdata = {
            userId: data.userId,
            password: data.password,
            name: {
                name_english: data.student.name_english,
                name_bangla: data.student.name_bangla,
            },
            // role: "super-admin",
            role: usersEnums_1.ENUM_USER_ROLE.STUDENT,
            // student: String(result._id),
            student: result._id.toString(),
        };
        userResult = yield user_service_1.UserService.createUser(userdata);
        console.log(userResult);
    }
    if (!userResult) {
        yield model_student_1.Pending_student.findByIdAndDelete({ _id: result._id });
    }
    return result;
});
// module 15 --> 14,15 video
const updatePendingStudentFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield model_student_1.Pending_student.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Student not found !');
    }
    const { current_address, permanent_address, father_info, other_guardian_info, mother_info, student } = payload, studentData = __rest(payload, ["current_address", "permanent_address", "father_info", "other_guardian_info", "mother_info", "student"]);
    const updatedStudentData = Object.assign({}, studentData);
    if (student && Object.keys(student).length > 0) {
        Object.keys(student).forEach(key => {
            const studentKey = `student.${key}`; // `student.fisrtstudents`
            updatedStudentData[studentKey] =
                student[key];
        });
    }
    if (current_address && Object.keys(current_address).length > 0) {
        Object.keys(current_address).forEach(key => {
            const current_addressKey = `current_address.${key}`; // `current_address.fisrtcurrent_address`
            updatedStudentData[current_addressKey] =
                current_address[key];
        });
    }
    if (permanent_address && Object.keys(permanent_address).length > 0) {
        Object.keys(permanent_address).forEach(key => {
            const permanent_addressKey = `permanent_address.${key}`; // `permanent_address.fisrtpermanent_address`
            updatedStudentData[permanent_addressKey] =
                permanent_address[key];
        });
    }
    if (mother_info && Object.keys(mother_info).length > 0) {
        Object.keys(mother_info).forEach(key => {
            const mother_infoKey = `mother_info.${key}`; // `mother_info.fisrtmother_info`
            updatedStudentData[mother_infoKey] =
                mother_info[key];
        });
    }
    if (father_info && Object.keys(father_info).length > 0) {
        Object.keys(father_info).forEach(key => {
            const father_infoKey = `father_info.${key}`; // `father_info.fisrtfather_info`
            updatedStudentData[father_infoKey] =
                father_info[key]; // updatedStudentData['father_info.motherContactNo']=father_info[motherContactNo]
            // updatedStudentData --> object create --> "father_info.motherContactNo": 0177
        });
    }
    if (other_guardian_info && Object.keys(other_guardian_info).length > 0) {
        Object.keys(other_guardian_info).forEach(key => {
            const localGuradianKey = `other_guardian_info.${key}`; // `other_guardian_info.fisrtName`
            updatedStudentData[localGuradianKey] =
                other_guardian_info[key];
        });
    }
    const result = yield model_student_1.Pending_student.findOneAndUpdate({ _id: id }, updatedStudentData, {
        new: true,
    });
    return result;
});
// ! ************************* admintion appropriate ***************************
// const moveDataFromPendingToStudent = async (
//   pendingStudentId: string,
//   session: ClientSession
// ) => {
//   try {
//     // Retrieve the specific data entry from the Pending_student collection within the transaction
//     const pendingStudent = await Pending_student.findById(pendingStudentId)
//       .session(session)
//       .exec();
//     console.log(pendingStudent, '235');
//     if (!pendingStudent) {
//       throw new Error('Pending student not found');
//     }
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     // const { _id, ...other } = pendingStudent;
//     // Create a corresponding Student document and save it within the transaction
//     const student = new Student({
//       // Map fields from Pending_student to Student collection here
//       ...pendingStudent,
//       admission_approved: ENUM_YN.YES,
//       // Other fields...
//     });
//     await student.save({ session });
//     // Optionally, delete the data from the Pending_student collection within the transaction
//     await Pending_student.findByIdAndDelete(pendingStudentId).session(session);
//     console.log('Data moved successfully within the transaction.');
//   } catch (error: any) {
//     console.error('Error moving data within the transaction:', error);
//     throw new ApiError(
//       400,
//       error?.message || 'Error moving data within the transaction'
//     );
//   }
// };
//approve student login
const approvedPendingStudentAdminssionFromDb = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    let result = null;
    // if (data?.admission_approved === ENUM_YN.NO) {
    //   result = await Pending_student.findByIdAndDelete(id);
    //   if (!result) {
    //     throw new ApiError(404, 'কোন কিছু ভুল হচ্ছে-233');
    //   }
    // } else {
    const findStudent = yield model_student_1.Student.findOne({ userId: data === null || data === void 0 ? void 0 : data.userId });
    if (findStudent) {
        throw new ApiError_1.default(400, 'একই ইউজার আইডি ব্যবহার করে পূর্বে রেজিস্ট্রেশন হয়েছে');
    }
    const findPendingStudent = yield model_student_1.Pending_student.findById(id);
    if (!(findPendingStudent === null || findPendingStudent === void 0 ? void 0 : findPendingStudent._id)) {
        throw new ApiError_1.default(400, 'শিক্ষার্থী খুঁজে পাওয়া যায়নি');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _a = findPendingStudent.toObject(), { _id } = _a, Otherdata = __rest(_a, ["_id"]);
    const createStudent = yield model_student_1.Student.create(Otherdata);
    if (!(createStudent === null || createStudent === void 0 ? void 0 : createStudent._id)) {
        throw new ApiError_1.default(400, 'শিক্ষার্থীর রেজিস্ট্রেশন সম্পন্ন হয়নি');
    }
    result = createStudent;
    yield model_student_1.Pending_student.findByIdAndDelete(id);
    // }
    if (!result) {
        throw new ApiError_1.default(400, 'কোন কিছু ভুল হচ্ছে');
    }
    return result;
});
//! ****************************** end ********************************
const deletePendingStudentFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield model_student_1.Pending_student.findByIdAndDelete(id);
    return result;
});
exports.PendingStudentService = {
    createSinglePendingStudentFromDb,
    getAllPendingStudentsFromDb,
    getSinglePendingStudentFromDb,
    updatePendingStudentFromDb,
    deletePendingStudentFromDb,
    approvedPendingStudentAdminssionFromDb,
};
// const session = await mongoose.startSession();
//     session.startTransaction();
//     try {
//       //******************************** */
//       // Retrieve the specific data entry from the Pending_student collection within the transaction
//       const pendingStudent = await Pending_student.findById(id)
//         .session(session)
//         .exec();
//       console.log(pendingStudent, '235');
//       if (!pendingStudent) {
//         throw new ApiError(500, 'Pending student not found');
//       }
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const { _id, ...other } = pendingStudent;
//       console.log(other);
//       await Student.create([{ ...other }], { session });
//       // Optionally, delete the data from the Pending_student collection within the transaction
//       const deleteResult = await Pending_student.findOneAndDelete({
//         _id: id,
//       }).session(session);
//       if (!deleteResult) {
//         throw new ApiError(500, 'Pending student not transferred failed 270');
//       }
//       ///********************************* */
//       // Commit the transaction
//       await session.commitTransaction();
//       console.log('Transaction committed successfully.');
//     } catch (error) {
//       console.error('Error in transaction:', error);
//       // Rollback the transaction if an error occurs
//       await session.abortTransaction();
//       throw error
//     } finally {
//       // End the session
//       session.endSession();
//     }
