"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const newExpense_controller_1 = require("./newExpense.controller");
const newExpense_validation_1 = require("./newExpense.validation");
const router = express_1.default.Router();
router.get('/:timeRange', newExpense_controller_1.newExpenseController.getExpenseTimeRange);
router.get('/:id', newExpense_controller_1.newExpenseController.getSingleNewExpense);
router.get('/', newExpense_controller_1.newExpenseController.getAllNewExpense);
router.post('/create-expense', (0, validateRequestZod_1.default)(newExpense_validation_1.NewExpenseValidation.createNewExpenseZodSchema), newExpense_controller_1.newExpenseController.createNewExpense);
router.patch('/:id', (0, validateRequestZod_1.default)(newExpense_validation_1.NewExpenseValidation.updateNewExpenseZodSchema), newExpense_controller_1.newExpenseController.updateNewExpense);
router.delete('/:id', newExpense_controller_1.newExpenseController.deleteNewExpense);
exports.ExpenseRoutes = router;
