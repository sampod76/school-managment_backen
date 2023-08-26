"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleModel = void 0;
const mongoose_1 = require("mongoose");
const enumType_1 = require("../../interface/enumType");
const workScheduleSchema = new mongoose_1.Schema({
    work_name: {
        type: String,
        required: true,
    },
    work_details: {
        type: String,
        required: true,
    },
    work_for: {
        type: String,
        required: true,
    },
    assign_date: {
        type: String,
        required: true,
    },
    complete_date: {
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
exports.WorkScheduleModel = (0, mongoose_1.model)('workSchedule', workScheduleSchema);
