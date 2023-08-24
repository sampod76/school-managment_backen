/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
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
  const result = await Student.findOne({ _id: id });
  return result;
};
const createSingleStudentFromDb = async (
  data: IStudent
): Promise<IStudent | null> => {
  const result = await Student.create(data);
  if (result._id) {
    const userdata: IUser = {
      userId: data.userId,
      password: data.password,
      name: {
        name_english: data.students.name_english,
        name_bangla: data.students.name_bangla,
      },
      role: "super-admin",
      // role: ENUM_USER_ROLE.STUDENT,
    };
    const userResult =await UserService.createUser(userdata);
    console.log(userResult)
  }
  return result;
};

// module 15 --> 14,15 vedio
const updateStudentFromDb = async (
  id: string,
  payload: Partial<IStudent>
): Promise<IStudent | null> => {
  const isExist = await Student.findOne({ id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found !');
  }

  const {
    address,
    father_info,
    guardianInfo,
    mother_info,
    students,
    ...studentData
  } = payload;

  const updatedStudentData: Partial<IStudent> = { ...studentData };

  if (students && Object.keys(students).length > 0) {
    Object.keys(students).forEach(key => {
      const studentsKey = `students.${key}` as keyof Partial<IStudent>; // `students.fisrtstudents`
      (updatedStudentData as any)[studentsKey] =
        students[key as keyof typeof students];
    });
  }
  if (address && Object.keys(address).length > 0) {
    Object.keys(address).forEach(key => {
      const addressKey = `address.${key}` as keyof Partial<IStudent>; // `address.fisrtaddress`
      (updatedStudentData as any)[addressKey] =
        address[key as keyof typeof address];
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
  if (guardianInfo && Object.keys(guardianInfo).length > 0) {
    Object.keys(guardianInfo).forEach(key => {
      const localGuradianKey = `guardianInfo.${key}` as keyof Partial<IStudent>; // `guardianInfo.fisrtName`
      (updatedStudentData as any)[localGuradianKey] =
        guardianInfo[key as keyof typeof guardianInfo];
    });
  }

  const result = await Student.findOneAndUpdate({ id }, updatedStudentData, {
    new: true,
  });
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
};
