import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../share/catchAsync';
import sendResponse from '../../share/sendResponse';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const book = req.body;
  const result = await BookService.createBookFromDb(book);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'book created successfully!',
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooksFromDb();

  sendResponse<IBook[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books retrieved successfully',
    data: result,
  });
});
const getAllUniqueBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllUniqueBooksFromDb();

  sendResponse<IBook[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books retrieved successfully',
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.getSingleBookFromDb(id);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const updatedData = req.body;

  const result = await BookService.updateBookFromDb(id, updatedData);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book updated successfully',
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.deleteBookFromDb(id);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book deleted successfully',
    data: result,
  });
});

export const bookController = {
  createBook,
  getAllBooks,
  getAllUniqueBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
