import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { StudentController } from './controller.student';
import { StudentValidation } from './validation.student';

const router = express.Router();
router
  .route('/')
  .get(StudentController.getAllStudents)
  .post(
    validateRequestZod(StudentValidation.createStudentZodSchema),
    StudentController.createSingleStudent
  );

router
  .route('/:id')
  .get(StudentController.getSingleStudent)
  .delete(StudentController.deleteStudent)
  .patch(
    validateRequestZod(StudentValidation.updateStudentZodSchema),
    StudentController.updateStudent
  );

export const StudentRoutes = router;
