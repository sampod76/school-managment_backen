import { Types } from 'mongoose';
import { IBook } from '../book/book.interface';
import { IClass } from '../class/class.interface';
import { ITeacher } from '../teacher/interface.teacher';

export type IExamInformation = {
  examName: string;
  className: Types.ObjectId | IClass;
  date: string;
  time: string;
  status: 'active' | 'inactive';
  subject: Types.ObjectId | IBook;
  teacher: Types.ObjectId | ITeacher;
};
