"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachersAttendanceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const controller_teachers_attendance_1 = require("./controller.teachers_attendance");
const validation_teachers_attendance_1 = require("./validation.teachers_attendance");
const router = express_1.default.Router();
router
    .route('/')
    .get(controller_teachers_attendance_1.TeachersAttendanceController.getAllTeachersAttendances)
    .post((0, validateRequestZod_1.default)(validation_teachers_attendance_1.TeachersAttendanceValidation.createTeachersAttendanceZodSchema), controller_teachers_attendance_1.TeachersAttendanceController.createSingleTeachersAttendance);
router
    .route('/:id')
    .get(controller_teachers_attendance_1.TeachersAttendanceController.getSingleTeachersAttendance)
    .delete(controller_teachers_attendance_1.TeachersAttendanceController.deleteTeachersAttendance)
    .patch((0, validateRequestZod_1.default)(validation_teachers_attendance_1.TeachersAttendanceValidation.updateTeachersAttendanceZodSchema), controller_teachers_attendance_1.TeachersAttendanceController.updateTeachersAttendance);
exports.TeachersAttendanceRoutes = router;
