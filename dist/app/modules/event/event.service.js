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
exports.EventsService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const event_model_1 = require("./event.model");
const createEvents = (eventsData) => {
    const createdEvent = event_model_1.EventModel.create(eventsData);
    if (!createdEvent) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'ইভেন্ট তৈরিতে ব্যর্থ হয়েছে');
    }
    return createdEvent;
};
const getAllEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const eventService = event_model_1.EventModel.find({});
    if (!eventService) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'ইভেন্ট গুলো খুজে পেতে ব্যর্থ হয়েছে');
    }
    return eventService;
});
const getSingleEventService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield event_model_1.EventModel.findOne({ _id: id });
    return result;
});
const updateEventService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield event_model_1.EventModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'ইভেন্ট খুঁজে পাওয়া যায়নি!');
    }
    return result;
});
const deleteEventService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield event_model_1.EventModel.findOne({ _id: id });
    console.log('after', isExist);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'ইভেন্ট খুঁজে পাওয়া যায়নি!');
    }
    const event = yield event_model_1.EventModel.findOneAndDelete({ _id: id });
    if (!event) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'ইভেন মুছে ফেলতে ব্যর্থ হয়েছে');
    }
    return event;
});
const getUpcomingEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const events = yield event_model_1.EventModel.find({
        event_date: { $gte: formattedDate },
    });
    if (!events) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'আসন্ন ইভেন্ট খুঁজে পেতে ব্যর্থ হয়েছে');
    }
    return events;
});
exports.EventsService = {
    createEvents,
    getAllEvents,
    getSingleEventService,
    updateEventService,
    deleteEventService,
    getUpcomingEvents,
};
