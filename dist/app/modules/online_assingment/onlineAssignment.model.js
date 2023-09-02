"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineAssignmentModel = void 0;
const mongoose_1 = require("mongoose");
const book_model_1 = require("../book/book.model");
const onlineAssignmentScheema = new mongoose_1.Schema({
    dateFrom: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    roomNo: {
        type: String,
        required: true,
    },
    markMin: {
        type: String,
        required: true,
    },
    markMax: {
        type: String,
        required: true,
    },
    exam: {
        type: String,
        required: true,
    },
    quiz: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    attempts: {
        type: String,
        required: true,
    },
    examFrom: {
        type: String,
        required: true,
    },
    examTo: {
        type: String,
        required: true,
    },
    examPublished: {
        type: Boolean,
        required: true,
    },
    resultPublished: {
        type: Boolean,
        required: true,
    },
    status: {
        type: String,
        enum: book_model_1.STATUS,
        required: true,
    },
    description: String,
    subject: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
});
exports.OnlineAssignmentModel = (0, mongoose_1.model)('OnlineAssignment', onlineAssignmentScheema);
