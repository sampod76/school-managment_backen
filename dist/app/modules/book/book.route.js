"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const book_controller_1 = require("./book.controller");
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(book_controller_1.bookController.getAllBooks)
    .post((0, validateRequestZod_1.default)(book_validation_1.BookValidation.createBookZodSchema), book_controller_1.bookController.createBook);
router
    .route('/:id')
    .get(book_controller_1.bookController.getSingleBook)
    .patch((0, validateRequestZod_1.default)(book_validation_1.BookValidation.updateBookZodSchema), book_controller_1.bookController.updateBook)
    .delete(book_controller_1.bookController.deleteBook);
exports.BookRoutes = router;
