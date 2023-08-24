"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
// router.get('/:id', authMiddleware(ENUM_USER_ROLE.ADMIN), userController.getSingleUser);
router.get('/', /* auth(ENUM_USER_ROLE.ADMIN), */ user_controller_1.userController.getAllUsers);
router.post('/create-user', (0, validateRequestZod_1.default)(user_validation_1.UserValidation.createUserZodSchema), user_controller_1.userController.createUser);
// router.patch(
//   '/:id',
//   validateRequest(UserValidation.updateUserZodSchema),
//   auth(ENUM_USER_ROLE.ADMIN),
//   userController.updateUser
// );
// router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), userController.deleteUser);
exports.UserRoutes = router;
