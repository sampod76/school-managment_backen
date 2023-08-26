import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { ITeacherSalary } from './teacherSalary.interface';
import { TeacherSalaryModel } from './teacherSalary.model';


const CreateTeacherSalary = (TeacherSalaryData: ITeacherSalary): Promise<ITeacherSalary | null> => {
  const createdTeacherSalary = TeacherSalaryModel.create(TeacherSalaryData);

  if (!createdTeacherSalary) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create Class first'
    );
  }

  return createdTeacherSalary;
};

// const getAllClasses = async (): Promise<IClass[] | null> => {
//   const allClass = ClassModel.aggregate([
//     {$match:{}},
//     {
//       $lookup: {
//         from: 'books',
//         let: { id: '$_id' },
//         pipeline: [
//           {
//             $match: {
//               $expr: { $eq: ['$class', '$$id'] },
//             },
//           },
          
//         ],
//         as: 'books',
//       },
//     },

//   ]);

//   if (!allClass) {
//     throw new ApiError(
//       httpStatus.EXPECTATION_FAILED,
//       'failed to get all Classes'
//     );
//   }

//   return allClass;
// };

// const getSingleClass = async (id: string): Promise<IClass | null> => {
//   const result = await ClassModel.findOne({ _id: id });

//   return result;
// };

// const updateClass = async (
//   id: string,
//   payload: Partial<IClass>
// ): Promise<IClass | null> => {
//   const result = await ClassModel.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });
//   if (!result) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Class not found!');
//   }
//   return result;
// };

// const deleteClass = async (id: string): Promise<IClass | null> => {
//   console.log('before', id);

//   const isExist = await ClassModel.findOne({ _id: id });
//   console.log('after', isExist);

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Class not found!');
//   }

//   const user = await ClassModel.findOneAndDelete({ _id: id });

//   if (!user) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete Class');
//   }

//   return user;
// };

export const TeacherSalaryService = {
    CreateTeacherSalary,
//   getAllClasses,
//   getSingleClass,
//   updateClass,
//   deleteClass,
};
