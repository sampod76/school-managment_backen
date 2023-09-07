"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const controller_teacher_1 = require("./controller.teacher");
const validation_teacher_1 = require("./validation.teacher");
const router = express_1.default.Router();
router
    .route('/')
    .get(controller_teacher_1.TeacherController.getAllTeachers)
    .post((0, validateRequestZod_1.default)(validation_teacher_1.TeacherValidation.createTeacherZodSchema), controller_teacher_1.TeacherController.createSingleTeacher);
router
    .route('/:id')
    .get(controller_teacher_1.TeacherController.getSingleTeacher)
    .delete(controller_teacher_1.TeacherController.deleteTeacher)
    .patch((0, validateRequestZod_1.default)(validation_teacher_1.TeacherValidation.updateTeacherZodSchema), controller_teacher_1.TeacherController.updateTeacher);
router
    .route('/approved-Teacher-adminssion')
    .patch((0, validateRequestZod_1.default)(validation_teacher_1.TeacherValidation.updateApprovedAdmition), controller_teacher_1.TeacherController.approvedTeacherAdminssion);
exports.TeacherRoutes = router;
