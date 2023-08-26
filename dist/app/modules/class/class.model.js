"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassModel = void 0;
const mongoose_1 = require("mongoose");
const book_model_1 = require("../book/book.model");
const classSchema = new mongoose_1.Schema({
    className: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: book_model_1.STATUS,
        required: true,
    },
}, {
    timestamps: true,
});
exports.ClassModel = (0, mongoose_1.model)('Class', classSchema);
