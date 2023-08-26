import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { newIncomeController } from './newIncome.controller';
import { NewIncomeValidation } from './newIncome.validation';

const router = express.Router();

router.get('/:id', newIncomeController.getSingleNewIncome);
router.get('/', newIncomeController.getAllNewIncome);
router.post(
  '/create-income',
  validateRequestZod(NewIncomeValidation.createNewIncomeZodSchema),
  newIncomeController.createNewIncome
);
router.patch(
  '/:id',
  validateRequestZod(NewIncomeValidation.updateNewIncomeZodSchema),
  newIncomeController.updateNewIncome
);
router.delete('/:id', newIncomeController.deleteNewIncome);

export const EarningRoutes = router;
