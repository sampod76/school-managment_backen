import mongoose, { Schema, model } from 'mongoose';

import { YN_VALUES } from '../../../constant/userConstant';
import { ENUM_YN } from '../../../enums/usersEnums';
import {
  ITeacherAttendance,
  TeachersAttendanceModel,
} from './interface.teachers_attendance';

export const teachersAttendanceSchema = new Schema<
  ITeacherAttendance,
  TeachersAttendanceModel
>(
  {
   
    date: {
      type: String,
      trim: true, // Trim whitespace from the beginning and end of the string
      required: true,
    },
    teachers: [
      {
        teacher_userId: {
          type: String,
          trim: true, // Trim whitespace from the beginning and end of the string
          required: true,
        },
        teacher: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Teacher',
          required: true,
        },
        attendance: {
          type: String,
          enum: YN_VALUES,
          default: ENUM_YN.YES,
          // required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const TeacherAttendance = model<ITeacherAttendance>(
  'Teacher_attendance',
  teachersAttendanceSchema
);
