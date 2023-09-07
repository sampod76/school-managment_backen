"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingStudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../../middlewares/validateRequestZod"));
const validation_student_1 = require("../validation.student");
const controller_student_1 = require("./controller.student");
const router = express_1.default.Router();
router
    .route('/')
    .get(controller_student_1.PendingStudentController.getAllPendingStudents)
    .post((0, validateRequestZod_1.default)(validation_student_1.StudentValidation.createStudentZodSchema), controller_student_1.PendingStudentController.createSinglePendingStudent);
router
    .route('/:id')
    .get(controller_student_1.PendingStudentController.getSinglePendingStudent)
    .delete(controller_student_1.PendingStudentController.deletePendingStudent)
    .patch((0, validateRequestZod_1.default)(validation_student_1.StudentValidation.updateStudentZodSchema), controller_student_1.PendingStudentController.updatePendingStudent);
// router.route('/:id').patch( validateRequestZod(StudentValidation.updateStudentZodSchema),
// StudentController.updateStudent);
router
    .route('/approved-student-adminssion/:id')
    .patch((0, validateRequestZod_1.default)(validation_student_1.StudentValidation.updateApprovedAdmition), controller_student_1.PendingStudentController.approvedPendingStudentAdminssion);
exports.PendingStudentRoutes = router;
