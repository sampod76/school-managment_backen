import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { classController } from './class.controller';
import { ClassValidation } from './class.validation';

const router = express.Router();

// router.get('/:id', classController.getSingleClass);
// router.get('/', classController.getAllClasses);
// router.post(
//   '/create-class',
//   validateRequestZod(ClassValidation.createClassZodSchema),
//   classController.createClass
// );
// router.patch(
//   '/:id',
//   validateRequestZod(ClassValidation.updateClassZodSchema),
//   classController.updateClass
// );
// router.delete('/:id', classController.deleteClass);

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
