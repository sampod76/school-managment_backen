import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { bookController } from './book.controller';
import { BookValidation } from './book.validation';

const router = express.Router();

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(
    validateRequestZod(BookValidation.createBookZodSchema),
    bookController.createBook
  );

router
  .route('/:id')
  .get(bookController.getSingleBook)
  .patch(
    validateRequestZod(BookValidation.updateBookZodSchema),
    bookController.updateBook
  )
  .delete(bookController.deleteBook);

export const BookRoutes = router;
