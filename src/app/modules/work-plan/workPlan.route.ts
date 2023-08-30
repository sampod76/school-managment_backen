import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { workPlanController } from './workPlan.controller';
import { WorkPlanValidation } from './workPlan.validation';

const router = express.Router();

router
  .route('/')
  .get(workPlanController.getAllWorkPlanController)
  .post(
    validateRequestZod(WorkPlanValidation.createWorkPlanZodSchema),
    workPlanController.createWorkPlan
  );

router.get('/todaysWorkPlan', workPlanController.getTodaysWorkPlanController);
router.get('/:id', workPlanController.getSingleWorkPlan);
router.delete('/:id', workPlanController.deleteWorkPlanController);

router.patch(
  '/:id',
  validateRequestZod(WorkPlanValidation.updateWorkPlanZodSchema),
  workPlanController.UpdateWorkPlan
);

export const WorkPlanRoute = router;
