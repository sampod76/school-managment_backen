import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { eventsController } from './event.controller';
import { EventsValidation } from './event.validation';


const router = express.Router();

router
  .route('/')
  .get(eventsController.getAllEventController)
  .post(
    validateRequestZod(EventsValidation.createEventZodSchema),
   eventsController.createEvent
  );

  router.get('/upcoming_event',eventsController.getUpcomingEventsController)

  router.get(
    '/:id',
    eventsController.getSingleEvent
  ); 
 router.delete(
    '/:id',
    eventsController.deleteEventController
  ); 

 router.patch(
    '/:id',
    validateRequestZod(EventsValidation.updateEventZodSchema),
    eventsController.UpdateEvents
  ); 


export const EventsRoute = router;
