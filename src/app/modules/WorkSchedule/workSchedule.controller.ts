import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { IWorkSchedule } from './workSchedule.interface';
import { WorkScheduleService } from './workSchedule.service';



const createWorkSchedule = catchAsync(async (req: Request, res: Response) => {
  const workScheduleAssign = req.body;
  const result = await WorkScheduleService.createWorkSchedule(workScheduleAssign);

  sendResponse<IWorkSchedule>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Work Schedule created successfully!',
    data: result,
  });
});

const getAllWorkScheduleController = catchAsync(async (req: Request, res: Response) => {
  const result = await WorkScheduleService.getAllWorkSchedule();

  sendResponse<IWorkSchedule[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All Work Schedule Info retrieved successfully',
    data: result,
  });
});
const getSingleWork = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
  
    const result = await WorkScheduleService.getSingleWorkService(id);
  
    sendResponse<IWorkSchedule>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Work retrieved successfully',
      data: result,
    });
  });

const UpdateWorkSchedule = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await WorkScheduleService.updateWorkScheduleService(id, updatedData);

  sendResponse<IWorkSchedule>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Work Schedule updated successfully',
    data: result,
  });
});

const deleteWorkScheduleController = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);

  const result = await WorkScheduleService.deleteWorkScheduleService(id);

  sendResponse<IWorkSchedule>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Work deleted successfully',
    data: result,
  });
});

const getTodaysWorkController = catchAsync(async (req: Request, res: Response) => {
    const events = await WorkScheduleService.getTodaysWork();
  
    sendResponse<IWorkSchedule[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Today\'s Works retrieved successfully',
      data: events,
    });
  });


export const workScheduleController = {
    createWorkSchedule,
    getAllWorkScheduleController,
    UpdateWorkSchedule,
    deleteWorkScheduleController,
    getSingleWork,
    getTodaysWorkController
   


};
