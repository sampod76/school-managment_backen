"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = exports.noticeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.noticeSchema = new mongoose_1.Schema({
    title: { type: String, trim: true },
    notice_date: Date,
    publishe_date: Date,
    document: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'FileUploade',
    },
    message: { type: String }, // Typo: 'body' should be
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Notice = (0, mongoose_1.model)('Notice', exports.noticeSchema);
