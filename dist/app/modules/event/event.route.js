"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const event_controller_1 = require("./event.controller");
const event_validation_1 = require("./event.validation");
const router = express_1.default.Router();
router
    .route('/')
    .get(event_controller_1.eventsController.getAllEventController)
    .post((0, validateRequestZod_1.default)(event_validation_1.EventsValidation.createEventZodSchema), event_controller_1.eventsController.createEvent);
router.get('/upcoming_event', event_controller_1.eventsController.getUpcomingEventsController);
router.get('/:id', event_controller_1.eventsController.getSingleEvent);
router.delete('/:id', event_controller_1.eventsController.deleteEventController);
router.patch('/:id', (0, validateRequestZod_1.default)(event_validation_1.EventsValidation.updateEventZodSchema), event_controller_1.eventsController.UpdateEvents);
exports.EventsRoute = router;
