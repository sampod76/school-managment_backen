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
      'failed to create Class Routine'
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
      'failed to get all Class Routine'
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
    throw new ApiError(httpStatus.NOT_FOUND, 'Class Routine not found!');
  }
  return result;
};

const deleteClassRoutineFromDb = async (
  id: string
): Promise<IClassRoutine | null> => {
  const isExist = await ClassRoutineModel.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class Routine not found!');
  }
  const classRoutine = await ClassRoutineModel.findOneAndDelete({ _id: id });
  if (!classRoutine) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete Class Routine!');
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
