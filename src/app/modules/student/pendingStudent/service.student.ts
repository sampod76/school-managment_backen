/* eslint-disable @typescript-eslint/no-explicit-any */

import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import { ENUM_USER_ROLE } from '../../../../enums/usersEnums';
import { paginationHelper } from '../../../../helper/paginationHelper';
import ApiError from '../../../errors/ApiError';
import { IGenericResponse } from '../../../interface/common';
import { IPaginationOption } from '../../../interface/pagination';
import { IUser } from '../../users/user.interface';
import { UserService } from '../../users/user.service';
import { studentSearchableFields } from '../constant.student';
import { IStudent, IStudentFilters } from '../interface.student';
import { Pending_student, Student } from '../model.student';

const getAllPendingStudentsFromDb = async (
  filters: IStudentFilters,
  paginationOptions: IPaginationOption
): Promise<IGenericResponse<IStudent[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions);
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: studentSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Pending_student.find(whereConditions)

    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Pending_student.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSinglePendingStudentFromDb = async (
  id: string
): Promise<IStudent | null> => {
  const result = await Pending_student.findOne({ _id: id })
    .populate('student.photo')
    .populate('student.books');
  return result;
};
const createSinglePendingStudentFromDb = async (
  data: IStudent
): Promise<IStudent | null> => {
  const result = await Pending_student.create(data);
  let userResult = null;
  if (result._id) {
    const userdata: IUser = {
      userId: data.userId,
      password: data.password,
      name: {
        name_english: data.student.name_english,
        name_bangla: data.student.name_bangla,
      },
      // role: "super-admin",
      role: ENUM_USER_ROLE.STUDENT,
      // student: String(result._id),
      student: result._id.toString(),
    };
    userResult = await UserService.createUser(userdata);
    console.log(userResult);
  }
  if (!userResult) {
    await Pending_student.findByIdAndDelete({ _id: result._id });
  }
  return result;
};

// module 15 --> 14,15 video
const updatePendingStudentFromDb = async (
  id: string,
  payload: Partial<IStudent>
): Promise<IStudent | null> => {
  const isExist = await Pending_student.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found !');
  }

  const {
    current_address,
    permanent_address,
    father_info,
    other_guardian_info,
    mother_info,
    student,
    ...studentData
  } = payload;

  const updatedStudentData: Partial<IStudent> = { ...studentData };

  if (student && Object.keys(student).length > 0) {
    Object.keys(student).forEach(key => {
      const studentKey = `student.${key}` as keyof Partial<IStudent>; // `student.fisrtstudents`
      (updatedStudentData as any)[studentKey] =
        student[key as keyof typeof student];
    });
  }
  if (current_address && Object.keys(current_address).length > 0) {
    Object.keys(current_address).forEach(key => {
      const current_addressKey =
        `current_address.${key}` as keyof Partial<IStudent>; // `current_address.fisrtcurrent_address`
      (updatedStudentData as any)[current_addressKey] =
        current_address[key as keyof typeof current_address];
    });
  }
  if (permanent_address && Object.keys(permanent_address).length > 0) {
    Object.keys(permanent_address).forEach(key => {
      const permanent_addressKey =
        `permanent_address.${key}` as keyof Partial<IStudent>; // `permanent_address.fisrtpermanent_address`
      (updatedStudentData as any)[permanent_addressKey] =
        permanent_address[key as keyof typeof permanent_address];
    });
  }
  if (mother_info && Object.keys(mother_info).length > 0) {
    Object.keys(mother_info).forEach(key => {
      const mother_infoKey = `mother_info.${key}` as keyof Partial<IStudent>; // `mother_info.fisrtmother_info`
      (updatedStudentData as any)[mother_infoKey] =
        mother_info[key as keyof typeof mother_info];
    });
  }

  if (father_info && Object.keys(father_info).length > 0) {
    Object.keys(father_info).forEach(key => {
      const father_infoKey = `father_info.${key}` as keyof Partial<IStudent>; // `father_info.fisrtfather_info`
      (updatedStudentData as any)[father_infoKey] =
        father_info[key as keyof typeof father_info]; // updatedStudentData['father_info.motherContactNo']=father_info[motherContactNo]
      // updatedStudentData --> object create --> "father_info.motherContactNo": 0177
    });
  }
  if (other_guardian_info && Object.keys(other_guardian_info).length > 0) {
    Object.keys(other_guardian_info).forEach(key => {
      const localGuradianKey =
        `other_guardian_info.${key}` as keyof Partial<IStudent>; // `other_guardian_info.fisrtName`
      (updatedStudentData as any)[localGuradianKey] =
        other_guardian_info[key as keyof typeof other_guardian_info];
    });
  }

  const result = await Pending_student.findOneAndUpdate(
    { _id: id },
    updatedStudentData,
    {
      new: true,
    }
  );
  return result;
};

// ! ************************* admintion appropriate ***************************
// const moveDataFromPendingToStudent = async (
//   pendingStudentId: string,
//   session: ClientSession
// ) => {
//   try {
//     // Retrieve the specific data entry from the Pending_student collection within the transaction
//     const pendingStudent = await Pending_student.findById(pendingStudentId)
//       .session(session)
//       .exec();
//     console.log(pendingStudent, '235');
//     if (!pendingStudent) {
//       throw new Error('Pending student not found');
//     }
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     // const { _id, ...other } = pendingStudent;
//     // Create a corresponding Student document and save it within the transaction
//     const student = new Student({
//       // Map fields from Pending_student to Student collection here
//       ...pendingStudent,
//       admission_approved: ENUM_YN.YES,
//       // Other fields...
//     });

//     await student.save({ session });

//     // Optionally, delete the data from the Pending_student collection within the transaction
//     await Pending_student.findByIdAndDelete(pendingStudentId).session(session);

//     console.log('Data moved successfully within the transaction.');
//   } catch (error: any) {
//     console.error('Error moving data within the transaction:', error);
//     throw new ApiError(
//       400,
//       error?.message || 'Error moving data within the transaction'
//     );
//   }
// };

//approve student login
const approvedPendingStudentAdminssionFromDb = async (
  id: string,
  data: Partial<IStudent>
): Promise<Partial<IStudent> | null> => {
  let result = null;
  // if (data?.admission_approved === ENUM_YN.NO) {
  //   result = await Pending_student.findByIdAndDelete(id);
  //   if (!result) {
  //     throw new ApiError(404, 'কোন কিছু ভুল হচ্ছে-233');
  //   }
  // } else {
  const findStudent = await Student.findOne({ userId: data?.userId });
  if (findStudent) {
    throw new ApiError(
      400,
      'একই ইউজার আইডি ব্যবহার করে পূর্বে রেজিস্ট্রেশন হয়েছে'
    );
  }
  const findPendingStudent = await Pending_student.findById(id);
  if (!findPendingStudent?._id) {
    throw new ApiError(400, 'শিক্ষার্থী খুঁজে পাওয়া যায়নি');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, ...Otherdata } = findPendingStudent.toObject();

  const createStudent = await Student.create(Otherdata);
  if (!createStudent?._id) {
    throw new ApiError(400, 'শিক্ষার্থীর রেজিস্ট্রেশন সম্পন্ন হয়নি');
  }
  result = createStudent;
  await Pending_student.findByIdAndDelete(id);
  // }
  if (!result) {
    throw new ApiError(400, 'কোন কিছু ভুল হচ্ছে');
  }

  return result;
};

//! ****************************** end ********************************

const deletePendingStudentFromDb = async (
  id: string
): Promise<IStudent | null> => {
  const result = await Pending_student.findByIdAndDelete(id);
  return result;
};

export const PendingStudentService = {
  createSinglePendingStudentFromDb,
  getAllPendingStudentsFromDb,
  getSinglePendingStudentFromDb,
  updatePendingStudentFromDb,
  deletePendingStudentFromDb,
  approvedPendingStudentAdminssionFromDb,
};

// const session = await mongoose.startSession();
//     session.startTransaction();
//     try {
//       //******************************** */
//       // Retrieve the specific data entry from the Pending_student collection within the transaction
//       const pendingStudent = await Pending_student.findById(id)
//         .session(session)
//         .exec();
//       console.log(pendingStudent, '235');
//       if (!pendingStudent) {
//         throw new ApiError(500, 'Pending student not found');
//       }
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const { _id, ...other } = pendingStudent;
//       console.log(other);
//       await Student.create([{ ...other }], { session });

//       // Optionally, delete the data from the Pending_student collection within the transaction
//       const deleteResult = await Pending_student.findOneAndDelete({
//         _id: id,
//       }).session(session);
//       if (!deleteResult) {
//         throw new ApiError(500, 'Pending student not transferred failed 270');
//       }
//       ///********************************* */
//       // Commit the transaction
//       await session.commitTransaction();
//       console.log('Transaction committed successfully.');
//     } catch (error) {
//       console.error('Error in transaction:', error);
//       // Rollback the transaction if an error occurs
//       await session.abortTransaction();
//       throw error
//     } finally {
//       // End the session
//       session.endSession();
//     }
