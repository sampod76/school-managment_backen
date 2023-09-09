import mongoose, { Schema, model } from 'mongoose';

import { YN_VALUES } from '../../../constant/userConstant';
import { ENUM_YN } from '../../../enums/usersEnums';
import {
  IStudentAttendance,
  StudentAttendanceModel,
} from './interface.students_attendance';

export const studentAttendanceSchema = new Schema<
  IStudentAttendance,
  StudentAttendanceModel
>(
  {
    classInfo: {
      name: {
        type: String,
        trim: true, // Trim whitespace from the beginning and end of the string
        required: true,
      },
      class: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Class",
       
      },
    },
    section: {
      name: {
        type: String,
        trim: true, // Trim whitespace from the beginning and end of the string
      },
      section: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: 'Section',
      },
    },
    date: {
      type: String,
      trim: true, // Trim whitespace from the beginning and end of the string
      required: true,
    },
    students: [
      {
        student_userId: {
          type: String,
          trim: true, // Trim whitespace from the beginning and end of the string
          required: true,
        },
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Student',
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

export const StudentAttendance = model<IStudentAttendance>(
  'Student_attendance',
  studentAttendanceSchema
);
