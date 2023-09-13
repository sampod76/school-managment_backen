import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import IMeeting from './meeting.interface';
import { MeetingModel } from './meeting.model';

const createMeetingFromDb = async (
  MeetingData: IMeeting
): Promise<IMeeting | null> => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  MeetingData.meeting_date = formattedDate;

  const createdCLass = MeetingModel.create(MeetingData);
  if (!createdCLass) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'নতুন মিটিং তৈরি ব্যর্থ হয়েছে'
    );
  }
  return createdCLass;
};

const getAllMeetingFromDb = async (): Promise<IMeeting[] | null> => {
  const allExpense = await MeetingModel.find({}).sort({ _id: -1 });

  if (!allExpense) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'মিটিং এর তালিকা খুঁজে পেতে ব্যর্থ হয়েছে'
    );
  }
  return allExpense;
};

const getSingleMeetingFromDb = async (id: string): Promise<IMeeting | null> => {
  const result = await MeetingModel.findOne({ _id: id });
  return result;
};

const updateMeetingFromDb = async (
  id: string,
  payload: Partial<IMeeting>
): Promise<IMeeting | null> => {
  const result = await MeetingModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'মিটিং এর তালিকা খুঁজে পেতে ব্যর্থ হয়েছে!');
  }
  return result;
};

const deleteMeetingFromDb = async (id: string): Promise<IMeeting | null> => {
  const isExist = await MeetingModel.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'মিটিং এর তালিকা খুঁজে পেতে ব্যর্থ হয়েছে!');
  }
  const books = await MeetingModel.findOneAndDelete({ _id: id });
  if (!books) {
    throw new ApiError(httpStatus.NOT_FOUND, 'মিটিং এর তালিকা আপডেট করতে ব্যর্থ হয়েছে');
  }
  return books;
};

export const MeetingService = {
  createMeetingFromDb,
  getAllMeetingFromDb,
  getSingleMeetingFromDb,
  updateMeetingFromDb,
  deleteMeetingFromDb,
};
