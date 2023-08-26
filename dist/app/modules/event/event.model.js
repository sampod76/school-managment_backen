"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
const mongoose_1 = require("mongoose");
const enumType_1 = require("../../interface/enumType");
const EventSchema = new mongoose_1.Schema({
    event_name: {
        type: String,
        required: true,
    },
    event_details: {
        type: String,
        required: true,
    },
    event_date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: enumType_1.STATUS,
        required: true,
    },
}, {
    timestamps: true,
});
exports.EventModel = (0, mongoose_1.model)('events', EventSchema);
