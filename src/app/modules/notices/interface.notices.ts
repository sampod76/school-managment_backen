import { Model } from 'mongoose';

export type ITeacher = {
  title: string;
  noticeDate: string;
  publishe_date: string;
  document: string; // file link

};

export type TeacherModel = Model<ITeacher, Record<string, unknown>>;

export type ITeacherFilters = {
  searchTerm?: string;
  
};
