import express from 'express';
import { StudentValidation } from './validation.student';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { StudentController } from './controller.student';

const router = express.Router();
router.route('/').get(StudentController.getAllStudents);

router
  .route('/:id')
  .get(StudentController.getSingleStudent)
  .delete(StudentController.deleteStudent)
  .patch(
    validateRequestZod(StudentValidation.updateStudentZodSchema),
    StudentController.updateStudent
  );

export const StudentRoutes = router;
