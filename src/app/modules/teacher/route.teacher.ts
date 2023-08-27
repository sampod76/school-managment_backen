import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { TeacherController } from './controller.teacher';
import { TeacherValidation } from './validation.teacher';

const router = express.Router();
router
  .route('/')
  .get(TeacherController.getAllTeachers)
  .post(
    validateRequestZod(TeacherValidation.createTeacherZodSchema),
    TeacherController.createSingleTeacher
  );

router
  .route('/:id')
  .get(TeacherController.getSingleTeacher)
  .delete(TeacherController.deleteTeacher)
  .patch(
    validateRequestZod(TeacherValidation.updateTeacherZodSchema),
    TeacherController.updateTeacher
  );

router
  .route('/approved-Teacher-adminssion')
  .patch(
    validateRequestZod(TeacherValidation.updataAdmitionsData),
    TeacherController.approvedTeacherAdminssion
  );

export const TeacherRoutes = router;
