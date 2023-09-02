"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentValidation = void 0;
const zod_1 = require("zod");
const userConstant_1 = require("../../../constant/userConstant");
// 1A8ytGPemE2Ht4UnHtdo7N1dcME73A24G9
// 16NBtzZScNjcKUP7M1Pf8ro8wqbr2tvzJe
const createStudentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: "ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন",
        }),
        admission_approved: zod_1.z
            .enum([...userConstant_1.YN_VALUES])
            .optional(),
        student: zod_1.z.object({
            name_bangla: zod_1.z.string({
                required_error: "শিক্ষার্থীর বাংলা নাম অবশ্যই দিতে হবে",
            }),
            name_english: zod_1.z.string({
                required_error: "শিক্ষার্থীর ইংরেজি নাম অবশ্যই দিতে হবে",
            }),
            birth_registration_number: zod_1.z.string().optional(),
            date_of_birth: zod_1.z.string({
                required_error: "শিক্ষার্থীর জন্ম তারিখ বাধ্যতামূলক প্রয়োজন",
            }),
            birth_district: zod_1.z.string().optional(),
            gender: zod_1.z.enum([...userConstant_1.GENDER_VALUES]),
            nationality: zod_1.z.string().optional(),
            religion: zod_1.z.enum([...userConstant_1.RELIGION_VALUES]),
            desired_class: zod_1.z.enum([...userConstant_1.CLASS_VALUES]),
            marital_status: zod_1.z.enum([...userConstant_1.MARITAL_STATUS_VALUES]),
            blood_group: zod_1.z
                .enum([...userConstant_1.BLOOD_GROUP_TYPE_VALUES])
                .optional(),
            minority_ethnicity: zod_1.z.enum([...userConstant_1.YN_VALUES]),
            photo: zod_1.z.string().optional(),
            previous_exam_info: zod_1.z
                .array(zod_1.z.object({
                class_name: zod_1.z.enum([...userConstant_1.CLASS_VALUES]),
                exam_name: zod_1.z.string({
                    required_error: "পরীক্ষার নাম বাধ্যতামূলক প্রয়োজন",
                }),
                result: zod_1.z.string({
                    required_error: "ফলাফল বাধ্যতামূলক প্রয়োজন",
                }),
                exam_time: zod_1.z.string().optional(),
                institution_name: zod_1.z.string().optional(),
            }))
                .optional(),
            hobbies: zod_1.z.array(zod_1.z.string()).optional(),
            favorite_books: zod_1.z.array(zod_1.z.string()).optional(),
            financial_assistance_needed: zod_1.z.enum([...userConstant_1.YN_VALUES]),
            opinion: zod_1.z.string().optional(),
        }),
        mother_info: zod_1.z.object({
            name_bangla: zod_1.z.string({
                required_error: "মায়ের নাম বাংলায় বাধ্যতামূলক প্রয়োজন",
            }),
            name_english: zod_1.z.string({
                required_error: "মায়ের নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন",
            }),
            nid: zod_1.z.string({
                required_error: "মায়ের এন আইডি বাধ্যতামূলক প্রয়োজন",
            }),
            date_of_birth: zod_1.z.string({
                required_error: "মায়ের জন্ম তারিখ বাধ্যতামূলক প্রয়োজন",
            }),
            birth_registration: zod_1.z.string().optional(),
            phone_number: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            year_of_death: zod_1.z.string().optional(),
        }),
        father_info: zod_1.z.object({
            name_bangla: zod_1.z.string({
                required_error: "বাবার নাম বাংলায় বাধ্যতামূলক প্রয়োজন",
            }),
            name_english: zod_1.z.string({
                required_error: "বাবার নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন",
            }),
            nid: zod_1.z.string({
                required_error: "বাবার এন আইডি বাধ্যতামূলক প্রয়োজন",
            }),
            date_of_birth: zod_1.z.string({
                required_error: "বাবার জন্ম তারিখ বাধ্যতামূলক প্রয়োজন",
            }),
            birth_registration: zod_1.z.string().optional(),
            phone_number: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            year_of_death: zod_1.z.string().optional(),
        }),
        current_address: zod_1.z.object({
            division: zod_1.z.string({
                required_error: "বর্তমান ঠিকানা বাধ্যতামূলক প্রয়োজন",
            }),
            district: zod_1.z.string({
                required_error: "জেলা বাধ্যতামূলক প্রয়োজন",
            }),
            sub_district: zod_1.z.string({
                required_error: "উপজেলা বাধ্যতামূলক প্রয়োজন",
            }),
            city_corporation: zod_1.z.string().optional(),
            union: zod_1.z.string({
                required_error: "সিটি কর্পোরেশন বাধ্যতামূলক প্রয়োজন",
            }),
            ward_number: zod_1.z.string({
                required_error: "ওয়ার্ড বাধ্যতামূলক প্রয়োজন",
            }),
            mouza: zod_1.z.string().optional(),
            village: zod_1.z.string({
                required_error: "গ্রাম বাধ্যতামূলক প্রয়োজন",
            }),
            house_house_holding_number: zod_1.z.string().optional(),
            post_office: zod_1.z.string({
                required_error: "পোস্ট অফিস বাধ্যতামূলক প্রয়োজন",
            }),
            postal_code: zod_1.z.string({
                required_error: "পোস্টাল কোড বাধ্যতামূলক প্রয়োজন",
            }),
        }),
        permanent_address: zod_1.z.object({
            division: zod_1.z.string({
                required_error: "বিভাগ বাধ্যতামূলক প্রয়োজন",
            }),
            district: zod_1.z.string({
                required_error: "জেলা বাধ্যতামূলক প্রয়োজন",
            }),
            sub_district: zod_1.z.string({
                required_error: "উপজেলা বাধ্যতামূলক প্রয়োজন",
            }),
            city_corporation: zod_1.z.string().optional(),
            union: zod_1.z.string({
                required_error: "ইউনিয়ন বাধ্যতামূলক প্রয়োজন",
            }),
            ward_number: zod_1.z.string({
                required_error: "ওয়ার্ড বাধ্যতামূলক প্রয়োজন",
            }),
            mouza: zod_1.z.string().optional(),
            village: zod_1.z.string({
                required_error: "গ্রাম বাধ্যতামূলক প্রয়োজন",
            }),
            house_house_holding_number: zod_1.z.string().optional(),
            post_office: zod_1.z.string({
                required_error: "পোস্ট অফিস বাধ্যতামূলক প্রয়োজন",
            }),
            postal_code: zod_1.z.string({
                required_error: "পোস্টাল কোড বাধ্যতামূলক প্রয়োজন",
            }),
        }),
        other_guardian_info: zod_1.z
            .object({
            name: zod_1.z.string({
                required_error: "অবিভাবকের নাম বাধ্যতামূলক প্রয়োজন",
            }),
            nid: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            relationship: zod_1.z.string({
                required_error: "অবিভাবকের সাথে সম্পর্ক বাধ্যতামূলক প্রয়োজন",
            }),
            number: zod_1.z.string().optional(),
        })
            .optional(),
        password: zod_1.z.string({
            required_error: "পাসওয়ার্ড বাধ্যতামূলক প্রয়োজন",
        }),
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
            gender: zod_1.z.enum([...userConstant_1.GENDER_VALUES]).optional(),
            nationality: zod_1.z.string().optional(),
            religion: zod_1.z
                .enum([...userConstant_1.RELIGION_VALUES])
                .optional(),
            desired_class: zod_1.z
                .enum([...userConstant_1.CLASS_VALUES])
                .optional(),
            marital_status: zod_1.z
                .enum([...userConstant_1.MARITAL_STATUS_VALUES])
                .optional(),
            blood_group: zod_1.z
                .enum([...userConstant_1.BLOOD_GROUP_TYPE_VALUES])
                .optional(),
            minority_ethnicity: zod_1.z
                .enum([...userConstant_1.YN_VALUES])
                .optional(),
            photo: zod_1.z.string().optional().optional(),
            previous_exam_info: zod_1.z
                .array(zod_1.z.object({
                class_name: zod_1.z
                    .enum([...userConstant_1.CLASS_VALUES])
                    .optional(),
                exam_name: zod_1.z.string().optional(),
                result: zod_1.z.string().optional(),
                exam_time: zod_1.z.string().optional(),
                institution_name: zod_1.z.string().optional(),
            }))
                .optional(),
            hobbies: zod_1.z.array(zod_1.z.string()).optional(),
            books: zod_1.z.array(zod_1.z.string()).optional(),
            favorite_books: zod_1.z.array(zod_1.z.string()).optional(),
            financial_assistance_needed: zod_1.z
                .enum([...userConstant_1.YN_VALUES])
                .optional(),
            opinion: zod_1.z.string().optional(),
        }).optional(),
        mother_info: zod_1.z.object({
            name_bangla: zod_1.z.string().optional(),
            name_english: zod_1.z.string().optional(),
            nid: zod_1.z.string().optional(),
            date_of_birth: zod_1.z.string().optional(),
            birth_registration: zod_1.z.string().optional(),
            phone_number: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            year_of_death: zod_1.z.string().optional(),
        }).optional(),
        father_info: zod_1.z.object({
            name_bangla: zod_1.z.string().optional(),
            name_english: zod_1.z.string().optional(),
            nid: zod_1.z.string().optional(),
            date_of_birth: zod_1.z.string().optional(),
            birth_registration: zod_1.z.string().optional(),
            phone_number: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            year_of_death: zod_1.z.string().optional(),
        }).optional(),
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
        }).optional(),
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
        }).optional(),
        other_guardian_info: zod_1.z
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
const updataAdmitionsData = zod_1.z.object({
    body: zod_1.z.object({
        admission_approved: zod_1.z.enum([...userConstant_1.YN_VALUES]),
    }),
});
exports.StudentValidation = {
    createStudentZodSchema,
    updateStudentZodSchema,
    updataAdmitionsData,
};
