import { Model, Schema } from 'mongoose';
import { yesNoType } from '../../interface/enumType';

export type ITeacherAttendance = {
  date: string;
  teachers: {
    teacher_userId: string;
    teacher: string | typeof Schema.Types.ObjectId;
    attendance: yesNoType; //type of
  }[];
};

export type TeachersAttendanceModel = Model<
  ITeacherAttendance,
  Record<string, unknown>
>;

export type ITeacherAttendanceFilters = {
  searchTerm?: string;
  date?: string;
  studentUserId?: string;
};
