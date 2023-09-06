import { z } from 'zod';

const createMeetingZodSchema = z.object({
  body: z.object({
    meeting_subject: z.string({
      required_error: 'Meeting subject is required',
    }),
    meeting_place: z.string({
      required_error: 'Meeting place is required',
    }),
    meeting_date: z.string({
      required_error: 'Meeting date is required',
    }),
    details: z.string({
      required_error: 'Meeting text is required',
    }),
    participants: z.array(
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
