"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.studentSchema = void 0;
const mongoose_1 = require("mongoose");
const usersEnums_1 = require("../../../enums/usersEnums");
exports.studentSchema = new mongoose_1.Schema({
    userId: { type: String, trim: true },
    student: {
        name_bangla: { type: String, trim: true },
        name_english: { type: String, trim: true },
        birth_registration_number: { type: String, trim: true },
        date_of_birth: { type: String, trim: true },
        birth_district: { type: String, trim: true },
        gender: { type: String, trim: true, enum: Object.values(usersEnums_1.ENUM_GENDER) },
        nationality: [{ type: String, trim: true }],
        religion: { type: String, trim: true, enum: Object.values(usersEnums_1.ENUM_RELIGION) },
        desired_class: {
            type: String,
            trim: true,
            enum: Object.values(usersEnums_1.ENUM_CLASS),
        },
        marital_status: {
            type: String,
            trim: true,
            enum: Object.values(usersEnums_1.ENUM_MARITAL_STATUS),
        },
        blood_group: { type: String, trim: true },
        minority_ethnicity: {
            type: String,
            trim: true,
            enum: Object.values(usersEnums_1.ENUM_YN),
        },
        photo: { type: String, trim: true },
        previous_exam_info: [
            {
                class_name: {
                    type: String,
                    trim: true,
                    enum: Object.values(usersEnums_1.ENUM_CLASS),
                },
                exam_name: { type: String, trim: true },
                result: { type: String, trim: true },
                exam_time: { type: String, trim: true },
                institution_name: { type: String, trim: true },
            },
        ],
        hobbies: [{ type: String, trim: true }],
        favorite_books: [{ type: String, trim: true }],
        financial_assistance_needed: { type: String, trim: true },
        opinion: { type: String, trim: true },
    },
    mother_info: {
        name_bangla: { type: String, trim: true },
        name_english: { type: String, trim: true },
        nid: { type: String, trim: true },
        date_of_birth: { type: String, trim: true },
        birth_registration: { type: String, trim: true },
        phone_number: { type: String, trim: true },
        profession: { type: String, trim: true },
        year_of_death: { type: String, trim: true },
    },
    father_info: {
        name_bangla: { type: String, trim: true },
        name_english: { type: String, trim: true },
        nid: { type: String, trim: true },
        date_of_birth: { type: String, trim: true },
        birth_registration: { type: String, trim: true },
        phone_number: { type: String, trim: true },
        profession: { type: String, trim: true },
        year_of_death: { type: String, trim: true },
    },
    current_address: {
        division: { type: String, trim: true },
        district: { type: String, trim: true },
        sub_district: { type: String, trim: true },
        city_corporation: { type: String, trim: true },
        union: { type: String, trim: true },
        ward_number: { type: String, trim: true },
        mouza: { type: String, trim: true },
        village: { type: String, trim: true },
        house_house_holding_number: { type: String, trim: true },
        post_office: { type: String, trim: true },
        postal_code: { type: String, trim: true },
    },
    permanent_address: {
        division: { type: String, trim: true },
        district: { type: String, trim: true },
        sub_district: { type: String, trim: true },
        city_corporation: { type: String, trim: true },
        union: { type: String, trim: true },
        ward_number: { type: String, trim: true },
        mouza: { type: String, trim: true },
        village: { type: String, trim: true },
        house_house_holding_number: { type: String, trim: true },
        post_office: { type: String, trim: true },
        postal_code: { type: String, trim: true },
    },
    guardianInfo: {
        name: { type: String, trim: true },
        nid: { type: String, trim: true },
        profession: { type: String, trim: true },
        relationship: { type: String, trim: true },
        number: { type: String, trim: true },
    },
    password: { type: String, trim: true, min: 6 }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Student = (0, mongoose_1.model)('Student', exports.studentSchema);
