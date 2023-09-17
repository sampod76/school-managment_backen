

import { SortOrder } from 'mongoose';
import { paginationHelper } from '../../../helper/paginationHelper';
import { IGenericResponse } from '../../interface/common';
import { IPaginationOption } from '../../interface/pagination';

import { teacherAttendanceSearchableFields } from './constant.teachers_attendance';
import { ITeacherAttendance, ITeacherAttendanceFilters } from './interface.teachers_attendance';
import { TeacherAttendance } from './model.teachers_attendance';

const getAllTeachersAttendancesFromDb = async (
  filters: ITeacherAttendanceFilters,
  paginationOptions: IPaginationOption
): Promise<IGenericResponse<ITeacherAttendance[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: teacherAttendanceSearchableFields.map(field => ({
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

  const result = await TeacherAttendance.find(whereConditions)
    .populate('teachers.teacher')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await TeacherAttendance.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleTeachersAttendanceFromDb = async (id: string): Promise<ITeacherAttendance | null> => {
  const result = await TeacherAttendance.findOne({ _id: id })
  return result;
};
const createSingleTeachersAttendanceFromDb = async (
  data: ITeacherAttendance
): Promise<ITeacherAttendance | null> => {
  const result = await TeacherAttendance.create(data);

  return result;
};

// module 15 --> 14,15 video
const updateTeachersAttendanceFromDb = async (
  id: string,
  payload: Partial<ITeacherAttendance>
): Promise<ITeacherAttendance | null> => {
  const result = await TeacherAttendance.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteTeachersAttendanceFromDb = async (id: string): Promise<ITeacherAttendance | null> => {
  const result = await TeacherAttendance.findByIdAndDelete(id);
  return result;
};

export const TeachersAttendanceService = {
  createSingleTeachersAttendanceFromDb,
  getAllTeachersAttendancesFromDb,
  getSingleTeachersAttendanceFromDb,
  updateTeachersAttendanceFromDb,
  deleteTeachersAttendanceFromDb,
};
