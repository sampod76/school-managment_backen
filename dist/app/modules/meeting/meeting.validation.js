"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingValidation = void 0;
const zod_1 = require("zod");
const createMeetingZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        meeting_subject: zod_1.z.string({
            required_error: 'Meeting subject is required',
        }),
        meeting_place: zod_1.z.string({
            required_error: 'Meeting place is required',
        }),
        meeting_date: zod_1.z.string({
            required_error: 'Meeting date is required',
        }),
        details: zod_1.z.string({
            required_error: 'Meeting text is required',
        }),
        participants: zod_1.z.array(zod_1.z.string().refine(value => value.length > 0, {
            message: 'At least one participant is required', // Custom error message for participants
        })),
    }),
});
const updateMeetingZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
        subject: zod_1.z.string().optional(),
        participant: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.MeetingValidation = {
    createMeetingZodSchema,
    updateMeetingZodSchema,
};
