import { ObjectId, Types } from 'mongoose';
import { IBook } from '../book/book.interface';

export type IOnlineAssignment = {
  _id: ObjectId;
  dateFrom: string;
  startTime: string;
  duration: string;
  roomNo: string;
  markMin: string;
  markMax: string;
  exam: string;
  quiz: string;
  question: string;
  attempts: string;
  examFrom: string;
  examTo: string;
  examPublished: boolean;
  resultPublished: boolean;
  description?: string;
  status: 'active' | 'inactive';
  subject: Types.ObjectId | IBook;
};
