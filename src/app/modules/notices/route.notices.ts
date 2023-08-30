import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { NoticeController } from './controller.notices';
import { NoticeValidation } from './validation.notices';

const router = express.Router();
router
  .route('/')
  .get(NoticeController.getAllNotices)
  .post(
    validateRequestZod(NoticeValidation.createNoticeZodSchema),
    NoticeController.createSingleNotice
  );

router
  .route('/:id')
  .get(NoticeController.getSingleNotice)
  .delete(NoticeController.deleteNotice)
  .patch(
    validateRequestZod(NoticeValidation.updateNoticeZodSchema),
    NoticeController.updateNotice
  );



export const NoticeRoutes = router;
