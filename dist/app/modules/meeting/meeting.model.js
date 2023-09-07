"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingModel = void 0;
const mongoose_1 = require("mongoose");
const meetingSchema = new mongoose_1.Schema({
    meeting_subject: { type: String, required: true },
    meeting_place: { type: String, required: true },
    meeting_date: { type: String, required: true },
    details: { type: String, required: true },
    participants: [{ type: String, trim: true }],
});
exports.MeetingModel = (0, mongoose_1.model)('Meeting', meetingSchema);
