import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import { IBook } from './book.interface';
import { BookModel } from './book.model';

const createBook = (BookData: IBook): Promise<IBook | null> => {
  const createdCLass = BookModel.create(BookData);

  if (!createdCLass) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, 'failed to create Book');
  }

  return createdCLass;
};

const getAllBooks = async (): Promise<IBook[] | null> => {
  const allUsers = BookModel.find();

  if (!allUsers) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all books'
    );
  }

  return allUsers;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await BookModel.findOne({ _id: id });

  return result;
};

const updateBook = async (
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

const deleteBook = async (id: string): Promise<IBook | null> => {
  const isExist = await BookModel.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found!');
  }

  const user = await BookModel.findOneAndDelete({ _id: id });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete book');
  }

  return user;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
