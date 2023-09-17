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
exports.TeacherAttendance = exports.teachersAttendanceSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const userConstant_1 = require("../../../constant/userConstant");
const usersEnums_1 = require("../../../enums/usersEnums");
exports.teachersAttendanceSchema = new mongoose_1.Schema({
    date: {
        type: String,
        trim: true,
        required: true,
    },
    teachers: [
        {
            teacher_userId: {
                type: String,
                trim: true,
                required: true,
            },
            teacher: {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'Teacher',
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
exports.TeacherAttendance = (0, mongoose_1.model)('Teacher_attendance', exports.teachersAttendanceSchema);
