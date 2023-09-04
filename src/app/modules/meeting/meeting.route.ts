import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { meetingController } from './meeting.controller';
import { MeetingValidation } from './meeting.validation';

const router = express.Router();
router.get('/', meetingController.getAllMeeting);

router.post(
  '/create-meeting',
  validateRequestZod(MeetingValidation.createMeetingZodSchema),
  meetingController.createMeeting
);

router.get('/:id', meetingController.getSingleMeeting);

router.patch(
  '/:id',
  validateRequestZod(MeetingValidation.updateMeetingZodSchema),
  meetingController.updateMeeting
);
router.delete('/:id', meetingController.deleteMeeting);

export const MeetingRoutes = router;
