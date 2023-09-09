import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IBook } from './book.interface';
import { BookModel } from './book.model';

const createBookFromDb = async (BookData: IBook): Promise<IBook | null> => {
  const createdCLass = await BookModel.create(BookData);
  if (!createdCLass) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, 'failed to create Book');
  }
  return createdCLass;
};

const getAllBooksFromDb = async (): Promise<IBook[] | null> => {
  const allBooks = await BookModel.find({}).populate('class');
  if (!allBooks) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, 'কোন বই পাওয়া যায়নি');
  }
  return allBooks;
};
const getAllUniqueBooksFromDb = async (): Promise<IBook[] | null> => {
  const allUniqueBooks = await BookModel.aggregate([
    { $match: {} },
    {
      $group: {
        _id: null,
        uniqueBook: { $addToSet: '$bookName' },
      },
    },
    {
      $unwind:"$uniqueBook"
    },
    { $project: { _id: 0 }},
  ]);

  if (!allUniqueBooks) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, 'কোন বই পাওয়া যায়নি');
  }
  return allUniqueBooks;
};

const getSingleBookFromDb = async (id: string): Promise<IBook | null> => {
  const result = await BookModel.findOne({ _id: id });
  return result;
};

const updateBookFromDb = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await BookModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found!');
  }
  return result;
};

const deleteBookFromDb = async (id: string): Promise<IBook | null> => {
  const isExist = await BookModel.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found!');
  }
  const books = await BookModel.findOneAndDelete({ _id: id });
  if (!books) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete book');
  }
  return books;
};

export const BookService = {
  createBookFromDb,
  getAllBooksFromDb,
  getSingleBookFromDb,
  updateBookFromDb,
  deleteBookFromDb,
  getAllUniqueBooksFromDb,
};
