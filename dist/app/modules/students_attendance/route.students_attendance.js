"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsAttendanceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const controller_students_attendance_1 = require("./controller.students_attendance");
const validation_students_attendance_1 = require("./validation.students_attendance");
const router = express_1.default.Router();
router
    .route('/')
    .get(controller_students_attendance_1.StudentsAttendanceController.getAllStudentsAttendances)
    .post((0, validateRequestZod_1.default)(validation_students_attendance_1.StudentsAttendanceValidation.createStudentsAttendanceZodSchema), controller_students_attendance_1.StudentsAttendanceController.createSingleStudentsAttendance);
router
    .route('/:id')
    .get(controller_students_attendance_1.StudentsAttendanceController.getSingleStudentsAttendance)
    .delete(controller_students_attendance_1.StudentsAttendanceController.deleteStudentsAttendance)
    .patch((0, validateRequestZod_1.default)(validation_students_attendance_1.StudentsAttendanceValidation.updateStudentsAttendanceZodSchema), controller_students_attendance_1.StudentsAttendanceController.updateStudentsAttendance);
exports.StudentsAttendanceRoutes = router;
