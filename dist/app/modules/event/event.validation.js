"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsValidation = void 0;
const zod_1 = require("zod");
const createEventZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        event_name: zod_1.z.string({
            required_error: 'Event Name is required',
        }),
        event_details: zod_1.z.string({
            required_error: 'Event Details is required',
        }),
        event_date: zod_1.z.string({
            required_error: 'Event Date is required',
        }),
        status: zod_1.z.enum(['active', 'inactive'], {
            required_error: 'Status is required',
        }),
    }),
});
const updateEventZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        event_name: zod_1.z.string().optional(),
        event_details: zod_1.z.string().optional(),
        event_date: zod_1.z.string().optional(),
        status: zod_1.z.enum(['active', 'inactive']).optional(),
    }),
});
exports.EventsValidation = {
    createEventZodSchema,
    updateEventZodSchema,
};
