import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';

import { onlineAssignmentController } from './onlineAssignment.controller';
import { OnlineExamValidation } from './onlineAssignment.validation';

const router = express.Router();

router
  .route('/')
  .get(onlineAssignmentController.getAllOnlineAssignment)
  .post(
    validateRequestZod(OnlineExamValidation.createOnlineAssignmentZodSchema),
    onlineAssignmentController.createOnlineAssignment
  );

router.get('/:id', onlineAssignmentController.getSingleOnlineAssignment);
router.delete('/:id', onlineAssignmentController.deleteOnlineAssignment);

router.patch(
  '/:id',
  validateRequestZod(OnlineExamValidation.updateOnlineAssignmentZodSchema),
  onlineAssignmentController.updateSingleOnlineAssignment
);

export const OnlineAssignmentRoutes = router;
