import { Model, Schema } from 'mongoose';

export type INotice = {
  title: string;
  notice_date: string;
  publishe_date?: string;
  document?: string | typeof Schema.Types.ObjectId; // file link
  message?:string
};

export type NoticeModel = Model<INotice, Record<string, unknown>>;

export type INoticeFilters = {
  searchTerm?: string;
};
