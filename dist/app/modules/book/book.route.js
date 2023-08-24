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
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
const router = express_1.default.Router();
// router.get('/:id', authMiddleware(ENUM_USER_ROLE.ADMIN), userController.getSingleUser);
// router.get('/', auth(ENUM_USER_ROLE.ADMIN), userController.getAllUsers);
router.post('/create-book', (0, validateRequestZod_1.default)(book_validation_1.BookValidation.createBookZodSchema), book_controller_1.bookController.createBook);
// router.patch(
//   '/:id',
//   validateRequest(UserValidation.updateUserZodSchema),
//   auth(ENUM_USER_ROLE.ADMIN),
//   userController.updateUser
// );
// router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), userController.deleteUser);
exports.BookRoutes = router;
