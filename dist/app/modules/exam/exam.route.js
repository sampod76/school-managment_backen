"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const exam_controller_1 = require("./exam.controller");
const exam_validation_1 = require("./exam.validation");
const router = express_1.default.Router();
router;
router.get('/', exam_controller_1.examController.getAllExams);
router.post('/', (0, validateRequestZod_1.default)(exam_validation_1.ExamInformationValidation.createExamInformationZodSchema), exam_controller_1.examController.createExam);
router.get('/:id', exam_controller_1.examController.getSingleExam);
router.delete('/:id', exam_controller_1.examController.deleteExam);
router.patch('/:id', (0, validateRequestZod_1.default)(exam_validation_1.ExamInformationValidation.updateExamInformationZodSchema), exam_controller_1.examController.updateExam);
exports.ExamRoutes = router;
