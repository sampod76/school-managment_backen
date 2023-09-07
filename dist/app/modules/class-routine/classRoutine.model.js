"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRoutineModel = exports.STATUS = void 0;
const mongoose_1 = require("mongoose");
exports.STATUS = ['active', 'inactive'];
const ClassRoutineSchema = new mongoose_1.Schema({
    class: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    subject: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    teacher: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    },
}, {
    timestamps: true,
});
exports.ClassRoutineModel = (0, mongoose_1.model)('ClassRoutine', ClassRoutineSchema);
