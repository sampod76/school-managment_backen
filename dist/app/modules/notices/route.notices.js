"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const controller_notices_1 = require("./controller.notices");
const validation_notices_1 = require("./validation.notices");
const router = express_1.default.Router();
router
    .route('/')
    .get(controller_notices_1.NoticeController.getAllNotices)
    .post((0, validateRequestZod_1.default)(validation_notices_1.NoticeValidation.createNoticeZodSchema), controller_notices_1.NoticeController.createSingleNotice);
router
    .route('/:id')
    .get(controller_notices_1.NoticeController.getSingleNotice)
    .delete(controller_notices_1.NoticeController.deleteNotice)
    .patch((0, validateRequestZod_1.default)(validation_notices_1.NoticeValidation.updateNoticeZodSchema), controller_notices_1.NoticeController.updateNotice);
exports.NoticeRoutes = router;
