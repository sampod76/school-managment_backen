"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherValidation = void 0;
const zod_1 = require("zod");
const userConstant_1 = require("../../../constant/userConstant");
// 1A8ytGPemE2Ht4UnHtdo7N1dcME73A24G9
// 16NBtzZScNjcKUP7M1Pf8ro8wqbr2tvzJe
const createTeacherZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: 'ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন',
        }),
        admission_approved: zod_1.z
            .enum([...userConstant_1.YN_VALUES])
            .optional(),
        teacher_info: zod_1.z.object({
            name_bangla: zod_1.z.string().min(1).max(255).trim(),
            name_english: zod_1.z.string().min(1).max(255).trim(),
            birth_registration_number: zod_1.z.string().max(255).trim().optional(),
            date_of_birth: zod_1.z.string().min(1).max(255).trim(),
            birth_district: zod_1.z.string().min(1).max(255).trim(),
            gender: zod_1.z.enum([...userConstant_1.GENDER_VALUES]),
            nationality: zod_1.z.string().min(1).max(255).trim(),
            religion: zod_1.z.enum([...userConstant_1.RELIGION_VALUES]),
            subject: zod_1.z.array(zod_1.z.string().min(1).max(255).trim()),
            marital_status: zod_1.z.enum([...userConstant_1.MARITAL_STATUS_VALUES]),
            blood_group: zod_1.z
                .enum([...userConstant_1.BLOOD_GROUP_TYPE_VALUES])
                .optional(),
            photo: zod_1.z.string().min(1).max(255).trim(),
            minority_ethnicity: zod_1.z.enum([...userConstant_1.YN_VALUES]),
            opinion: zod_1.z.string().min(1).max(100).trim().optional(),
        }),
        mother_info: zod_1.z.object({
            name_bangla: zod_1.z.string().min(1).max(255).trim(),
            name_english: zod_1.z.string().min(1).max(255).trim(),
            nid: zod_1.z.string().min(1).max(255).trim(),
            date_of_birth: zod_1.z.string().min(1).max(255).trim(),
            birth_registration: zod_1.z.string().max(255).trim().optional(),
            phone_number: zod_1.z.string().max(255).trim().optional(),
            profession: zod_1.z.string().min(1).max(255).trim(),
            year_of_death: zod_1.z.string().min(1).max(255).trim(),
        }),
        father_info: zod_1.z.object({
            name_bangla: zod_1.z.string().min(1).max(255).trim(),
            name_english: zod_1.z.string().min(1).max(255).trim(),
            nid: zod_1.z.string().min(1).max(255).trim(),
            date_of_birth: zod_1.z.string().min(1).max(255).trim(),
            birth_registration: zod_1.z.string().max(255).trim().optional(),
            phone_number: zod_1.z.string().min(1).max(255).trim(),
            profession: zod_1.z.string().min(1).max(255).trim(),
            year_of_death: zod_1.z.string().min(1).max(255).trim(),
        }),
        current_address: zod_1.z.object({
            division: zod_1.z.string().min(1).max(255).trim(),
            district: zod_1.z.string().min(1).max(255).trim(),
            sub_district: zod_1.z.string().min(1).max(255).trim(),
            union: zod_1.z.string().min(1).max(255).trim(),
            ward_number: zod_1.z.string().min(1).max(255).trim(),
            village: zod_1.z.string().min(1).max(255).trim(),
            house_house_holding_number: zod_1.z.string().max(255).trim().optional(),
            post_office: zod_1.z.string().min(1).max(255).trim(),
            postal_code: zod_1.z.string().max(255).trim().optional(),
        }),
        permanent_address: zod_1.z.object({
            division: zod_1.z.string().min(1).max(255).trim(),
            district: zod_1.z.string().min(1).max(255).trim(),
            sub_district: zod_1.z.string().min(1).max(255).trim(),
            union: zod_1.z.string().min(1).max(255).trim(),
            ward_number: zod_1.z.string().min(1).max(255).trim(),
            village: zod_1.z.string().min(1).max(255).trim(),
            house_house_holding_number: zod_1.z.string().max(255).trim().optional(),
            post_office: zod_1.z.string().min(1).max(255).trim(),
            postal_code: zod_1.z.string().max(255).trim().optional(),
        }),
        guardian_info: zod_1.z
            .object({
            name: zod_1.z.string(),
            nid: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            relationship: zod_1.z.string(),
            phone_number: zod_1.z.string().optional(),
        })
            .optional(),
        educational_qualification: zod_1.z.array(zod_1.z.object({
            exam_name: zod_1.z.string().min(1).max(255).trim(),
            board: zod_1.z.string().min(1).max(255).trim(),
            institution: zod_1.z.string().min(1).max(255).trim(),
            result: zod_1.z.string().min(1).max(255).trim(),
            certificate_upload: zod_1.z.string().max(255).trim().optional(),
        })),
        previous_experience: zod_1.z.array(zod_1.z.object({
            institution: zod_1.z.string().min(1).max(255).trim(),
            designation: zod_1.z.string().min(1).max(255).trim(),
            subject: zod_1.z.array(zod_1.z.string().min(1).max(255).trim()),
            employment_period: zod_1.z.string().min(1).max(255).trim(),
        })),
        training_courses: zod_1.z.array(zod_1.z.object({
            course_name: zod_1.z.string().min(1).max(255).trim(),
            course_subject: zod_1.z.string().min(1).max(255).trim().optional(),
            course_duration: zod_1.z.string().min(1).max(255).trim(),
            course_details: zod_1.z.string().min(1).max(255).trim().optional(),
            certificate_upload: zod_1.z.string().max(255).trim().optional(),
        })),
        password: zod_1.z.string(),
    }),
});
const updateTeacherZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: 'ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন',
        }),
        admission_approved: zod_1.z
            .enum([...userConstant_1.YN_VALUES])
            .optional(),
        teacher_info: zod_1.z.object({
            name_bangla: zod_1.z.string().min(1).max(255).trim(),
            name_english: zod_1.z.string().min(1).max(255).trim(),
            birth_registration_number: zod_1.z.string().max(255).trim().optional(),
            date_of_birth: zod_1.z.string().min(1).max(255).trim(),
            birth_district: zod_1.z.string().min(1).max(255).trim(),
            gender: zod_1.z.enum([...userConstant_1.GENDER_VALUES]),
            nationality: zod_1.z.string().min(1).max(255).trim(),
            religion: zod_1.z.enum([...userConstant_1.RELIGION_VALUES]),
            subject: zod_1.z.array(zod_1.z.string().min(1).max(255).trim()),
            marital_status: zod_1.z.enum([...userConstant_1.MARITAL_STATUS_VALUES]),
            blood_group: zod_1.z
                .enum([...userConstant_1.BLOOD_GROUP_TYPE_VALUES])
                .optional(),
            photo: zod_1.z.string().min(1).max(255).trim(),
            minority_ethnicity: zod_1.z.enum([...userConstant_1.YN_VALUES]),
            opinion: zod_1.z.string().min(1).max(1000).trim().optional(),
        }),
        mother_info: zod_1.z.object({
            name_bangla: zod_1.z.string().min(1).max(255).trim(),
            name_english: zod_1.z.string().min(1).max(255).trim(),
            nid: zod_1.z.string().min(1).max(255).trim(),
            date_of_birth: zod_1.z.string().min(1).max(255).trim(),
            birth_registration: zod_1.z.string().max(255).trim().optional(),
            phone_number: zod_1.z.string().max(255).trim().optional(),
            profession: zod_1.z.string().min(1).max(255).trim(),
            year_of_death: zod_1.z.string().min(1).max(255).trim(),
        }),
        father_info: zod_1.z.object({
            name_bangla: zod_1.z.string().min(1).max(255).trim(),
            name_english: zod_1.z.string().min(1).max(255).trim(),
            nid: zod_1.z.string().min(1).max(255).trim(),
            date_of_birth: zod_1.z.string().min(1).max(255).trim(),
            birth_registration: zod_1.z.string().max(255).trim().optional(),
            phone_number: zod_1.z.string().min(1).max(255).trim(),
            profession: zod_1.z.string().min(1).max(255).trim(),
            year_of_death: zod_1.z.string().min(1).max(255).trim(),
        }),
        current_address: zod_1.z.object({
            division: zod_1.z.string().min(1).max(255).trim(),
            district: zod_1.z.string().min(1).max(255).trim(),
            sub_district: zod_1.z.string().min(1).max(255).trim(),
            union: zod_1.z.string().min(1).max(255).trim(),
            ward_number: zod_1.z.string().min(1).max(255).trim(),
            village: zod_1.z.string().min(1).max(255).trim(),
            house_house_holding_number: zod_1.z.string().max(255).trim().optional(),
            post_office: zod_1.z.string().min(1).max(255).trim(),
            postal_code: zod_1.z.string().max(255).trim().optional(),
        }),
        permanent_address: zod_1.z.object({
            division: zod_1.z.string().min(1).max(255).trim(),
            district: zod_1.z.string().min(1).max(255).trim(),
            sub_district: zod_1.z.string().min(1).max(255).trim(),
            union: zod_1.z.string().min(1).max(255).trim(),
            ward_number: zod_1.z.string().min(1).max(255).trim(),
            village: zod_1.z.string().min(1).max(255).trim(),
            house_house_holding_number: zod_1.z.string().max(255).trim().optional(),
            post_office: zod_1.z.string().min(1).max(255).trim(),
            postal_code: zod_1.z.string().max(255).trim().optional(),
        }),
        guardian_info: zod_1.z
            .object({
            name: zod_1.z.string(),
            nid: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            relationship: zod_1.z.string(),
            phone_number: zod_1.z.string().optional(),
        })
            .optional(),
        educational_qualification: zod_1.z.array(zod_1.z.object({
            exam_name: zod_1.z.string().min(1).max(255).trim(),
            board: zod_1.z.string().min(1).max(255).trim(),
            institution: zod_1.z.string().min(1).max(255).trim(),
            result: zod_1.z.string().min(1).max(255).trim(),
            certificate_upload: zod_1.z.string().max(255).trim().optional(),
        })),
        previous_experience: zod_1.z.array(zod_1.z.object({
            institution: zod_1.z.string().min(1).max(255).trim(),
            designation: zod_1.z.string().min(1).max(255).trim(),
            subject: zod_1.z.array(zod_1.z.string().min(1).max(255).trim()),
            employment_period: zod_1.z.string().min(1).max(255).trim(),
        })),
        training_courses: zod_1.z.array(zod_1.z.object({
            course_name: zod_1.z.string().min(1).max(255).trim(),
            course_subject: zod_1.z.string().min(1).max(255).trim().optional(),
            course_duration: zod_1.z.string().min(1).max(255).trim(),
            course_details: zod_1.z.string().min(1).max(255).trim().optional(),
            certificate_upload: zod_1.z.string().max(255).trim().optional(),
        })),
        password: zod_1.z.string(),
    }),
});
const updataAdmitionsData = zod_1.z.object({
    body: zod_1.z.object({
        admission_approved: zod_1.z.enum([...userConstant_1.YN_VALUES]),
    }),
});
exports.TeacherValidation = {
    createTeacherZodSchema,
    updateTeacherZodSchema,
    updataAdmitionsData,
};
