import { Model, Schema } from 'mongoose';

export type INotice = {
  title: string;
  noticeDate: string;
  publishe_date: string;
  document: string | typeof Schema.Types.ObjectId; // file link
};

export type NoticeModel = Model<INotice, Record<string, unknown>>;

export type INoticeFilters = {
  searchTerm?: string;
};
