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
            name_bangla: zod_1.z
                .string({
                required_error: 'শিক্ষকের নাম বাংলায় বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            name_english: zod_1.z
                .string({
                required_error: 'শিক্ষকের নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            birth_registration_number: zod_1.z.string().max(50).trim().optional(),
            date_of_birth: zod_1.z
                .string({
                required_error: 'শিক্ষকের জন্ম তারিখ বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            birth_district: zod_1.z
                .string({
                required_error: 'শিক্ষকের জেলা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            gender: zod_1.z.enum([...userConstant_1.GENDER_VALUES]),
            nationality: zod_1.z
                .string({
                required_error: 'শিক্ষকের জাতীয়তা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            religion: zod_1.z.enum([...userConstant_1.RELIGION_VALUES]),
            subject: zod_1.z.array(zod_1.z
                .string({
                required_error: 'শিক্ষকের বিষয় বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim()),
            marital_status: zod_1.z.enum([...userConstant_1.MARITAL_STATUS_VALUES]),
            blood_group: zod_1.z
                .enum([...userConstant_1.BLOOD_GROUP_TYPE_VALUES])
                .optional(),
            photo: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim(),
            minority_ethnicity: zod_1.z.enum([...userConstant_1.YN_VALUES]),
            phone_number: zod_1.z
                .string({
                required_error: 'শিক্ষকের ফোন নাম্বার বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(20)
                .trim(),
            opinion: zod_1.z.string().min(1).max(3000).trim().optional(),
        }),
        mother_info: zod_1.z.object({
            name_bangla: zod_1.z
                .string({
                required_error: 'মায়ের নাম বাংলায় বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            name_english: zod_1.z
                .string({
                required_error: 'মায়ের নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            nid: zod_1.z
                .string({
                required_error: 'মায়ের এন আইডি বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            date_of_birth: zod_1.z
                .string({
                required_error: 'মায়ের জন্ম তারিখ বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            birth_registration: zod_1.z.string().max(50).trim().optional(),
            phone_number: zod_1.z.string().max(50).trim().optional(),
            profession: zod_1.z
                .string({
                required_error: 'মায়ের পেশা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            year_of_death: zod_1.z.string().min(1).max(50).trim(),
        }),
        father_info: zod_1.z.object({
            name_bangla: zod_1.z
                .string({
                required_error: 'বাবার নাম বাংলায় বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            name_english: zod_1.z
                .string({
                required_error: 'বাবার নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            nid: zod_1.z
                .string({
                required_error: 'বাবার এন আইডি বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            date_of_birth: zod_1.z
                .string({
                required_error: 'বাবার জন্ম তারিখ বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            birth_registration: zod_1.z.string().max(50).trim().optional(),
            phone_number: zod_1.z
                .string({
                required_error: 'বাবার ফোন নাম্বার বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            profession: zod_1.z
                .string({
                required_error: 'বাবার পেশা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            year_of_death: zod_1.z.string().min(1).max(50).trim(),
        }),
        current_address: zod_1.z.object({
            division: zod_1.z
                .string({
                required_error: 'বর্তমান ঠিকানা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            district: zod_1.z
                .string({
                required_error: 'জেলা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            sub_district: zod_1.z
                .string({
                required_error: 'উপজেলা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            union: zod_1.z
                .string({
                required_error: 'ইউনিয়ন বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            ward_number: zod_1.z
                .string({
                required_error: 'ওয়ার্ড বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            village: zod_1.z
                .string({
                required_error: 'গ্রাম বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            house_house_holding_number: zod_1.z.string().max(50).trim().optional(),
            post_office: zod_1.z
                .string({
                required_error: 'পোস্ট অফিস বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            postal_code: zod_1.z.string().max(50).trim().optional(),
        }),
        permanent_address: zod_1.z.object({
            division: zod_1.z
                .string({
                required_error: 'স্থায়ী ঠিকানা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            district: zod_1.z
                .string({
                required_error: 'জেলা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            sub_district: zod_1.z
                .string({
                required_error: 'উপজেলা বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            union: zod_1.z
                .string({
                required_error: 'ইউনিয়ন বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            ward_number: zod_1.z
                .string({
                required_error: 'ওয়ার্ড বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            village: zod_1.z
                .string({
                required_error: 'গ্রাম বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            house_house_holding_number: zod_1.z.string().max(50).trim().optional(),
            post_office: zod_1.z
                .string({
                required_error: 'পোস্ট অফিস বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            postal_code: zod_1.z.string().max(50).trim().optional(),
        }),
        guardian_info: zod_1.z
            .object({
            name: zod_1.z.string({
                required_error: 'অবিভাবকের নাম বাধ্যতামূলক প্রয়োজন',
            }),
            nid: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            relationship: zod_1.z.string({
                required_error: 'অবিভাবকের সাথে সম্পর্ক বাধ্যতামূলক প্রয়োজন',
            }),
            phone_number: zod_1.z.string().optional(),
        })
            .optional(),
        educational_qualification: zod_1.z.array(zod_1.z.object({
            exam_name: zod_1.z
                .string({
                required_error: 'পরীক্ষার নাম বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            board: zod_1.z
                .string({
                required_error: 'বোর্ড বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            institution: zod_1.z
                .string({
                required_error: 'শিক্ষা প্রতিষ্ঠান বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            result: zod_1.z
                .string({
                required_error: 'ফলাফল বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            certificate_upload: zod_1.z.string().max(50).trim().optional(),
        })),
        previous_experience: zod_1.z.array(zod_1.z.object({
            institution: zod_1.z
                .string({
                required_error: 'প্রতিষ্ঠান বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            designation: zod_1.z
                .string({
                required_error: 'উপাধি বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            subject: zod_1.z.array(zod_1.z
                .string({
                required_error: 'বিষয় বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim()),
            employment_period: zod_1.z.array(zod_1.z.string().min(1).max(50).trim()).optional(),
        })),
        training_courses: zod_1.z.array(zod_1.z.object({
            course_name: zod_1.z
                .string({
                required_error: 'কোর্সের নাম বাধ্যতামূলক প্রয়োজন',
            })
                .min(1)
                .max(50)
                .trim(),
            course_subject: zod_1.z.string().min(1).max(50).trim().optional(),
            course_duration: zod_1.z.array(zod_1.z.string().min(1).max(50).trim()).optional(),
            course_details: zod_1.z.string().min(1).max(50).trim().optional(),
            certificate_upload: zod_1.z.string().max(50).trim().optional(),
        })),
        password: zod_1.z.string(),
    }),
});
const updateTeacherZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        admission_approved: zod_1.z
            .enum([...userConstant_1.YN_VALUES])
            .optional(),
        teacher_info: zod_1.z.object({
            name_bangla: zod_1.z.string().max(50).trim().optional(),
            name_english: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            birth_registration_number: zod_1.z.string().max(50).trim().optional(),
            date_of_birth: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            birth_district: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            gender: zod_1.z.enum([...userConstant_1.GENDER_VALUES]),
            nationality: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            religion: zod_1.z.enum([...userConstant_1.RELIGION_VALUES]),
            subject: zod_1.z.array(zod_1.z
                .string()
                .min(1)
                .max(255)
                .trim().optional()),
            marital_status: zod_1.z.enum([...userConstant_1.MARITAL_STATUS_VALUES]),
            blood_group: zod_1.z
                .enum([...userConstant_1.BLOOD_GROUP_TYPE_VALUES])
                .optional(),
            photo: zod_1.z
                .string()
                .min(1)
                .max(255)
                .trim().optional(),
            minority_ethnicity: zod_1.z.enum([...userConstant_1.YN_VALUES]),
            opinion: zod_1.z.string().min(1).max(1000).trim().optional(),
        }),
        mother_info: zod_1.z.object({
            name_bangla: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            name_english: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            nid: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            date_of_birth: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            birth_registration: zod_1.z.string().max(50).trim().optional(),
            phone_number: zod_1.z.string().max(50).trim().optional(),
            profession: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            year_of_death: zod_1.z.string().min(1).max(50).trim(),
        }),
        father_info: zod_1.z.object({
            name_bangla: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            name_english: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            nid: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            date_of_birth: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            birth_registration: zod_1.z.string().max(50).trim().optional(),
            phone_number: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            profession: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            year_of_death: zod_1.z.string().min(1).max(50).trim(),
        }),
        current_address: zod_1.z.object({
            division: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            district: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            sub_district: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            union: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            ward_number: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            village: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            house_house_holding_number: zod_1.z.string().max(50).trim().optional(),
            post_office: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            postal_code: zod_1.z.string().max(50).trim().optional(),
        }),
        permanent_address: zod_1.z.object({
            division: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            district: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            sub_district: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            union: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            ward_number: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            village: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            house_house_holding_number: zod_1.z.string().max(255).trim().optional(),
            post_office: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            postal_code: zod_1.z.string().max(255).trim().optional(),
        }),
        guardian_info: zod_1.z
            .object({
            name: zod_1.z.string().optional(),
            nid: zod_1.z.string().optional(),
            profession: zod_1.z.string().optional(),
            relationship: zod_1.z.string().optional(),
            phone_number: zod_1.z.string().optional(),
        })
            .optional(),
        educational_qualification: zod_1.z.array(zod_1.z.object({
            exam_name: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            board: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            institution: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            result: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            certificate_upload: zod_1.z.string().max(255).trim().optional(),
        })),
        previous_experience: zod_1.z.array(zod_1.z.object({
            institution: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            designation: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            subject: zod_1.z.array(zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional()),
            employment_period: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
        })),
        training_courses: zod_1.z.array(zod_1.z.object({
            course_name: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            course_subject: zod_1.z.string().min(1).max(255).trim().optional(),
            course_duration: zod_1.z
                .string()
                .min(1)
                .max(50)
                .trim().optional(),
            course_details: zod_1.z.string().min(1).max(255).trim().optional(),
            certificate_upload: zod_1.z.string().max(255).trim().optional(),
        })),
        password: zod_1.z.string().optional(),
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
