"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRoutineRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const classRoutine_controller_1 = require("./classRoutine.controller");
const classRoutine_validation_1 = require("./classRoutine.validation");
const router = express_1.default.Router();
router.get('/', classRoutine_controller_1.classRoutineController.getAllClassRoutine);
router.post('/', (0, validateRequestZod_1.default)(classRoutine_validation_1.ClassRoutineValidation.createClassRoutineZodSchema), classRoutine_controller_1.classRoutineController.createClassRoutine);
router.get('/:id', classRoutine_controller_1.classRoutineController.getSingleClassRoutine);
router.delete('/:id', classRoutine_controller_1.classRoutineController.deleteClassRoutine);
router.patch('/:id', (0, validateRequestZod_1.default)(classRoutine_validation_1.ClassRoutineValidation.updateClassRoutineZodSchema), classRoutine_controller_1.classRoutineController.updateClassRoutine);
exports.ClassRoutineRoutes = router;
