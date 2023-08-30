import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

import { IWorkPlan } from './workPlan.interface';
import { WorkPlanModel } from './workPlan.model';

const createWorkPlan = (WorkPlanData: IWorkPlan): Promise<IWorkPlan | null> => {
  const createdWorkPlan = WorkPlanModel.create(WorkPlanData);

  if (!createdWorkPlan) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Work Plan first'
    );
  }

  return createdWorkPlan;
};
const getAllWorkPlan = async (): Promise<IWorkPlan[] | null> => {
  const allWorkPlanService = WorkPlanModel.find({});
  if (!allWorkPlanService) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get All Work Plan'
    );
  }
  return allWorkPlanService;
};
const getSingleWorkPlan = async (id: string): Promise<IWorkPlan | null> => {
  const result = await WorkPlanModel.findOne({ _id: id });

  return result;
};

const updateWorkPlanService = async (
  id: string,
  payload: Partial<IWorkPlan>
): Promise<IWorkPlan | null> => {
  const result = await WorkPlanModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work Plan not found!');
  }
  return result;
};

const deleteWorkPlanService = async (id: string): Promise<IWorkPlan | null> => {
  const isExist = await WorkPlanModel.findOne({ _id: id });
  console.log('after', isExist);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Work not found!');
  }

  const work = await WorkPlanModel.findOneAndDelete({ _id: id });

  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete WorkPlan');
  }

  return work;
};

const getTodaysWorkPlan = async (): Promise<IWorkPlan[] | null> => {
  const currentDate = new Date();

  const todaysWork = await WorkPlanModel.find({
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
      "Failed to get today's Work Plan"
    );
  }

  return todaysWork;
};

export const WorkPlanService = {
  createWorkPlan,
  getAllWorkPlan,
  getSingleWorkPlan,
  updateWorkPlanService,
  deleteWorkPlanService,
  getTodaysWorkPlan,
  //   getAllWorkSchedule,
  //   updateWorkScheduleService,
  //   deleteWorkScheduleService,
  //   getSingleWorkService,
  //   getTodaysWork,
};
