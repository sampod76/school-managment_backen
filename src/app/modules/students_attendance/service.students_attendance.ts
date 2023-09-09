

import { SortOrder } from 'mongoose';
import { paginationHelper } from '../../../helper/paginationHelper';
import { IGenericResponse } from '../../interface/common';
import { IPaginationOption } from '../../interface/pagination';

import { studentAttendanceSearchableFields } from './constant.students_attendance';
import { IStudentAttendance, IStudentAttendanceFilters } from './interface.students_attendance';
import { StudentAttendance } from './model.students_attendance';

const getAllStudentsAttendancesFromDb = async (
  filters: IStudentAttendanceFilters,
  paginationOptions: IPaginationOption
): Promise<IGenericResponse<IStudentAttendance[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: studentAttendanceSearchableFields.map(field => ({
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

  const result = await StudentAttendance.find(whereConditions)
    .populate('document')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await StudentAttendance.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleStudentsAttendanceFromDb = async (id: string): Promise<IStudentAttendance | null> => {
  const result = await StudentAttendance.findOne({ _id: id }).populate('document');
  return result;
};
const createSingleStudentsAttendanceFromDb = async (
  data: IStudentAttendance
): Promise<IStudentAttendance | null> => {
  const result = await StudentAttendance.create(data);

  return result;
};

// module 15 --> 14,15 video
const updateStudentsAttendanceFromDb = async (
  id: string,
  payload: Partial<IStudentAttendance>
): Promise<IStudentAttendance | null> => {
  const result = await StudentAttendance.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteStudentsAttendanceFromDb = async (id: string): Promise<IStudentAttendance | null> => {
  const result = await StudentAttendance.findByIdAndDelete(id);
  return result;
};

export const StudentsAttendanceService = {
  createSingleStudentsAttendanceFromDb,
  getAllStudentsAttendancesFromDb,
  getSingleStudentsAttendanceFromDb,
  updateStudentsAttendanceFromDb,
  deleteStudentsAttendanceFromDb,
};
