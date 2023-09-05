import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IExamInformation } from './exam.interface';
import { ExamModel } from './exam.model';

const createExamToDb = async (
  ExamData: IExamInformation
): Promise<IExamInformation | null> => {
  const createdExam = ExamModel.create(ExamData);
  if (!createdExam) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, 'failed to create Exam');
  }
  return createdExam;
};

const getAllExamFromDb = async (): Promise<IExamInformation[] | null> => {
  const allExams = ExamModel.find({})
    .populate({
      path: 'subject',
      select: 'bookName',
    })
    .populate({
      path: 'className',
      select: 'className',
    })
    .populate({
      path: 'teacher',
      select: 'teacher_info.name_bangla',
    });
  if (!allExams) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, 'failed to get all Exam');
  }
  return allExams;
};

const getSingleExamFromDb = async (
  id: string
): Promise<IExamInformation | null> => {
  const result = await ExamModel.findOne({ _id: id })
    .populate({
      path: 'subject',
      select: 'bookName',
    })
    .populate({
      path: 'className',
      select: 'className',
    })
    .populate({
      path: 'teacher',
      select: 'teacher_info.name_bangla',
    });
  return result;
};

const updateExamFromDb = async (
  id: string,
  payload: Partial<IExamInformation>
): Promise<IExamInformation | null> => {
  const result = await ExamModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Exam not found!');
  }
  return result;
};

const deleteExamFromDb = async (
  id: string
): Promise<IExamInformation | null> => {
  const isExist = await ExamModel.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Exam not found!');
  }
  const exam = await ExamModel.findOneAndDelete({ _id: id });
  if (!exam) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete Exam');
  }
  return exam;
};

export const ExamService = {
  createExamToDb,
  getAllExamFromDb,
  getSingleExamFromDb,
  updateExamFromDb,
  deleteExamFromDb,
};
