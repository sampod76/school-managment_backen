import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';

import { IEvents } from './event.interface';
import { EventModel } from './event.model';

const createEvents = (eventsData: IEvents): Promise<IEvents | null> => {
  const createdEvent = EventModel.create(eventsData);

  if (!createdEvent) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'ইভেন্ট তৈরিতে ব্যর্থ হয়েছে'
    );
  }

  return createdEvent;
};
const getAllEvents = async (): Promise<IEvents[] | null> => {
  const eventService = EventModel.find({});
  if (!eventService) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'ইভেন্ট গুলো খুজে পেতে ব্যর্থ হয়েছে'
    );
  }
  return eventService;
};
const getSingleEventService = async (id: string): Promise<IEvents | null> => {
  const result = await EventModel.findOne({ _id: id });

  return result;
};

const updateEventService = async (
  id: string,
  payload: Partial<IEvents>
): Promise<IEvents | null> => {
  const result = await EventModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ইভেন্ট খুঁজে পাওয়া যায়নি!');
  }
  return result;
};

const deleteEventService = async (id: string): Promise<IEvents | null> => {
  const isExist = await EventModel.findOne({ _id: id });
  console.log('after', isExist);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ইভেন্ট খুঁজে পাওয়া যায়নি!');
  }

  const event = await EventModel.findOneAndDelete({ _id: id });

  if (!event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ইভেন মুছে ফেলতে ব্যর্থ হয়েছে');
  }

  return event;
};

const getUpcomingEvents = async (): Promise<IEvents[] | null> => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const events = await EventModel.find({
    event_date: { $gte: formattedDate },
  });

  if (!events) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'আসন্ন ইভেন্ট খুঁজে পেতে ব্যর্থ হয়েছে'
    );
  }

  return events;
};

export const EventsService = {
  createEvents,
  getAllEvents,
  getSingleEventService,
  updateEventService,
  deleteEventService,
  getUpcomingEvents,
};
