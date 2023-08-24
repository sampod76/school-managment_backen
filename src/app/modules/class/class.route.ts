import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { classController } from './class.controller';
import { ClassValidation } from './class.validation';

const router = express.Router();

router.get('/:id', classController.getSingleClass);

router.get('/', classController.getAllClasses);

router.post(
  '/create-class',
  validateRequestZod(ClassValidation.createClassZodSchema),
  classController.createClass
);

router.patch(
  '/:id',
  validateRequestZod(ClassValidation.updateClassZodSchema),
  classController.updateClass
);

router.delete('/:id', classController.deleteClass);

export const ClassRoutes = router;
