import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { newExpenseController } from './newExpense.controller';
import { NewExpenseValidation } from './newExpense.validation';

const router = express.Router();

router.get('/:timeRange', newExpenseController.getDailyExpense);
router.get('/weekly', newExpenseController.getWeeklyExpense);
router.get('/monthly', newExpenseController.getMonthlyExpense);
router.get('/yearly', newExpenseController.getYearlyExpense);
router.get('/:id', newExpenseController.getSingleNewExpense);
router.get('/', newExpenseController.getAllNewExpense);
router.post(
  '/create-expense',
  validateRequestZod(NewExpenseValidation.createNewExpenseZodSchema),
  newExpenseController.createNewExpense
);
router.patch(
  '/:id',
  validateRequestZod(NewExpenseValidation.updateNewExpenseZodSchema),
  newExpenseController.updateNewExpense
);
router.delete('/:id', newExpenseController.deleteNewExpense);

export const ExpenseRoutes = router;
