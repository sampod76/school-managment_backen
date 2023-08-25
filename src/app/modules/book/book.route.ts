import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { bookController } from './book.controller';
import { BookValidation } from './book.validation';

const router = express.Router();

router.get('/:id', bookController.getSingleBook);
router.get('/', bookController.getAllBooks);

router.post(
  '/create-book',
  validateRequestZod(BookValidation.createBookZodSchema),
  bookController.createBook
);

router.patch(
  '/:id',
  validateRequestZod(BookValidation.updateBookZodSchema),

  bookController.updateBook
);

router.delete('/:id', bookController.deleteBook);

export const BookRoutes = router;
