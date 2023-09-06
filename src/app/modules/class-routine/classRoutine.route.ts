import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { classRoutineController } from './classRoutine.controller';
import { ClassRoutineValidation } from './classRoutine.validation';

const router = express.Router();

router.get('/', classRoutineController.getAllClassRoutine);

router.post(
  '/',
  validateRequestZod(ClassRoutineValidation.createClassRoutineZodSchema),
  classRoutineController.createClassRoutine
);

router.get('/:id', classRoutineController.getSingleClassRoutine);

router.delete('/:id', classRoutineController.deleteClassRoutine);
router.patch(
  '/:id',
  validateRequestZod(ClassRoutineValidation.updateClassRoutineZodSchema),
  classRoutineController.updateClassRoutine
);
export const ClassRoutineRoutes = router;
