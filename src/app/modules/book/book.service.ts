import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IBook } from './book.interface';
import { BookModel } from './book.model';

const createBookFromDb = async (BookData: IBook): Promise<IBook | null> => {
  const createdCLass = BookModel.create(BookData);
  if (!createdCLass) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, 'failed to create Book');
  }
  return createdCLass;
};

const getAllBooksFromDb = async (): Promise<IBook[] | null> => {
  const allBooks = BookModel.find({}).populate('class');
  if (!allBooks) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all books'
    );
  }
  return allBooks;
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
};
