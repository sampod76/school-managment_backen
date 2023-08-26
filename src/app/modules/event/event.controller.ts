import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { IEvents } from './event.interface';
import { EventsService } from './event.service';

const createEvent = catchAsync(async (req: Request, res: Response) => {
  const eventAssign = req.body;
  const result = await EventsService.createEvents(eventAssign);

  sendResponse<IEvents>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Event created successfully!',
    data: result,
  });
});

const getAllEventController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await EventsService.getAllEvents();

    sendResponse<IEvents[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'All event Info retrieved successfully',
      data: result,
    });
  }
);
const getSingleEvent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await EventsService.getSingleEventService(id);

  sendResponse<IEvents>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Event retrieved successfully',
    data: result,
  });
});

const UpdateEvents = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await EventsService.updateEventService(id, updatedData);

  sendResponse<IEvents>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Event updated successfully',
    data: result,
  });
});

const deleteEventController = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id);

    const result = await EventsService.deleteEventService(id);

    sendResponse<IEvents>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Event deleted successfully',
      data: result,
    });
  }
);

const getUpcomingEventsController = catchAsync(
  async (req: Request, res: Response) => {
    const events = await EventsService.getUpcomingEvents();

    sendResponse<IEvents[]>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Upcoming events retrieved successfully',
      data: events,
    });
  }
);

export const eventsController = {
  createEvent,
  getAllEventController,
  getSingleEvent,
  UpdateEvents,
  deleteEventController,
  getUpcomingEventsController,
};
