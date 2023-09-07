"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.teacherSchema = void 0;
const mongoose_1 = require("mongoose");
const userConstant_1 = require("../../../constant/userConstant");
const usersEnums_1 = require("../../../enums/usersEnums");
exports.teacherSchema = new mongoose_1.Schema({
    userId: { type: String, trim: true, unique: true },
    password: { type: String, trim: true },
    admission_approved: { type: String, trim: true, default: usersEnums_1.ENUM_YN.YES },
    teacher_info: {
        name_bangla: { type: String, trim: true },
        name_english: { type: String, trim: true },
        birth_registration_number: { type: String, trim: true },
        date_of_birth: { type: String, trim: true },
        birth_district: { type: String, trim: true },
        gender: { type: String, trim: true, enum: userConstant_1.GENDER_VALUES },
        nationality: { type: String, trim: true },
        religion: { type: String, trim: true, enum: userConstant_1.RELIGION_VALUES },
        subject: [String],
        marital_status: { type: String, trim: true, enum: userConstant_1.MARITAL_STATUS_VALUES },
        blood_group: { type: String, trim: true, enum: userConstant_1.BLOOD_GROUP_TYPE_VALUES },
        photo: { type: mongoose_1.Schema.Types.ObjectId, trim: true, ref: 'FileUploade' },
        minority_ethnicity: { type: String, trim: true, enum: userConstant_1.YN_VALUES },
        phone_number: { type: String, trim: true },
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
        union: { type: String, trim: true },
        ward_number: { type: String, trim: true },
        village: { type: String, trim: true },
        house_house_holding_number: { type: String, trim: true },
        post_office: { type: String, trim: true },
        postal_code: { type: String, trim: true },
    },
    permanent_address: {
        division: { type: String, trim: true },
        district: { type: String, trim: true },
        sub_district: { type: String, trim: true },
        union: { type: String, trim: true },
        ward_number: { type: String, trim: true },
        village: { type: String, trim: true },
        house_house_holding_number: { type: String, trim: true },
        post_office: { type: String, trim: true },
        postal_code: { type: String, trim: true },
    },
    educational_qualification: [
        {
            exam_name: { type: String, trim: true },
            board: { type: String, trim: true },
            institution: { type: String, trim: true },
            result: { type: String, trim: true },
            certificate_upload: { type: String, trim: true },
        },
    ],
    previous_experience: [
        {
            institution: { type: String, trim: true },
            designation: { type: String, trim: true },
            subject: [{ type: String, trim: true }],
            employment_period: [{ type: String, trim: true }],
        },
    ],
    training_courses: [
        {
            course_name: { type: String, trim: true },
            course_subject: { type: String, trim: true },
            course_duration: [{ type: String, trim: true }],
            course_details: { type: String, trim: true },
            certificate_upload: { type: String, trim: true },
        },
    ],
    guardian_info: {
        name: { type: String, trim: true },
        nid: { type: String, trim: true },
        profession: { type: String, trim: true },
        relationship: { type: String, trim: true },
        phone_number: { type: String, trim: true },
    },
    special_skills: [{ type: String, trim: true }],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Teacher = (0, mongoose_1.model)('Teacher', exports.teacherSchema);
