import { z } from 'zod';

const createMeetingZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Meeting Name is required',
    }),
    date: z.string({
      required_error: 'Date is required',
    }),
    subject: z.string({
      required_error: 'Meeting number is required',
    }),
    participant: z.array(
      z.string().refine(value => value.length > 0, {
        message: 'At least one participant is required', // Custom error message for participants
      })
    ),
  }),
});

const updateMeetingZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    date: z.string().optional(),
    subject: z.string().optional(),
    participant: z.array(z.string()).optional(),
  }),
});

export const MeetingValidation = {
  createMeetingZodSchema,
  updateMeetingZodSchema,
};
