"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkPlanRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const workPlan_controller_1 = require("./workPlan.controller");
const workPlan_validation_1 = require("./workPlan.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(workPlan_controller_1.workPlanController.getAllWorkPlanController)
    .post((0, validateRequestZod_1.default)(workPlan_validation_1.WorkPlanValidation.createWorkPlanZodSchema), workPlan_controller_1.workPlanController.createWorkPlan);
router.get('/todaysWorkPlan', workPlan_controller_1.workPlanController.getTodaysWorkPlanController);
router.get('/:id', workPlan_controller_1.workPlanController.getSingleWorkPlan);
router.delete('/:id', workPlan_controller_1.workPlanController.deleteWorkPlanController);
router.patch('/:id', (0, validateRequestZod_1.default)(workPlan_validation_1.WorkPlanValidation.updateWorkPlanZodSchema), workPlan_controller_1.workPlanController.UpdateWorkPlan);
exports.WorkPlanRoute = router;
