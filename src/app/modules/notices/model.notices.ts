import { Schema, model } from 'mongoose';

import { INotice, NoticeModel } from './interface.notices';

export const noticeSchema = new Schema<INotice, NoticeModel>(
  {
    title: { type: String, trim: true },
    noticeDate: Date,
    publishe_date: Date, // Typo: 'publishe_date' should be 'publish_date'
    document: {
      type: Schema.Types.ObjectId,
      ref: 'FileUploade',
    }, // Fix the type here
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Notice = model<INotice>('Notice', noticeSchema);
