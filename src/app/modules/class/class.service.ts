import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IClass } from './class.interface';
import { ClassModel } from './class.model';

const createClass = (ClassData: IClass): Promise<IClass | null> => {
  const createdCLass = ClassModel.create(ClassData);

  if (!createdCLass) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'শ্রেণী তৈরিতে ব্যর্থ হয়েছে'
    );
  }

  return createdCLass;
};

const getAllClasses = async (): Promise<IClass[] | null> => {
  const allClass = ClassModel.aggregate([
    {$match:{}},
    {
      $lookup: {
        from: 'books',
        let: { id: '$_id' },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ['$class', '$$id'] },
            },
          },
          
        ],
        as: 'books',
      },
    },

  ]);

  if (!allClass) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'শ্রেণী খুঁজে পেতে ব্যর্থ হয়েছে'
    );
  }

  return allClass;
};

const getSingleClass = async (id: string): Promise<IClass | null> => {
  const result = await ClassModel.findOne({ _id: id });

  return result;
};

const updateClass = async (
  id: string,
  payload: Partial<IClass>
): Promise<IClass | null> => {
  const result = await ClassModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'শ্রেণীর তথ্য আপডেট করতে ব্যর্থ হয়েছে!');
  }
  return result;
};

const deleteClass = async (id: string): Promise<IClass | null> => {
  console.log('before', id);

  const isExist = await ClassModel.findOne({ _id: id });
  console.log('after', isExist);

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'শ্রেণী খুঁজে পেতে ব্যর্থ হয়েছে!');
  }

  const user = await ClassModel.findOneAndDelete({ _id: id });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'শ্রেণীর তথ্য মুছে ফেলতে ব্যর্থ হয়েছে');
  }

  return user;
};

export const ClassService = {
  createClass,
  getAllClasses,
  getSingleClass,
  updateClass,
  deleteClass,
};
