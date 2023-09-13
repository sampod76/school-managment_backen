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
exports.ClassService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const class_model_1 = require("./class.model");
const createClass = (ClassData) => {
    const createdCLass = class_model_1.ClassModel.create(ClassData);
    if (!createdCLass) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'শ্রেণী তৈরিতে ব্যর্থ হয়েছে');
    }
    return createdCLass;
};
const getAllClasses = () => __awaiter(void 0, void 0, void 0, function* () {
    const allClass = class_model_1.ClassModel.aggregate([
        { $match: {} },
        {
            $lookup: {
                from: 'books',
                let: { id: '$_id' },
                pipeline: [
                    {
                        $match: {
                            $expr: { $eq: ['$class', '$$id'] },
                        },
                    },
                ],
                as: 'books',
            },
        },
    ]);
    if (!allClass) {
        throw new ApiError_1.default(http_status_1.default.EXPECTATION_FAILED, 'শ্রেণী খুঁজে পেতে ব্যর্থ হয়েছে');
    }
    return allClass;
});
const getSingleClass = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield class_model_1.ClassModel.findOne({ _id: id });
    return result;
});
const updateClass = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield class_model_1.ClassModel.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'শ্রেণীর তথ্য আপডেট করতে ব্যর্থ হয়েছে!');
    }
    return result;
});
const deleteClass = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('before', id);
    const isExist = yield class_model_1.ClassModel.findOne({ _id: id });
    console.log('after', isExist);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'শ্রেণী খুঁজে পেতে ব্যর্থ হয়েছে!');
    }
    const user = yield class_model_1.ClassModel.findOneAndDelete({ _id: id });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'শ্রেণীর তথ্য মুছে ফেলতে ব্যর্থ হয়েছে');
    }
    return user;
});
exports.ClassService = {
    createClass,
    getAllClasses,
    getSingleClass,
    updateClass,
    deleteClass,
};
