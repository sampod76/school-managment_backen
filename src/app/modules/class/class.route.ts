import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { classController } from './class.controller';
import { ClassValidation } from './class.validation';

const router = express.Router();

router
  .route('/')
  .get(classController.getAllClasses)
  .post(
    validateRequestZod(ClassValidation.createClassZodSchema),
    classController.createClass
  );

router.route(':/id').get(classController.getSingleClass);

router.delete('/:id', classController.deleteClass);
router.patch(
  '/:id',
  validateRequestZod(ClassValidation.updateClassZodSchema),
  classController.updateClass
);
export const ClassRoutes = router;
