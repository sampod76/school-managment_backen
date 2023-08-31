

import { SortOrder } from 'mongoose';
import { paginationHelper } from '../../../helper/paginationHelper';
import { IGenericResponse } from '../../interface/common';
import { IPaginationOption } from '../../interface/pagination';

import { noticeSearchableFields } from './constant.notices';
import { INotice, INoticeFilters } from './interface.notices';
import { Notice } from './model.notices';

const getAllNoticesFromDb = async (
  filters: INoticeFilters,
  paginationOptions: IPaginationOption
): Promise<IGenericResponse<INotice[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: noticeSearchableFields.map(field => ({
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

  const result = await Notice.find(whereConditions)
    .populate('document')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Notice.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleNoticeFromDb = async (id: string): Promise<INotice | null> => {
  const result = await Notice.findOne({ _id: id }).populate('document');
  return result;
};
const createSingleNoticeFromDb = async (
  data: INotice
): Promise<INotice | null> => {
  const result = await Notice.create(data);

  return result;
};

// module 15 --> 14,15 video
const updateNoticeFromDb = async (
  id: string,
  payload: Partial<INotice>
): Promise<INotice | null> => {
  const result = await Notice.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteNoticeFromDb = async (id: string): Promise<INotice | null> => {
  const result = await Notice.findByIdAndDelete(id);
  return result;
};

export const NoticeService = {
  createSingleNoticeFromDb,
  getAllNoticesFromDb,
  getSingleNoticeFromDb,
  updateNoticeFromDb,
  deleteNoticeFromDb,
};
