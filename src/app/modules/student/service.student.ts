/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import { ENUM_USER_ROLE, ENUM_YN } from '../../../enums/usersEnums';
import { paginationHelper } from '../../../helper/paginationHelper';
import ApiError from '../../errors/ApiError';
import { IGenericResponse } from '../../interface/common';
import { IPaginationOption } from '../../interface/pagination';
import { IUser } from '../users/user.interface';
import { UserService } from '../users/user.service';
import { studentSearchableFields } from './constant.student';
import { IStudent, IStudentFilters } from './interface.student';
import { Student } from './model.student';

const getAllStudentsFromDb = async (
  filters: IStudentFilters,
  paginationOptions: IPaginationOption
): Promise<IGenericResponse<IStudent[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: studentSearchableFields.map(field => ({
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

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Student.find(whereConditions)
   
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Student.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleStudentFromDb = async (id: string): Promise<IStudent | null> => {
  const result = await Student.findOne({ _id: id }).populate('student.photo').populate("student.books");
  return result;
};
const createSingleStudentFromDb = async (
  data: IStudent
): Promise<IStudent | null> => {
  const result = await Student.create(data);
  let userResult = null;
  if (result._id) {
    const userdata: IUser = {
      userId: data.userId,
      password: data.password,
      name: {
        name_english: data.student.name_english,
        name_bangla: data.student.name_bangla,
      },
      // role: "super-admin",
      role: ENUM_USER_ROLE.STUDENT,
      // student: String(result._id),
      student: result._id.toString(),
    };
    userResult = await UserService.createUser(userdata);
    console.log(userResult);
  }
  if (!userResult) {
    await Student.findByIdAndDelete({ _id: result._id });
  }
  return result;
};

// module 15 --> 14,15 video
const updateStudentFromDb = async (
  id: string,
  payload: Partial<IStudent>
): Promise<IStudent | null> => {
  const isExist = await Student.findOne({ _id:id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found !');
  }

  const {
    current_address,
    permanent_address,
    father_info,
    other_guardian_info,
    mother_info,
    student,
    ...studentData
  } = payload;

  const updatedStudentData: Partial<IStudent> = { ...studentData };

  if (student && Object.keys(student).length > 0) {
    Object.keys(student).forEach(key => {
      const studentKey = `student.${key}` as keyof Partial<IStudent>; // `student.fisrtstudents`
      (updatedStudentData as any)[studentKey] =
        student[key as keyof typeof student];
    });
  }
  if (current_address && Object.keys(current_address).length > 0) {
    Object.keys(current_address).forEach(key => {
      const current_addressKey =
        `current_address.${key}` as keyof Partial<IStudent>; // `current_address.fisrtcurrent_address`
      (updatedStudentData as any)[current_addressKey] =
        current_address[key as keyof typeof current_address];
    });
  }
  if (permanent_address && Object.keys(permanent_address).length > 0) {
    Object.keys(permanent_address).forEach(key => {
      const permanent_addressKey =
        `permanent_address.${key}` as keyof Partial<IStudent>; // `permanent_address.fisrtpermanent_address`
      (updatedStudentData as any)[permanent_addressKey] =
        permanent_address[key as keyof typeof permanent_address];
    });
  }
  if (mother_info && Object.keys(mother_info).length > 0) {
    Object.keys(mother_info).forEach(key => {
      const mother_infoKey = `mother_info.${key}` as keyof Partial<IStudent>; // `mother_info.fisrtmother_info`
      (updatedStudentData as any)[mother_infoKey] =
        mother_info[key as keyof typeof mother_info];
    });
  }

  if (father_info && Object.keys(father_info).length > 0) {
    Object.keys(father_info).forEach(key => {
      const father_infoKey = `father_info.${key}` as keyof Partial<IStudent>; // `father_info.fisrtfather_info`
      (updatedStudentData as any)[father_infoKey] =
        father_info[key as keyof typeof father_info]; // updatedStudentData['father_info.motherContactNo']=father_info[motherContactNo]
      // updatedStudentData --> object create --> "father_info.motherContactNo": 0177
    });
  }
  if (other_guardian_info && Object.keys(other_guardian_info).length > 0) {
    Object.keys(other_guardian_info).forEach(key => {
      const localGuradianKey =
        `other_guardian_info.${key}` as keyof Partial<IStudent>; // `other_guardian_info.fisrtName`
      (updatedStudentData as any)[localGuradianKey] =
        other_guardian_info[key as keyof typeof other_guardian_info];
    });
  }

  const result = await Student.findOneAndUpdate(
    { _id: id },
    updatedStudentData,
    {
      new: true,
    }
  );
  return result;
};

const approvedStudentAdminssionFromDb = async (
  id: string,
  data: Partial<IStudent>
): Promise<Partial<IStudent> | null> => {
  let result = null;
  if (data?.admission_approved === ENUM_YN.NO) {
    result = await Student.findByIdAndDelete(id);
    if (!result) {
      throw new ApiError(404, 'কোন কিছু ভুল হচ্ছে');
    }
  } else {
    result = await Student.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
  }
  if (!result) {
    throw new ApiError(400, 'কোন কিছু ভুল হচ্ছে');
  }
  return result;
};

const deleteStudentFromDb = async (id: string): Promise<IStudent | null> => {
  const result = await Student.findByIdAndDelete(id);
  return result;
};

export const StudentService = {
  createSingleStudentFromDb,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
  updateStudentFromDb,
  deleteStudentFromDb,
  approvedStudentAdminssionFromDb,
};
