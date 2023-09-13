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
exports.WorkPlanService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const workPlan_model_1 = require("./workPlan.model");
const createWorkPlan = (WorkPlanData) => {
    const createdWorkPlan = workPlan_model_1.WorkPlanModel.create(WorkPlanData);
    if (!createdWorkPlan) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'নতুন কর্মপরিকল্পনা তৈরি ব্যর্থ হয়েছে ');
    }
    return createdWorkPlan;
};
const getAllWorkPlan = () => __awaiter(void 0, void 0, void 0, function* () {
    const allWorkPlanService = workPlan_model_1.WorkPlanModel.find({});
    if (!allWorkPlanService) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'সফল কর্ম পরিকল্পনা খুঁজে পেতে ব্যর্থ হয়েছে');
    }
    return allWorkPlanService;
});
const getSingleWorkPlan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield workPlan_model_1.WorkPlanModel.findOne({ _id: id });
    return result;
});
const updateWorkPlanService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield workPlan_model_1.WorkPlanModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'কর্মপরিকল্পনা আপডেট করতে ব্যর্থ হয়েছে!');
    }
    return result;
});
const deleteWorkPlanService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield workPlan_model_1.WorkPlanModel.findOne({ _id: id });
    console.log('after', isExist);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'সফল কর্ম পরিকল্পনা খুঁজে পেতে ব্যর্থ হয়েছে!');
    }
    const work = yield workPlan_model_1.WorkPlanModel.findOneAndDelete({ _id: id });
    if (!work) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'কর্মপরিকল্পনা মুছে ফেলতে ব্যর্থ হয়েছে ');
    }
    return work;
});
const getTodaysWorkPlan = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    const todaysWork = yield workPlan_model_1.WorkPlanModel.find({
        createdAt: {
            $gte: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()),
            $lt: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1),
        },
    });
    if (!todaysWork) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, "আজকের কর্ম করে কল্পনা খুঁজে পেতে ব্যর্থ হয়েছে ");
    }
    return todaysWork;
});
exports.WorkPlanService = {
    createWorkPlan,
    getAllWorkPlan,
    getSingleWorkPlan,
    updateWorkPlanService,
    deleteWorkPlanService,
    getTodaysWorkPlan,
    //   getAllWorkSchedule,
    //   updateWorkScheduleService,
    //   deleteWorkScheduleService,
    //   getSingleWorkService,
    //   getTodaysWork,
};
