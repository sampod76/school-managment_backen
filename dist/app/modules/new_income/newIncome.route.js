"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const newIncome_controller_1 = require("./newIncome.controller");
const newIncome_validation_1 = require("./newIncome.validation");
const router = express_1.default.Router();
// router.get('/daily', newIncomeController.getDailyIncome);
router.get('/:timeRange', newIncome_controller_1.newIncomeController.getIncomeTimeRange);
router.get('/:id', newIncome_controller_1.newIncomeController.getSingleNewIncome);
router.get('/', newIncome_controller_1.newIncomeController.getAllNewIncome);
router.post('/create-income', (0, validateRequestZod_1.default)(newIncome_validation_1.NewIncomeValidation.createNewIncomeZodSchema), newIncome_controller_1.newIncomeController.createNewIncome);
router.patch('/:id', (0, validateRequestZod_1.default)(newIncome_validation_1.NewIncomeValidation.updateNewIncomeZodSchema), newIncome_controller_1.newIncomeController.updateNewIncome);
router.delete('/:id', newIncome_controller_1.newIncomeController.deleteNewIncome);
exports.EarningRoutes = router;
