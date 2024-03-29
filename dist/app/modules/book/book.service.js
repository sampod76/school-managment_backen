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
exports.BookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const book_model_1 = require("./book.model");
const createBookFromDb = (BookData) => __awaiter(void 0, void 0, void 0, function* () {
    const createdCLass = yield book_model_1.BookModel.create(BookData);
    if (!createdCLass) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to create Book');
    }
    return createdCLass;
});
const getAllBooksFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBooks = yield book_model_1.BookModel.find({}).populate('class');
    if (!allBooks) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'কোন বই পাওয়া যায়নি');
    }
    return allBooks;
});
const getAllUniqueBooksFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUniqueBooks = yield book_model_1.BookModel.aggregate([
        { $match: {} },
        {
            $group: {
                _id: null,
                uniqueBook: { $addToSet: '$bookName' },
            },
        },
        {
            $unwind: "$uniqueBook"
        },
        { $project: { _id: 0 } },
    ]);
    if (!allUniqueBooks) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'কোন বই পাওয়া যায়নি');
    }
    return allUniqueBooks;
});
const getSingleBookFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.findOne({ _id: id });
    return result;
});
const updateBookFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.BookModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'কোন বই পাওয়া যায়নি!');
    }
    return result;
});
const deleteBookFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield book_model_1.BookModel.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'কোন বই পাওয়া যায়নি!');
    }
    const books = yield book_model_1.BookModel.findOneAndDelete({ _id: id });
    if (!books) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'বইটি মুছে ফেলতে ব্যর্থ হয়েছে');
    }
    return books;
});
exports.BookService = {
    createBookFromDb,
    getAllBooksFromDb,
    getSingleBookFromDb,
    updateBookFromDb,
    deleteBookFromDb,
    getAllUniqueBooksFromDb,
};
