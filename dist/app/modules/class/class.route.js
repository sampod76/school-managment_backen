"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const class_controller_1 = require("./class.controller");
const class_validation_1 = require("./class.validation");
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
const router = express_1.default.Router();
// router.get('/:id', authMiddleware(ENUM_USER_ROLE.ADMIN), userController.getSingleUser);
// router.get('/', auth(ENUM_USER_ROLE.ADMIN), userController.getAllUsers);
router.post('/create-class', (0, validateRequestZod_1.default)(class_validation_1.ClassValidation.createClassZodSchema), class_controller_1.classController.createClass);
// router.patch(
//   '/:id',
//   validateRequest(UserValidation.updateUserZodSchema),
//   auth(ENUM_USER_ROLE.ADMIN),
//   userController.updateUser
// );
// router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), userController.deleteUser);
exports.ClassRoutes = router;
