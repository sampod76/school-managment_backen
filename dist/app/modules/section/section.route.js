"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const section_controller_1 = require("./section.controller");
const section_validation_1 = require("./section.validation");
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
const router = express_1.default.Router();
// router.get('/:id', authMiddleware(ENUM_USER_ROLE.ADMIN), userController.getSingleUser);
// router.get('/', auth(ENUM_USER_ROLE.ADMIN), userController.getAllUsers);
router.post('/create-section', (0, validateRequestZod_1.default)(section_validation_1.SectionValidation.createSectionZodSchema), section_controller_1.sectionController.createSection);
// router.patch(
//   '/:id',
//   validateRequest(UserValidation.updateUserZodSchema),
//   auth(ENUM_USER_ROLE.ADMIN),
//   userController.updateUser
// );
// router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), userController.deleteUser);
exports.SectionRoutes = router;
