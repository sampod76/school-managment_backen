"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentValidation = void 0;
const zod_1 = require("zod");
const usersEnums_1 = require("../../../enums/usersEnums");
// 1A8ytGPemE2Ht4UnHtdo7N1dcME73A24G9
// 16NBtzZScNjcKUP7M1Pf8ro8wqbr2tvzJe
const createStudentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string(),
        student: zod_1.z.object({
            name_bangla: zod_1.z.string(),
            name_english: zod_1.z.string(),
            birth_registration_number: zod_1.z.string().optional(),
            date_of_birth: zod_1.z.string(),
            birth_district: zod_1.z.string().optional(),
            gender: zod_1.z.enum([...Object.values(usersEnums_1.ENUM_GENDER)]),
            nationality: zod_1.z.string().optional(),
            religion: zod_1.z.enum([...Object.values(usersEnums_1.ENUM_RELIGION)]),
            desired_class: zod_1.z.enum([...Object.values(usersEnums_1.ENUM_CLASS)]),
            marital_status: zod_1.z.enum([...Object.values(usersEnums_1.ENUM_MARITAL_STATUS)]),
            blood_group: zod_1.z
                .enum([...Object.values(usersEnums_1.ENUM_BLOOD_GROUP_TYPE)])
                .optional(),
            minority_ethnicity: zod_1.z.enum([...Object.values(usersEnums_1.ENUM_YN)]),
            photo: zod_1.z.string().optional(),
            previous_exam_info: zod_1.z
                .array(zod_1.z.object({
                class_name: zod_1.z.enum([...Object.values(usersEnums_1.ENUM_CLASS)]),
                exam_name: zod_1.z.string(),
                result: zod_1.z.string(),
                exam_time: zod_1.z.string().optional(),
                institution_name: zod_1.z.string().optional(),
            }))
                .optional(),
            hobbies: zod_1.z.array(zod_1.z.string()).optional(),
            favorite_books: zod_1.z.array(zod_1.z.string()).optional(),
            financial_assistance_needed: zod_1.z.enum([...Object.values(usersEnums_1.ENUM_YN)]),
            opinion: zod_1.z.string().optional(),
        }),
        mother_info: zod_1.z.object({
            name_bangla: zod_1.z.string(),
            name_english: zod_1.z.string(),
            nid: zod_1.z.string(),
            date_of_birth: zod_1.z.string(),
            birth_registration: zod_1.z.string().optional(),
            phone_number: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            year_of_death: zod_1.z.string().optional(),
        }),
        father_info: zod_1.z.object({
            name_bangla: zod_1.z.string(),
            name_english: zod_1.z.string(),
            nid: zod_1.z.string(),
            date_of_birth: zod_1.z.string(),
            birth_registration: zod_1.z.string().optional(),
            phone_number: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            year_of_death: zod_1.z.string().optional(),
        }),
        current_address: zod_1.z.object({
            division: zod_1.z.string(),
            district: zod_1.z.string(),
            sub_district: zod_1.z.string(),
            city_corporation: zod_1.z.string().optional(),
            union: zod_1.z.string(),
            ward_number: zod_1.z.string(),
            mouza: zod_1.z.string().optional(),
            village: zod_1.z.string(),
            house_house_holding_number: zod_1.z.string().optional(),
            post_office: zod_1.z.string(),
            postal_code: zod_1.z.string(),
        }),
        permanent_address: zod_1.z.object({
            division: zod_1.z.string(),
            district: zod_1.z.string(),
            sub_district: zod_1.z.string(),
            city_corporation: zod_1.z.string().optional(),
            union: zod_1.z.string(),
            ward_number: zod_1.z.string(),
            mouza: zod_1.z.string().optional(),
            village: zod_1.z.string(),
            house_house_holding_number: zod_1.z.string().optional(),
            post_office: zod_1.z.string(),
            postal_code: zod_1.z.string(),
        }),
        guardianInfo: zod_1.z
            .object({
            name: zod_1.z.string(),
            nid: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            relationship: zod_1.z.string(),
            number: zod_1.z.string().optional(),
        })
            .optional(),
        password: zod_1.z.string(),
    }),
});
const updateStudentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        student: zod_1.z.object({
            name_bangla: zod_1.z.string().optional(),
            name_english: zod_1.z.string().optional(),
            birth_registration_number: zod_1.z.string().optional(),
            date_of_birth: zod_1.z.string().optional(),
            birth_district: zod_1.z.string().optional(),
            gender: zod_1.z
                .enum([...Object.values(usersEnums_1.ENUM_GENDER)])
                .optional(),
            nationality: zod_1.z.string().optional(),
            religion: zod_1.z
                .enum([...Object.values(usersEnums_1.ENUM_RELIGION)])
                .optional(),
            desired_class: zod_1.z
                .enum([...Object.values(usersEnums_1.ENUM_CLASS)])
                .optional(),
            marital_status: zod_1.z
                .enum([...Object.values(usersEnums_1.ENUM_MARITAL_STATUS)])
                .optional(),
            blood_group: zod_1.z
                .enum([...Object.values(usersEnums_1.ENUM_BLOOD_GROUP_TYPE)])
                .optional(),
            minority_ethnicity: zod_1.z
                .enum([...Object.values(usersEnums_1.ENUM_YN)])
                .optional(),
            photo: zod_1.z.string().optional().optional(),
            previous_exam_info: zod_1.z
                .array(zod_1.z.object({
                class_name: zod_1.z
                    .enum([...Object.values(usersEnums_1.ENUM_CLASS)])
                    .optional(),
                exam_name: zod_1.z.string().optional(),
                result: zod_1.z.string().optional(),
                exam_time: zod_1.z.string().optional(),
                institution_name: zod_1.z.string().optional(),
            }))
                .optional(),
            hobbies: zod_1.z.array(zod_1.z.string()).optional(),
            favorite_books: zod_1.z.array(zod_1.z.string()).optional(),
            financial_assistance_needed: zod_1.z
                .enum([...Object.values(usersEnums_1.ENUM_YN)])
                .optional(),
            opinion: zod_1.z.string(),
        }),
        mother_info: zod_1.z.object({
            name_bangla: zod_1.z.string().optional(),
            name_english: zod_1.z.string().optional(),
            nid: zod_1.z.string().optional(),
            date_of_birth: zod_1.z.string().optional(),
            birth_registration: zod_1.z.string().optional(),
            phone_number: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            year_of_death: zod_1.z.string().optional(),
        }),
        father_info: zod_1.z.object({
            name_bangla: zod_1.z.string().optional(),
            name_english: zod_1.z.string().optional(),
            nid: zod_1.z.string().optional(),
            date_of_birth: zod_1.z.string().optional(),
            birth_registration: zod_1.z.string().optional(),
            phone_number: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            year_of_death: zod_1.z.string().optional(),
        }),
        current_address: zod_1.z.object({
            division: zod_1.z.string().optional(),
            district: zod_1.z.string().optional(),
            sub_district: zod_1.z.string().optional(),
            city_corporation: zod_1.z.string().optional(),
            union: zod_1.z.string().optional(),
            ward_number: zod_1.z.string().optional(),
            mouza: zod_1.z.string().optional(),
            village: zod_1.z.string().optional(),
            house_house_holding_number: zod_1.z.string().optional(),
            post_office: zod_1.z.string().optional(),
            postal_code: zod_1.z.string().optional(),
        }),
        permanent_address: zod_1.z.object({
            division: zod_1.z.string().optional(),
            district: zod_1.z.string().optional(),
            sub_district: zod_1.z.string().optional(),
            city_corporation: zod_1.z.string().optional(),
            union: zod_1.z.string().optional(),
            ward_number: zod_1.z.string().optional(),
            mouza: zod_1.z.string().optional(),
            village: zod_1.z.string().optional(),
            house_house_holding_number: zod_1.z.string().optional(),
            post_office: zod_1.z.string().optional(),
            postal_code: zod_1.z.string().optional(),
        }),
        guardianInfo: zod_1.z
            .object({
            name: zod_1.z.string().optional(),
            nid: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            relationship: zod_1.z.string().optional(),
            number: zod_1.z.string().optional(),
        })
            .optional(),
    }),
});
exports.StudentValidation = {
    createStudentZodSchema,
    updateStudentZodSchema,
};
