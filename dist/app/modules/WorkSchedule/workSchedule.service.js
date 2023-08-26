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
exports.WorkScheduleService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const workSchedule_model_1 = require("./workSchedule.model");
const createWorkSchedule = (WorkScheduleData) => {
    const createdWorkSchedule = workSchedule_model_1.WorkScheduleModel.create(WorkScheduleData);
    if (!createdWorkSchedule) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to create Work Schedule first');
    }
    return createdWorkSchedule;
};
const getAllWorkSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    const allWorkScheduleService = workSchedule_model_1.WorkScheduleModel.find({});
    if (!allWorkScheduleService) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'failed to get All Work Schedule');
    }
    return allWorkScheduleService;
});
const getSingleWorkService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield workSchedule_model_1.WorkScheduleModel.findOne({ _id: id });
    return result;
});
const updateWorkScheduleService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield workSchedule_model_1.WorkScheduleModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Work Schedule not found!');
    }
    return result;
});
const deleteWorkScheduleService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield workSchedule_model_1.WorkScheduleModel.findOne({ _id: id });
    console.log('after', isExist);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Work not found!');
    }
    const work = yield workSchedule_model_1.WorkScheduleModel.findOneAndDelete({ _id: id });
    if (!work) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Failed to delete WorkSchedule');
    }
    return work;
});
const getTodaysWork = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    const todaysWork = yield workSchedule_model_1.WorkScheduleModel.find({
        createdAt: {
            $gte: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()),
            $lt: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1),
        },
    });
    if (!todaysWork) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, "Failed to get today's Work");
    }
    return todaysWork;
});
exports.WorkScheduleService = {
    createWorkSchedule,
    getAllWorkSchedule,
    updateWorkScheduleService,
    deleteWorkScheduleService,
    getSingleWorkService,
    getTodaysWork,
};
