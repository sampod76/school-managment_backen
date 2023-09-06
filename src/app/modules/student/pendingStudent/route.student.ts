import express from 'express';
import validateRequestZod from '../../../middlewares/validateRequestZod';
import { StudentValidation } from '../validation.student';
import { PendingStudentController } from './controller.student';

const router = express.Router();
router
  .route('/')
  .get(PendingStudentController.getAllPendingStudents)
  .post(
    validateRequestZod(StudentValidation.createStudentZodSchema),
    PendingStudentController.createSinglePendingStudent
  );

router
  .route('/:id')
  .get(PendingStudentController.getSinglePendingStudent)
  .delete(PendingStudentController.deletePendingStudent)
  .patch(
    validateRequestZod(StudentValidation.updateStudentZodSchema),
    PendingStudentController.updatePendingStudent
  );
// router.route('/:id').patch( validateRequestZod(StudentValidation.updateStudentZodSchema),
// StudentController.updateStudent);
router
  .route('/approved-student-adminssion/:id')
  .patch(
    validateRequestZod(StudentValidation.updateApprovedAdmition),
    PendingStudentController.approvedPendingStudentAdminssion
  );

export const PendingStudentRoutes = router;
