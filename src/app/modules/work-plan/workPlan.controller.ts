import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { IWorkPlan } from './workPlan.interface';
import { WorkPlanService } from './workPlan.service';

const createWorkPlan = catchAsync(async (req: Request, res: Response) => {
  const workPlanCreate = req.body;
  const result = await WorkPlanService.createWorkPlan(workPlanCreate);

  sendResponse<IWorkPlan>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Work plan created successfully!',
    data: result,
  });
});

const getAllWorkPlanController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await WorkPlanService.getAllWorkPlan();

    sendResponse<IWorkPlan[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'All Work Plan Info retrieved successfully',
      data: result,
    });
  }
);
const getSingleWorkPlan = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await WorkPlanService.getSingleWorkPlan(id);

  sendResponse<IWorkPlan>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Work Plan retrieved successfully',
    data: result,
  });
});

const UpdateWorkPlan = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await WorkPlanService.updateWorkPlanService(id, updatedData);

  sendResponse<IWorkPlan>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Work Plan updated successfully',
    data: result,
  });
});

const deleteWorkPlanController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id);

    const result = await WorkPlanService.deleteWorkPlanService(id);

    sendResponse<IWorkPlan>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Work plan deleted successfully',
      data: result,
    });
  }
);

const getTodaysWorkPlanController = catchAsync(
  async (req: Request, res: Response) => {
    const events = await WorkPlanService.getTodaysWorkPlan();

    sendResponse<IWorkPlan[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Today's Works Plan retrieved successfully",
      data: events,
    });
  }
);

export const workPlanController = {
  createWorkPlan,
  getAllWorkPlanController,
  getSingleWorkPlan,
  UpdateWorkPlan,
  deleteWorkPlanController,
  getTodaysWorkPlanController,
};
