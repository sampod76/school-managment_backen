"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAttendance = exports.studentAttendanceSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const userConstant_1 = require("../../../constant/userConstant");
const usersEnums_1 = require("../../../enums/usersEnums");
exports.studentAttendanceSchema = new mongoose_1.Schema({
    classInfo: {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        class: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Class",
        },
    },
    section: {
        name: {
            type: String,
            trim: true, // Trim whitespace from the beginning and end of the string
        },
        section: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            trim: true,
            ref: 'Section',
        },
    },
    date: {
        type: String,
        trim: true,
        required: true,
    },
    students: [
        {
            student_userId: {
                type: String,
                trim: true,
                required: true,
            },
            student: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'Student',
                required: true,
            },
            attendance: {
                type: String,
                enum: userConstant_1.YN_VALUES,
                default: usersEnums_1.ENUM_YN.YES,
                // required: true,
            },
        },
    ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.StudentAttendance = (0, mongoose_1.model)('Student_attendance', exports.studentAttendanceSchema);
