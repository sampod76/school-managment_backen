import { Model, Schema } from 'mongoose';
import { yesNoType } from '../../interface/enumType';

export type IStudentAttendance = {
  classInfo: { name: string; class?: string | typeof Schema.Types.ObjectId };
  section?: { name: string; section?: string | typeof Schema.Types.ObjectId };
  date: string;
  students: {
    student_userId: string;
    student: string | typeof Schema.Types.ObjectId;
    attendance: yesNoType; //type of
  }[];
};

export type StudentAttendanceModel = Model<
  IStudentAttendance,
  Record<string, unknown>
>;

export type IStudentAttendanceFilters = {
  searchTerm?: string;
  className?: string;
  sectionName?: string;
  studentUserId?: string;
  date?: string;
};
