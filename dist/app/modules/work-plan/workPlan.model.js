"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkPlanModel = void 0;
const mongoose_1 = require("mongoose");
const enumType_1 = require("../../interface/enumType");
const workPlanSchema = new mongoose_1.Schema({
    work_plan_name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    duration_date: {
        type: String,
        required: true,
    },
    plan_date: {
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
exports.WorkPlanModel = (0, mongoose_1.model)('workPlan', workPlanSchema);
