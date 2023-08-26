import { Types } from 'mongoose';
import { IClass } from '../class/class.interface';

import { ObjectId } from "mongoose";

export type IBook = {
  _id:ObjectId
  bookName: string;
  bookCode: string;
  bookType: string;
  status: 'active' | 'inactive';
  // class: string;
  class: Types.ObjectId | IClass;
};
