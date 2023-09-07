"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const meeting_controller_1 = require("./meeting.controller");
const meeting_validation_1 = require("./meeting.validation");
const router = express_1.default.Router();
router.get('/', meeting_controller_1.meetingController.getAllMeeting);
router.post('/create-meeting', (0, validateRequestZod_1.default)(meeting_validation_1.MeetingValidation.createMeetingZodSchema), meeting_controller_1.meetingController.createMeeting);
router.get('/:id', meeting_controller_1.meetingController.getSingleMeeting);
router.patch('/:id', (0, validateRequestZod_1.default)(meeting_validation_1.MeetingValidation.updateMeetingZodSchema), meeting_controller_1.meetingController.updateMeeting);
router.delete('/:id', meeting_controller_1.meetingController.deleteMeeting);
exports.MeetingRoutes = router;
