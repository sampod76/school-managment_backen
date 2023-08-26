"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newExpenseController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const newExpense_service_1 = require("./newExpense.service");
const createNewExpense = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const expense = req.body;
    const result = yield newExpense_service_1.NewExpenseService.createNewExpenseFromDb(expense);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense created successfully!',
        data: result,
    });
}));
const getAllNewExpense = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newExpense_service_1.NewExpenseService.getAllNewExpensesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense retrieved successfully',
        data: result,
    });
}));
const getDailyExpense = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newExpense_service_1.NewExpenseService.getDailyExpensesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense retrieved successfully',
        data: result,
    });
}));
const getWeeklyExpense = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newExpense_service_1.NewExpenseService.getWeeklyExpensesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense retrieved successfully',
        data: result,
    });
}));
const getMonthlyExpense = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newExpense_service_1.NewExpenseService.getMonthlyExpensesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense retrieved successfully',
        data: result,
    });
}));
const getYearlyExpense = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newExpense_service_1.NewExpenseService.getYearlyExpensesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense retrieved successfully',
        data: result,
    });
}));
const getSingleNewExpense = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield newExpense_service_1.NewExpenseService.getSingleNewExpenseFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense retrieved successfully',
        data: result,
    });
}));
const updateNewExpense = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield newExpense_service_1.NewExpenseService.updateNewExpenseFromDb(id, updatedData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense updated successfully',
        data: result,
    });
}));
const deleteNewExpense = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield newExpense_service_1.NewExpenseService.deleteNewExpenseFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense deleted successfully',
        data: result,
    });
}));
exports.newExpenseController = {
    createNewExpense,
    getDailyExpense,
    getWeeklyExpense,
    getMonthlyExpense,
    getYearlyExpense,
    getAllNewExpense,
    getSingleNewExpense,
    updateNewExpense,
    deleteNewExpense,
};
