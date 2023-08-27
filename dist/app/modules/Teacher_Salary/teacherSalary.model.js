"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherSalaryModel = void 0;
const mongoose_1 = require("mongoose");
const enumType_1 = require("../../interface/enumType");
const teacherSalarySchema = new mongoose_1.Schema({
    teacher_name: {
        type: String,
        required: true,
    },
    teacher_designation: {
        type: String,
        required: true,
    },
    teacher_salary_scale: {
        type: String,
        enum: ['A', 'B'],
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    //Reeference of Teacher Id
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    status: {
        type: String,
        enum: enumType_1.STATUS,
        required: true,
    },
}, {
    timestamps: true,
});
exports.TeacherSalaryModel = (0, mongoose_1.model)('Teacher_Salary', teacherSalarySchema);
