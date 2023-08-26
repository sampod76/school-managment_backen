"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = exports.STATUS = void 0;
const mongoose_1 = require("mongoose");
exports.STATUS = ['active', 'inactive'];
const bookSchema = new mongoose_1.Schema({
    bookName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: exports.STATUS,
        required: true,
    },
    bookCode: {
        type: String,
        // required: true,
    },
    class: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
    },
}, {
    timestamps: true,
});
exports.BookModel = (0, mongoose_1.model)('Book', bookSchema);
