"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const class_controller_1 = require("./class.controller");
const class_validation_1 = require("./class.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(class_controller_1.classController.getAllClasses)
    .post((0, validateRequestZod_1.default)(class_validation_1.ClassValidation.createClassZodSchema), class_controller_1.classController.createClass);
router.route(':/id').get(class_controller_1.classController.getSingleClass);
router.delete('/:id', class_controller_1.classController.deleteClass);
router.patch('/:id', (0, validateRequestZod_1.default)(class_validation_1.ClassValidation.updateClassZodSchema), class_controller_1.classController.updateClass);
exports.ClassRoutes = router;
