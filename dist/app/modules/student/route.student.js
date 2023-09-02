"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const controller_student_1 = require("./controller.student");
const validation_student_1 = require("./validation.student");
const router = express_1.default.Router();
router
    .route('/')
    .get(controller_student_1.StudentController.getAllStudents)
    .post((0, validateRequestZod_1.default)(validation_student_1.StudentValidation.createStudentZodSchema), controller_student_1.StudentController.createSingleStudent);
router
    .route('/:id')
    .get(controller_student_1.StudentController.getSingleStudent)
    .delete(controller_student_1.StudentController.deleteStudent)
    .patch((0, validateRequestZod_1.default)(validation_student_1.StudentValidation.updateStudentZodSchema), controller_student_1.StudentController.updateStudent);
// router.route('/:id').patch( validateRequestZod(StudentValidation.updateStudentZodSchema),
// StudentController.updateStudent);
router
    .route('/approved-student-adminssion')
    .patch((0, validateRequestZod_1.default)(validation_student_1.StudentValidation.updataAdmitionsData), controller_student_1.StudentController.approvedStudentAdminssion);
exports.StudentRoutes = router;
