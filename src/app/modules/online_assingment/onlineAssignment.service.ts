import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IOnlineAssignment } from './onlineAssignment.interface';
import { OnlineAssignmentModel } from './onlineAssignment.model';

const createOnlineAssignmentToDB = async (
  OnlineAssignmentData: IOnlineAssignment
): Promise<IOnlineAssignment | null> => {
  const createdOnlineAssignment =
    OnlineAssignmentModel.create(OnlineAssignmentData);
  if (!createdOnlineAssignment) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Online Assignment'
    );
  }
  return createdOnlineAssignment;
};

const getOnlineAssignmentToDB = async (): Promise<
  IOnlineAssignment[] | null
> => {
  const allBooks = OnlineAssignmentModel.find({}).populate('subject');
  if (!allBooks) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Online Assignment'
    );
  }
  return allBooks;
};

const getSingleOnlineAssignmentFromDb = async (
  id: string
): Promise<IOnlineAssignment | null> => {
  const result = await OnlineAssignmentModel.findOne({ _id: id });
  return result;
};

const updateOnlineAssignmentFromDb = async (
  id: string,
  payload: Partial<IOnlineAssignment>
): Promise<IOnlineAssignment | null> => {
  const result = await OnlineAssignmentModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Online Assignment not found!');
  }
  return result;
};

const deleteOnlineAssignmentFromDb = async (
  id: string
): Promise<IOnlineAssignment | null> => {
  const isExist = await OnlineAssignmentModel.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Online Assignment not found!');
  }
  const onlineAssignment = await OnlineAssignmentModel.findOneAndDelete({
    _id: id,
  });
  if (!onlineAssignment) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'Failed to delete OnlineAssignment'
    );
  }
  return onlineAssignment;
};

export const OnlineAssignmentService = {
  createOnlineAssignmentToDB,
  getOnlineAssignmentToDB,
  getSingleOnlineAssignmentFromDb,
  updateOnlineAssignmentFromDb,
  deleteOnlineAssignmentFromDb,
};
