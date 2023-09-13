import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

import { IWorkPlan } from './workPlan.interface';
import { WorkPlanModel } from './workPlan.model';

const createWorkPlan = (WorkPlanData: IWorkPlan): Promise<IWorkPlan | null> => {
  const createdWorkPlan = WorkPlanModel.create(WorkPlanData);

  if (!createdWorkPlan) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'নতুন কর্মপরিকল্পনা তৈরি ব্যর্থ হয়েছে '
    );
  }

  return createdWorkPlan;
};
const getAllWorkPlan = async (): Promise<IWorkPlan[] | null> => {
  const allWorkPlanService = WorkPlanModel.find({});
  if (!allWorkPlanService) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'সফল কর্ম পরিকল্পনা খুঁজে পেতে ব্যর্থ হয়েছে'
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
    throw new ApiError(httpStatus.NOT_FOUND, 'কর্মপরিকল্পনা আপডেট করতে ব্যর্থ হয়েছে!');
  }
  return result;
};

const deleteWorkPlanService = async (id: string): Promise<IWorkPlan | null> => {
  const isExist = await WorkPlanModel.findOne({ _id: id });
  console.log('after', isExist);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'সফল কর্ম পরিকল্পনা খুঁজে পেতে ব্যর্থ হয়েছে!');
  }

  const work = await WorkPlanModel.findOneAndDelete({ _id: id });

  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, 'কর্মপরিকল্পনা মুছে ফেলতে ব্যর্থ হয়েছে ');
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
      "আজকের কর্ম করে কল্পনা খুঁজে পেতে ব্যর্থ হয়েছে "
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
