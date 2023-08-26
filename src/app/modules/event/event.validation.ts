import { z } from 'zod';

const createEventZodSchema = z.object({
  body: z.object({
    event_name: z.string({
      required_error: 'Event Name is required',
    }),
    event_details: z.string({
      required_error: 'Event Details is required',
    }),
  
    event_date: z.string({
      required_error: 'Event Date is required',
    }),
    status: z.enum(['active', 'inactive'], {
      required_error: 'Status is required',
    }),
  }),
});

const updateEventZodSchema = z.object({
  body: z.object({
    event_name: z.string().optional(),
    
    event_details: z.string().optional(),
    event_date: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional(),
  }),
});

export const EventsValidation = {
    createEventZodSchema,
    updateEventZodSchema,
};