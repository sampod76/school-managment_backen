import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { teacherSalaryController } from './teacherSalary.controller';
import { TeacherSalaryValidation } from './teacherSalary.validation';



const router = express.Router();



router
  .route('/')
//   .get(teacherSalaryController.createTeacherSalary)
  .post(
    validateRequestZod(TeacherSalaryValidation.createTeacherSalaryZodSchema),
   teacherSalaryController.createTeacherSalary
  );

// router
//   .route(':/id')
//   .get(classController.getSingleClass)
//   .patch(
//     validateRequestZod(ClassValidation.updateClassZodSchema),
//     classController.updateClass
//   )
//   .delete(classController.deleteClass);

export const TeacherSalaryRoute = router;
