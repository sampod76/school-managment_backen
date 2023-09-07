"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamModel = exports.STATUS = void 0;
const mongoose_1 = require("mongoose");
exports.STATUS = ['active', 'inactive'];
const examSchema = new mongoose_1.Schema({
    examName: { type: String, required: true },
    className: { type: mongoose_1.Types.ObjectId, ref: 'Class' },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'] },
    subject: { type: mongoose_1.Types.ObjectId, ref: 'Book' },
    teacher: { type: mongoose_1.Types.ObjectId, ref: 'Teacher' },
}, {
    timestamps: true,
});
exports.ExamModel = (0, mongoose_1.model)('Exam', examSchema);
