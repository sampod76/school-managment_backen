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
exports.workPlanController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const workPlan_service_1 = require("./workPlan.service");
const createWorkPlan = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const workPlanCreate = req.body;
    const result = yield workPlan_service_1.WorkPlanService.createWorkPlan(workPlanCreate);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Work plan created successfully!',
        data: result,
    });
}));
const getAllWorkPlanController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield workPlan_service_1.WorkPlanService.getAllWorkPlan();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'All Work Plan Info retrieved successfully',
        data: result,
    });
}));
const getSingleWorkPlan = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield workPlan_service_1.WorkPlanService.getSingleWorkPlan(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Work Plan retrieved successfully',
        data: result,
    });
}));
const UpdateWorkPlan = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield workPlan_service_1.WorkPlanService.updateWorkPlanService(id, updatedData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Work Plan updated successfully',
        data: result,
    });
}));
const deleteWorkPlanController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log(id);
    const result = yield workPlan_service_1.WorkPlanService.deleteWorkPlanService(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Work plan deleted successfully',
        data: result,
    });
}));
const getTodaysWorkPlanController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const events = yield workPlan_service_1.WorkPlanService.getTodaysWorkPlan();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Today's Works Plan retrieved successfully",
        data: events,
    });
}));
exports.workPlanController = {
    createWorkPlan,
    getAllWorkPlanController,
    getSingleWorkPlan,
    UpdateWorkPlan,
    deleteWorkPlanController,
    getTodaysWorkPlanController,
};
