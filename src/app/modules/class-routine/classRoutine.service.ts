import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

import { IClassRoutine } from './classRoutine.Interface';
import { ClassRoutineModel } from './classRoutine.model';

const createClassRoutineToDb = async (
  classRoutineData: IClassRoutine
): Promise<IClassRoutine | null> => {
  const createdClassRoutine = ClassRoutineModel.create(classRoutineData);
  if (!createdClassRoutine) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'শ্রেণীর রুটিন তৈরি করতে ব্যর্থ হয়েছে'
    );
  }
  return createdClassRoutine;
};

const getAllClassRoutineFromDb = async (): Promise<IClassRoutine[] | null> => {
  const allClassRoutine = ClassRoutineModel.find({})
    .populate({
      path: 'subject',
      select: 'bookName',
    })
    .populate({
      path: 'class',
      select: 'className',
    })
    .populate({
      path: 'teacher',
      select: 'teacher_info.name_bangla',
    });
  if (!allClassRoutine) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'শ্রেণীর রুটিন খুঁজে পেতে ব্যর্থ হয়েছে'
    );
  }
  return allClassRoutine;
};

const getSingleClassRoutineFromDb = async (
  id: string
): Promise<IClassRoutine | null> => {
  const result = await ClassRoutineModel.findOne({ _id: id })
    .populate({
      path: 'subject',
      select: 'bookName',
    })
    .populate({
      path: 'class',
      select: 'className',
    })
    .populate({
      path: 'teacher',
      select: 'teacher_info.name_bangla',
    });
  return result;
};

const updateClassRoutineFromDb = async (
  id: string,
  payload: Partial<IClassRoutine>
): Promise<IClassRoutine | null> => {
  const result = await ClassRoutineModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'শ্রেণীর রুটিন খুঁজে পেতে ব্যর্থ হয়েছে।');
  }
  return result;
};

const deleteClassRoutineFromDb = async (
  id: string
): Promise<IClassRoutine | null> => {
  const isExist = await ClassRoutineModel.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'শ্রেণীর রুটিন খুঁজে পেতে ব্যর্থ হয়েছে।');
  }
  const classRoutine = await ClassRoutineModel.findOneAndDelete({ _id: id });
  if (!classRoutine) {
    throw new ApiError(httpStatus.NOT_FOUND, 'শ্রেণীর রুটিন আপডেট করতে ব্যর্থ হয়েছে!');
  }
  return classRoutine;
};

export const ClassRoutineService = {
  createClassRoutineToDb,
  getAllClassRoutineFromDb,
  getSingleClassRoutineFromDb,
  updateClassRoutineFromDb,
  deleteClassRoutineFromDb,
};
