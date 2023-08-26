import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { workScheduleController } from './workSchedule.controller';
import { WorkScheduleValidation } from './workSchedule.validation';

const router = express.Router();

router
  .route('/')
  .get(workScheduleController.getAllWorkScheduleController)
  .post(
    validateRequestZod(WorkScheduleValidation.createWorkScheduleZodSchema),
   workScheduleController.createWorkSchedule
  );

  router.get('/todaysWork',workScheduleController.getTodaysWorkController)
  router.get(
    '/:id',
 workScheduleController.getSingleWork
  ); 
 router.delete(
    '/:id',
 workScheduleController.deleteWorkScheduleController
  ); 

 router.patch(
    '/:id',
    validateRequestZod(WorkScheduleValidation.updateWorkScheduleZodSchema),
   workScheduleController.UpdateWorkSchedule
  ); 


export const WorkScheduleRoute = router;
