import { Schema, model } from 'mongoose';

import { INotice, NoticeModel } from './interface.notices';

export const noticeSchema = new Schema<INotice, NoticeModel>(
  {
    title: { type: String, trim: true },
    notice_date: Date,
    publishe_date: Date, // Typo: 'publishe_date' should be 'publish_date'
    document: {
      type: Schema.Types.ObjectId,
      ref: 'FileUploade',
    }, // Fix the type here
    message: { type: String }, // Typo: 'body' should be
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Notice = model<INotice>('Notice', noticeSchema);
