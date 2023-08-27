import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { teacherSalaryController } from './teacherSalary.controller';
import { TeacherSalaryValidation } from './teacherSalary.validation';

const router = express.Router();

router
  .route('/')
  .get(teacherSalaryController.getAllTeacherSalary)
  .post(
    validateRequestZod(TeacherSalaryValidation.createTeacherSalaryZodSchema),
    teacherSalaryController.createTeacherSalary
  );
router.get('/:id', teacherSalaryController.getSingleTeacherSalary);
router.delete('/:id', teacherSalaryController.deleteTeacherSalaryController);
router.patch('/:id', teacherSalaryController.updateTeacherSalary);

export const TeacherSalaryRoute = router;
