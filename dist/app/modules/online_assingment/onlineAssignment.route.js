"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineAssignmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const onlineAssignment_controller_1 = require("./onlineAssignment.controller");
const onlineAssignment_validation_1 = require("./onlineAssignment.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(onlineAssignment_controller_1.onlineAssignmentController.getAllOnlineAssignment)
    .post((0, validateRequestZod_1.default)(onlineAssignment_validation_1.OnlineExamValidation.createOnlineAssignmentZodSchema), onlineAssignment_controller_1.onlineAssignmentController.createOnlineAssignment);
router.get('/:id', onlineAssignment_controller_1.onlineAssignmentController.getSingleOnlineAssignment);
router.delete('/:id', onlineAssignment_controller_1.onlineAssignmentController.deleteOnlineAssignment);
router.patch('/:id', (0, validateRequestZod_1.default)(onlineAssignment_validation_1.OnlineExamValidation.updateOnlineAssignmentZodSchema), onlineAssignment_controller_1.onlineAssignmentController.updateSingleOnlineAssignment);
exports.OnlineAssignmentRoutes = router;
