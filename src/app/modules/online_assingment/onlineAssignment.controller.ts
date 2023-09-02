import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { IOnlineAssignment } from './onlineAssignment.interface';
import { OnlineAssignmentService } from './onlineAssignment.service';

const createOnlineAssignment = catchAsync(
  async (req: Request, res: Response) => {
    const onlineAssignment = req.body;
    const result = await OnlineAssignmentService.createOnlineAssignmentToDB(
      onlineAssignment
    );

    sendResponse<IOnlineAssignment>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Online Assignment created successfully!',
      data: result,
    });
  }
);

const getAllOnlineAssignment = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OnlineAssignmentService.getOnlineAssignmentToDB();

    sendResponse<IOnlineAssignment[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'All Online Assignment retrieved successfully',
      data: result,
    });
  }
);

const getSingleOnlineAssignment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result =
      await OnlineAssignmentService.getSingleOnlineAssignmentFromDb(id);

    sendResponse<IOnlineAssignment>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Online Assignment retrieved successfully',
      data: result,
    });
  }
);

const updateSingleOnlineAssignment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await OnlineAssignmentService.updateOnlineAssignmentFromDb(
      id,
      updatedData
    );

    sendResponse<IOnlineAssignment>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Online Assignment updated successfully',
      data: result,
    });
  }
);

const deleteOnlineAssignment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await OnlineAssignmentService.deleteOnlineAssignmentFromDb(
      id
    );

    sendResponse<IOnlineAssignment>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Online Assignment deleted successfully',
      data: result,
    });
  }
);

export const onlineAssignmentController = {
  createOnlineAssignment,
  getAllOnlineAssignment,
  getSingleOnlineAssignment,
  updateSingleOnlineAssignment,
  deleteOnlineAssignment,
};
