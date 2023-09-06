import { Types } from 'mongoose';
import { IBook } from '../book/book.interface';
import { IClass } from '../class/class.interface';
import { ITeacher } from '../teacher/interface.teacher';

export type IClassRoutine = {
  class: Types.ObjectId | IClass;
  section: string; //It will be an object id after creating the section
  startTime: string;
  endTime: string;
  subject: Types.ObjectId | IBook;
  teacher: Types.ObjectId | ITeacher;
};
