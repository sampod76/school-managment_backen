import { Types } from 'mongoose';
import { IClass } from '../class/class.interface';

export type IBook = {
  bookName: string;
  bookCode?: string;
  status: 'active' | 'inactive';
  // class: string;
  class: Types.ObjectId | IClass;
};
