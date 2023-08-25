import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IClass } from './class.interface';
import { ClassModel } from './class.model';

const createClass = (ClassData: IClass): Promise<IClass | null> => {
  const createdCLass = ClassModel.create(ClassData);

  if (!createdCLass) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Class first'
    );
  }

  return createdCLass;
};

const getAllClasses = async (): Promise<IClass[] | null> => {
  const allUsers = ClassModel.find();

  if (!allUsers) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Classes'
    );
  }

  return allUsers;
};

const getSingleClass = async (id: string): Promise<IClass | null> => {
  const result = await ClassModel.findOne({ _id: id });

  return result;
};

const updateClass = async (
  id: string,
  payload: Partial<IClass>
): Promise<IClass | null> => {
  const result = await ClassModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found!');
  }
  return result;
};

const deleteClass = async (id: string): Promise<IClass | null> => {
  console.log('before', id);

  const isExist = await ClassModel.findOne({ _id: id });
  console.log('after', isExist);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Class not found!');
  }

  const user = await ClassModel.findOneAndDelete({ _id: id });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete Class');
  }

  return user;
};

export const ClassService = {
  createClass,
  getAllClasses,
  getSingleClass,
  updateClass,
  deleteClass,
};
