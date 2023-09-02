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
exports.newIncomeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const newIncome_service_1 = require("./newIncome.service");
const createNewIncome = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const income = req.body;
    console.log(income, 'test');
    const result = yield newIncome_service_1.NewIncomeService.createNewIncomeFromDb(income);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Income created successfully!',
        data: result,
    });
}));
const getDailyIncome = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const timeRange = req.params.timeRange;
    console.log(timeRange);
    const result = yield newIncome_service_1.NewIncomeService.getDailyIncomeFromDb(timeRange);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Income retrieved successfully',
        data: result,
    });
}));
const getWeeklyIncome = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newIncome_service_1.NewIncomeService.getWeeklyIncomesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Income retrieved successfully',
        data: result,
    });
}));
const getMonthlyIncome = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newIncome_service_1.NewIncomeService.getMonthlyIncomesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense retrieved successfully',
        data: result,
    });
}));
const getYearlyIncome = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newIncome_service_1.NewIncomeService.getYearlyIncomesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Expense retrieved successfully',
        data: result,
    });
}));
const getAllNewIncome = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newIncome_service_1.NewIncomeService.getAllNewIncomesFromDb();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Income retrieved successfully',
        data: result,
    });
}));
const getSingleNewIncome = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield newIncome_service_1.NewIncomeService.getSingleNewIncomeFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Income retrieved successfully',
        data: result,
    });
}));
const updateNewIncome = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield newIncome_service_1.NewIncomeService.updateNewIncomeFromDb(id, updatedData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Income updated successfully',
        data: result,
    });
}));
const deleteNewIncome = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield newIncome_service_1.NewIncomeService.deleteNewIncomeFromDb(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Income deleted successfully',
        data: result,
    });
}));
exports.newIncomeController = {
    createNewIncome,
    getDailyIncome,
    getWeeklyIncome,
    getMonthlyIncome,
    getYearlyIncome,
    getAllNewIncome,
    getSingleNewIncome,
    updateNewIncome,
    deleteNewIncome,
};
