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
import { teacherSearchableFields } from './constant.teacher';
import { ITeacher, ITeacherFilters } from './interface.teacher';
import { Teacher } from './model.teacher';

const getAllTeachersFromDb = async (
  filters: ITeacherFilters,
  paginationOptions: IPaginationOption
): Promise<IGenericResponse<ITeacher[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: teacherSearchableFields.map(field => ({
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

  const result = await Teacher.find(whereConditions)

    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Teacher.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleTeacherFromDb = async (id: string): Promise<ITeacher | null> => {
  const result = await Teacher.findOne({ _id: id }).populate('Teacher.photo');
  return result;
};
const createSingleTeacherFromDb = async (
  data: ITeacher
): Promise<ITeacher | null> => {
  const result = await Teacher.create(data);
  let userResult = null;
  if (result._id) {
    const userdata: IUser = {
      userId: data.userId,
      password: data.password,
      name: {
        name_english: data.teacher_info.name_english,
        name_bangla: data.teacher_info.name_bangla,
      },
      // role: "super-admin",
      role: ENUM_USER_ROLE.TEACHER,
      // Teacher: String(result._id),
      teacher: result._id.toString(),
    };
    userResult = await UserService.createUser(userdata);
    console.log(userResult);
  }
  if (!userResult) {
    await Teacher.findByIdAndDelete({ _id: result._id });
  }
  return result;
};

// module 15 --> 14,15 vedio
const updateTeacherFromDb = async (
  id: string,
  payload: Partial<ITeacher>
): Promise<ITeacher | null> => {
  const isExist = await Teacher.findOne({ id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Teacher not found !');
  }

  const {
    current_address,
    permanent_address,
    father_info,
    guardian_info,
    mother_info,
    teacher_info,
    ...TeacherData
  } = payload;

  const updatedTeacherData: Partial<ITeacher> = { ...TeacherData };

  if (teacher_info && Object.keys(teacher_info).length > 0) {
    Object.keys(teacher_info).forEach(key => {
      const teacher_infoKey = `Teacher.${key}` as keyof Partial<ITeacher>; // `Teacher.fisrtTeachers`
      (updatedTeacherData as any)[teacher_infoKey] =
        teacher_info[key as keyof typeof teacher_info];
    });
  }
  if (current_address && Object.keys(current_address).length > 0) {
    Object.keys(current_address).forEach(key => {
      const current_addressKey =
        `current_address.${key}` as keyof Partial<ITeacher>; // `current_address.fisrtcurrent_address`
      (updatedTeacherData as any)[current_addressKey] =
        current_address[key as keyof typeof current_address];
    });
  }
  if (permanent_address && Object.keys(permanent_address).length > 0) {
    Object.keys(permanent_address).forEach(key => {
      const permanent_addressKey =
        `permanent_address.${key}` as keyof Partial<ITeacher>; // `permanent_address.fisrtpermanent_address`
      (updatedTeacherData as any)[permanent_addressKey] =
        permanent_address[key as keyof typeof permanent_address];
    });
  }
  if (mother_info && Object.keys(mother_info).length > 0) {
    Object.keys(mother_info).forEach(key => {
      const mother_infoKey = `mother_info.${key}` as keyof Partial<ITeacher>; // `mother_info.fisrtmother_info`
      (updatedTeacherData as any)[mother_infoKey] =
        mother_info[key as keyof typeof mother_info];
    });
  }

  if (father_info && Object.keys(father_info).length > 0) {
    Object.keys(father_info).forEach(key => {
      const father_infoKey = `father_info.${key}` as keyof Partial<ITeacher>; // `father_info.fisrtfather_info`
      (updatedTeacherData as any)[father_infoKey] =
        father_info[key as keyof typeof father_info]; // updatedTeacherData['father_info.motherContactNo']=father_info[motherContactNo]
      // updatedTeacherData --> object create --> "father_info.motherContactNo": 0177
    });
  }
  if (guardian_info && Object.keys(guardian_info).length > 0) {
    Object.keys(guardian_info).forEach(key => {
      const localGuradianKey =
        `guardian_info.${key}` as keyof Partial<ITeacher>; // `guardian_info.fisrtName`
      (updatedTeacherData as any)[localGuradianKey] =
        guardian_info[key as keyof typeof guardian_info];
    });
  }

  const result = await Teacher.findOneAndUpdate(
    { _id: id },
    updatedTeacherData,
    {
      new: true,
    }
  );
  return result;
};

const approvedTeacherAdminssionFromDb = async (
  id: string,
  data: Partial<ITeacher>
): Promise<Partial<ITeacher> | null> => {
  let result = null;
  if (data?.admission_approved === ENUM_YN.NO) {
    result = await Teacher.findByIdAndDelete(id);
    if (!result) {
      throw new ApiError(404, 'কোন কিছু ভুল হচ্ছে');
    }
  } else {
    result = await Teacher.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
  }
  if (!result) {
    throw new ApiError(400, 'কোন কিছু ভুল হচ্ছে');
  }
  return result;
};

const deleteTeacherFromDb = async (id: string): Promise<ITeacher | null> => {
  const result = await Teacher.findByIdAndDelete(id);
  return result;
};

export const TeacherService = {
  createSingleTeacherFromDb,
  getAllTeachersFromDb,
  getSingleTeacherFromDb,
  updateTeacherFromDb,
  deleteTeacherFromDb,
  approvedTeacherAdminssionFromDb,
};
