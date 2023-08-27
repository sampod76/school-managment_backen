import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { ITeacherSalary } from './teacherSalary.interface';
import { TeacherSalaryModel } from './teacherSalary.model';

const CreateTeacherSalary = (
  TeacherSalaryData: ITeacherSalary
): Promise<ITeacherSalary | null> => {
  const createdTeacherSalary = TeacherSalaryModel.create(TeacherSalaryData);

  if (!createdTeacherSalary) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Teachers Salary first'
    );
  }

  return createdTeacherSalary;
};
const getAllTeacherSalary = async (): Promise<ITeacherSalary[] | null> => {
  const allTeacherSalary = TeacherSalaryModel.find({});
  if (!allTeacherSalary) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get Teachers Salary'
    );
  }
  return allTeacherSalary;
};

const singleTeacherService = async (
  id: string
): Promise<ITeacherSalary | null> => {
  const result = await TeacherSalaryModel.findOne({ _id: id });

  return result;
};

const updateTeacherSalary = async (
  id: string,
  payload: Partial<ITeacherSalary>
): Promise<ITeacherSalary | null> => {
  const result = await TeacherSalaryModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Teacher Salary not found!');
  }
  return result;
};

const deleteTeacherService = async (
  id: string
): Promise<ITeacherSalary | null> => {
  const isExist = await TeacherSalaryModel.findOne({ _id: id });
  console.log('after', isExist);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Teacher not found!');
  }

  const teacherSalary = await TeacherSalaryModel.findOneAndDelete({ _id: id });

  if (!teacherSalary) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete Teacher salary');
  }

  return teacherSalary;
};

export const TeacherSalaryService = {
  CreateTeacherSalary,
  getAllTeacherSalary,
  deleteTeacherService,
  updateTeacherSalary,
  singleTeacherService,
};
