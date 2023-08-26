"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherSalaryRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const teacherSalary_controller_1 = require("./teacherSalary.controller");
const teacherSalary_validation_1 = require("./teacherSalary.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(teacherSalary_controller_1.teacherSalaryController.getAllTeacherSalary)
    .post((0, validateRequestZod_1.default)(teacherSalary_validation_1.TeacherSalaryValidation.createTeacherSalaryZodSchema), teacherSalary_controller_1.teacherSalaryController.createTeacherSalary);
router.delete('/:id', teacherSalary_controller_1.teacherSalaryController.deleteTeacherSalaryController);
router.patch('/:id', teacherSalary_controller_1.teacherSalaryController.updateTeacherSalary);
exports.TeacherSalaryRoute = router;
