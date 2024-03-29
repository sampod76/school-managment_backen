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
exports.NewExpenseService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const newExpense_model_1 = require("./newExpense.model");
const createNewExpenseFromDb = (ExpenseData) => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    ExpenseData.date = formattedDate;
    const createdCLass = newExpense_model_1.ExpenseModel.create(ExpenseData);
    if (!createdCLass) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'নতুন ব্যায় তৈরি করা ব্যর্থ হয়েছে');
    }
    return createdCLass;
});
const getExpensesTimeRangeFromDb = (timeRange) => __awaiter(void 0, void 0, void 0, function* () {
    function addLeadingZero(number) {
        if (number < 10) {
            return number.toString().padStart(2, '0');
        }
        else {
            return number.toString();
        }
    }
    let allExpense;
    const currentYear = new Date().getFullYear();
    const presentMonth = new Date().getMonth() + 1;
    const currentMonth = addLeadingZero(presentMonth);
    const date = new Date().getDate();
    const currentDate = addLeadingZero(date);
    const currentDateWithMonthYear = `${currentYear}-${currentMonth}-${currentDate}`;
    const currentDay = new Date().getDay() + 1;
    if (timeRange === 'yearly') {
        allExpense = yield newExpense_model_1.ExpenseModel.find({
            date: { $lte: `${currentYear}-12-31`, $gte: `${currentYear}-01-01` },
        }).sort({ _id: -1 });
    }
    else if (timeRange === 'monthly') {
        allExpense = yield newExpense_model_1.ExpenseModel.find({
            date: {
                $lte: `${currentYear}-${currentMonth}-31`,
                $gte: `${currentYear}-${currentMonth}-01`,
            },
        }).sort({ _id: -1 });
    }
    else if (timeRange === 'weekly') {
        let subDate;
        if (date > currentDay) {
            subDate = date - currentDay;
        }
        else {
            if (date > currentDay) {
                subDate = date - currentDay;
            }
            else {
                subDate = date - date + 1;
            }
        }
        subDate = addLeadingZero(subDate);
        allExpense = yield newExpense_model_1.ExpenseModel.find({
            date: {
                $lte: `${currentYear}-${currentMonth}-${currentDate}`,
                $gte: `${currentYear}-${currentMonth}-${subDate}`,
            },
        }).sort({ _id: -1 });
    }
    else if (timeRange === 'daily') {
        allExpense = yield newExpense_model_1.ExpenseModel.find({
            date: currentDateWithMonthYear,
        }).sort({ _id: -1 });
    }
    if (!allExpense) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'ব্যয়ের তালিকা খুঁজে পেতে ব্যর্থ হয়েছে');
    }
    return allExpense;
});
const getAllNewExpensesFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    // const allBooks = await ExpenseModel.find({}).sort({ createdAt: -1 });
    const allExpense = yield newExpense_model_1.ExpenseModel.find({}).sort({ _id: -1 });
    if (!allExpense) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'ব্যয়ের তালিকা খুঁজে পেতে ব্যর্থ হয়েছে');
    }
    return allExpense;
});
const getSingleNewExpenseFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newExpense_model_1.ExpenseModel.findOne({ _id: id });
    return result;
});
const updateNewExpenseFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield newExpense_model_1.ExpenseModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'ব্যয়ের তালিকা আপডেট করা ব্যর্থ হয়েছে!');
    }
    return result;
});
const deleteNewExpenseFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield newExpense_model_1.ExpenseModel.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'ব্যয়ের তালিকা খুঁজে পেতে ব্যর্থ হয়েছে!');
    }
    const books = yield newExpense_model_1.ExpenseModel.findOneAndDelete({ _id: id });
    if (!books) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'ব্যয় রিমুভ করা ব্যর্থ হয়েছে');
    }
    return books;
});
exports.NewExpenseService = {
    createNewExpenseFromDb,
    getExpensesTimeRangeFromDb,
    getAllNewExpensesFromDb,
    getSingleNewExpenseFromDb,
    updateNewExpenseFromDb,
    deleteNewExpenseFromDb,
};
