import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { examController } from './exam.controller';
import { ExamInformationValidation } from './exam.validation';

const router = express.Router();

router;

router.get('/', examController.getAllExams);

router.post(
  '/',
  validateRequestZod(ExamInformationValidation.createExamInformationZodSchema),
  examController.createExam
);

router.get('/:id', examController.getSingleExam);

router.delete('/:id', examController.deleteExam);
router.patch(
  '/:id',
  validateRequestZod(ExamInformationValidation.updateExamInformationZodSchema),
  examController.updateExam
);
export const ExamRoutes = router;
