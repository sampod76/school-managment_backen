import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { StudentsAttendanceController } from './controller.students_attendance';
import { StudentsAttendanceValidation } from './validation.students_attendance';

const router = express.Router();
router
  .route('/')
  .get(StudentsAttendanceController.getAllStudentsAttendances)
  .post(
    validateRequestZod(
      StudentsAttendanceValidation.createStudentsAttendanceZodSchema
    ),
    StudentsAttendanceController.createSingleStudentsAttendance
  );

router
  .route('/:id')
  .get(StudentsAttendanceController.getSingleStudentsAttendance)
  .delete(StudentsAttendanceController.deleteStudentsAttendance)
  .patch(
    validateRequestZod(
      StudentsAttendanceValidation.updateStudentsAttendanceZodSchema
    ),
    StudentsAttendanceController.updateStudentsAttendance
  );

export const StudentsAttendanceRoutes = router;
