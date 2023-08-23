import { Types } from 'mongoose';

export type ISection = {
  sectionName: string;
  status: 'active' | 'inactive';
  book: Types.ObjectId;
};
