import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IWorkSchedule } from './workSchedule.interface';
import { WorkScheduleModel } from './workSchedule.model';

const createWorkSchedule = (
  WorkScheduleData: IWorkSchedule
): Promise<IWorkSchedule | null> => {
  const createdWorkSchedule = WorkScheduleModel.create(WorkScheduleData);

  if (!createdWorkSchedule) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Work Schedule first'
    );
  }

  return createdWorkSchedule;
};
const getAllWorkSchedule = async (): Promise<IWorkSchedule[] | null> => {
  const allWorkScheduleService = WorkScheduleModel.find({});
  if (!allWorkScheduleService) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get All Work Schedule'
    );
  }
  return allWorkScheduleService;
};
const getSingleWorkService = async (
  id: string
): Promise<IWorkSchedule | null> => {
  const result = await WorkScheduleModel.findOne({ _id: id });

  return result;
};

const updateWorkScheduleService = async (
  id: string,
  payload: Partial<IWorkSchedule>
): Promise<IWorkSchedule | null> => {
  const result = await WorkScheduleModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work Schedule not found!');
  }
  return result;
};

const deleteWorkScheduleService = async (
  id: string
): Promise<IWorkSchedule | null> => {
  const isExist = await WorkScheduleModel.findOne({ _id: id });
  console.log('after', isExist);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work not found!');
  }

  const work = await WorkScheduleModel.findOneAndDelete({ _id: id });

  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete WorkSchedule');
  }

  return work;
};

const getTodaysWork = async (): Promise<IWorkSchedule[] | null> => {
  const currentDate = new Date();

  const todaysWork = await WorkScheduleModel.find({
    createdAt: {
      $gte: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ),
      $lt: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1
      ),
    },
  });

  if (!todaysWork) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      "Failed to get today's Work"
    );
  }

  return todaysWork;
};

export const WorkScheduleService = {
  createWorkSchedule,
  getAllWorkSchedule,
  updateWorkScheduleService,
  deleteWorkScheduleService,
  getSingleWorkService,
  getTodaysWork,
};
