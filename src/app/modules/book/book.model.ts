import { Schema, model } from 'mongoose';
import { IBook } from './book.interface';

export const STATUS = ['active', 'inactive'];

const bookSchema = new Schema<IBook>(
  {
    bookName: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      enum: STATUS,
      required: true,
    },
    bookCode: {
      type: String,
      trim: true,
      required: true,
    },
    class: {
      type: Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BookModel = model<IBook>('Book', bookSchema);
