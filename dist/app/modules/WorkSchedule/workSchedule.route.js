"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkScheduleRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const workSchedule_controller_1 = require("./workSchedule.controller");
const workSchedule_validation_1 = require("./workSchedule.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(workSchedule_controller_1.workScheduleController.getAllWorkScheduleController)
    .post((0, validateRequestZod_1.default)(workSchedule_validation_1.WorkScheduleValidation.createWorkScheduleZodSchema), workSchedule_controller_1.workScheduleController.createWorkSchedule);
router.get('/todaysWork', workSchedule_controller_1.workScheduleController.getTodaysWorkController);
router.get('/:id', workSchedule_controller_1.workScheduleController.getSingleWork);
router.delete('/:id', workSchedule_controller_1.workScheduleController.deleteWorkScheduleController);
router.patch('/:id', (0, validateRequestZod_1.default)(workSchedule_validation_1.WorkScheduleValidation.updateWorkScheduleZodSchema), workSchedule_controller_1.workScheduleController.UpdateWorkSchedule);
exports.WorkScheduleRoute = router;
