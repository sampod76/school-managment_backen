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
exports.NewIncomeService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const newIncome_model_1 = require("./newIncome.model");
const createNewIncomeFromDb = (BookData) => __awaiter(void 0, void 0, void 0, function* () {
    const createdCLass = newIncome_model_1.IncomeModel.create(BookData);
    if (!createdCLass) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to create Income');
    }
    return createdCLass;
});
const getDailyIncomeFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const AllIncomes = yield newIncome_model_1.IncomeModel.find({
        date: { $eq: formattedDate },
    }).exec();
    //   const totalAmount = AllIncomes.reduce((total, el) => {
    //     if (el.amount) {
    //       const amount = parseFloat(el.amount);
    //       if (!isNaN(amount)) {
    //         return total + amount;
    //       }
    //     }
    //     return total;
    //   }, 0);
    //   console.log('Total Amount:', totalAmount); // This will give you the sum of amounts
    if (!AllIncomes) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to get all Incomes');
    }
    return AllIncomes;
});
const getWeeklyIncomesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const allExpense = yield newIncome_model_1.IncomeModel.find({
        date: { $eq: formattedDate },
    }).exec();
    //   const totalAmount = allExpense.reduce((total, el) => {
    //     if (el.amount) {
    //       const amount = parseFloat(el.amount);
    //       if (!isNaN(amount)) {
    //         return total + amount;
    //       }
    //     }
    //     return total;
    //   }, 0);
    //   console.log('Total Amount:', totalAmount); // This will give you the sum of amounts
    if (!allExpense) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to get all Expenses');
    }
    return allExpense;
});
const getMonthlyIncomesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const allExpense = yield newIncome_model_1.IncomeModel.find({
        date: { $eq: formattedDate },
    }).exec();
    //   const totalAmount = allExpense.reduce((total, el) => {
    //     if (el.amount) {
    //       const amount = parseFloat(el.amount);
    //       if (!isNaN(amount)) {
    //         return total + amount;
    //       }
    //     }
    //     return total;
    //   }, 0);
    //   console.log('Total Amount:', totalAmount); // This will give you the sum of amounts
    if (!allExpense) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to get all Expenses');
    }
    return allExpense;
});
const getYearlyIncomesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const allExpense = yield newIncome_model_1.IncomeModel.find({
        date: { $eq: formattedDate },
    }).exec();
    //   const totalAmount = allExpense.reduce((total, el) => {
    //     if (el.amount) {
    //       const amount = parseFloat(el.amount);
    //       if (!isNaN(amount)) {
    //         return total + amount;
    //       }
    //     }
    //     return total;
    //   }, 0);
    //   console.log('Total Amount:', totalAmount); // This will give you the sum of amounts
    if (!allExpense) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to get all Expenses');
    }
    return allExpense;
});
const getAllNewIncomesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBooks = newIncome_model_1.IncomeModel.find({});
    if (!allBooks) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to get all Incomes');
    }
    return allBooks;
});
const getSingleNewIncomeFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newIncome_model_1.IncomeModel.findOne({ _id: id });
    return result;
});
const updateNewIncomeFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newIncome_model_1.IncomeModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Income not found!');
    }
    return result;
});
const deleteNewIncomeFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield newIncome_model_1.IncomeModel.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Income not found!');
    }
    const books = yield newIncome_model_1.IncomeModel.findOneAndDelete({ _id: id });
    if (!books) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Failed to delete Income');
    }
    return books;
});
exports.NewIncomeService = {
    createNewIncomeFromDb,
    getDailyIncomeFromDb,
    getWeeklyIncomesFromDb,
    getMonthlyIncomesFromDb,
    getYearlyIncomesFromDb,
    getAllNewIncomesFromDb,
    getSingleNewIncomeFromDb,
    updateNewIncomeFromDb,
    deleteNewIncomeFromDb,
};