import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { TeachersAttendanceController } from './controller.teachers_attendance';
import { TeachersAttendanceValidation } from './validation.teachers_attendance';

const router = express.Router();
router
  .route('/')
  .get(TeachersAttendanceController.getAllTeachersAttendances)
  .post(
    validateRequestZod(
      TeachersAttendanceValidation.createTeachersAttendanceZodSchema
    ),
    TeachersAttendanceController.createSingleTeachersAttendance
  );

router
  .route('/:id')
  .get(TeachersAttendanceController.getSingleTeachersAttendance)
  .delete(TeachersAttendanceController.deleteTeachersAttendance)
  .patch(
    validateRequestZod(
      TeachersAttendanceValidation.updateTeachersAttendanceZodSchema
    ),
    TeachersAttendanceController.updateTeachersAttendance
  );

export const TeachersAttendanceRoutes = router;
