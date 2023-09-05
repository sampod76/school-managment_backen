import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import IMeeting from './meeting.interface';
import { MeetingService } from './meeting.service';

const createMeeting = catchAsync(async (req: Request, res: Response) => {
  const meeting = req.body;
  const result = await MeetingService.createMeetingFromDb(meeting);

  sendResponse<IMeeting>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Meeting created successfully!',
    data: result,
  });
});

const getAllMeeting = catchAsync(async (req: Request, res: Response) => {
  console.log('get call');
  const result = await MeetingService.getAllMeetingFromDb();

  sendResponse<IMeeting[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Meeting retrieved successfully',
    data: result,
  });
});

const getSingleMeeting = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await MeetingService.getSingleMeetingFromDb(id);

  sendResponse<IMeeting>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Meeting retrieved successfully',
    data: result,
  });
});

const updateMeeting = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await MeetingService.updateMeetingFromDb(id, updatedData);

  sendResponse<IMeeting>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Meeting updated successfully',
    data: result,
  });
});

const deleteMeeting = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await MeetingService.deleteMeetingFromDb(id);

  sendResponse<IMeeting>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Meeting deleted successfully',
    data: result,
  });
});

export const meetingController = {
  createMeeting,
  getAllMeeting,
  getSingleMeeting,
  updateMeeting,
  deleteMeeting,
};
