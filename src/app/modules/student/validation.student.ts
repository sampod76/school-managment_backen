import { z } from "zod";

import {
  BLOOD_GROUP_TYPE_VALUES,
  CLASS_VALUES,
  GENDER_VALUES,
  MARITAL_STATUS_VALUES,
  RELIGION_VALUES,
  YN_VALUES,
} from "../../../constant/userConstant";
// 1A8ytGPemE2Ht4UnHtdo7N1dcME73A24G9
// 16NBtzZScNjcKUP7M1Pf8ro8wqbr2tvzJe
const createStudentZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: "ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন",
    }),
    // admission_approved: z
    //   .enum([...YN_VALUES] as [string, ...string[]])
    //   .optional(),
    student: z.object({
      name_bangla: z.string({
        required_error: "শিক্ষার্থীর বাংলা নাম অবশ্যই দিতে হবে",
      }),
      name_english: z.string({
        required_error: "শিক্ষার্থীর ইংরেজি নাম অবশ্যই দিতে হবে",
      }),
      birth_registration_number: z.string().optional(),
      date_of_birth: z.string({
        required_error: "শিক্ষার্থীর জন্ম তারিখ বাধ্যতামূলক প্রয়োজন",
      }),
      birth_district: z.string().optional(),
      gender: z.enum([...GENDER_VALUES] as [string, ...string[]]),
      nationality: z.string().optional(),
      religion: z.enum([...RELIGION_VALUES] as [string, ...string[]]),
      desired_class: z.enum([...CLASS_VALUES] as [string, ...string[]]),
      marital_status: z.enum([...MARITAL_STATUS_VALUES] as [
        string,
        ...string[]
      ]),
      blood_group: z
        .enum([...BLOOD_GROUP_TYPE_VALUES] as [string, ...string[]])
        .optional(),
      minority_ethnicity: z.enum([...YN_VALUES] as [string, ...string[]]),
      photo: z.string().optional(),
      previous_exam_info: z
        .array(
          z.object({
            class_name: z.enum([...CLASS_VALUES] as [string, ...string[]]),
            exam_name: z.string({
              required_error: "পরীক্ষার নাম বাধ্যতামূলক প্রয়োজন",
            }),
            result: z.string({
              required_error: "ফলাফল বাধ্যতামূলক প্রয়োজন",
            }),
            exam_time: z.string().optional(),
            institution_name: z.string().optional(),
          })
        )
        .optional(),
      hobbies: z.array(z.string()).optional(),
      favorite_books: z.array(z.string()).optional(),
      financial_assistance_needed: z.enum([...YN_VALUES] as [
        string,
        ...string[]
      ]),
      opinion: z.string().optional(),
    }),
    mother_info: z.object({
      name_bangla: z.string({
        required_error: "মায়ের নাম বাংলায় বাধ্যতামূলক প্রয়োজন",
      }),
      name_english: z.string({
        required_error: "মায়ের নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন",
      }),
      nid: z.string({
        required_error: "মায়ের এন আইডি বাধ্যতামূলক প্রয়োজন",
      }),
      date_of_birth: z.string({
        required_error: "মায়ের জন্ম তারিখ বাধ্যতামূলক প্রয়োজন",
      }),
      birth_registration: z.string().optional(),
      phone_number: z.string().optional(),
      profession: z.string().optional(),
      year_of_death: z.string().optional(),
    }),
    father_info: z.object({
      name_bangla: z.string({
        required_error: "বাবার নাম বাংলায় বাধ্যতামূলক প্রয়োজন",
      }),
      name_english: z.string({
        required_error: "বাবার নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন",
      }),
      nid: z.string({
        required_error: "বাবার এন আইডি বাধ্যতামূলক প্রয়োজন",
      }),
      date_of_birth: z.string({
        required_error: "বাবার জন্ম তারিখ বাধ্যতামূলক প্রয়োজন",
      }),
      birth_registration: z.string().optional(),
      phone_number: z.string().optional(),
      profession: z.string().optional(),
      year_of_death: z.string().optional(),
    }),
    current_address: z.object({
      division: z.string({
        required_error: "বর্তমান ঠিকানা বাধ্যতামূলক প্রয়োজন",
      }),
      district: z.string({
        required_error: "জেলা বাধ্যতামূলক প্রয়োজন",
      }),
      sub_district: z.string({
        required_error: "উপজেলা বাধ্যতামূলক প্রয়োজন",
      }),
      city_corporation: z.string().optional(),
      union: z.string({
        required_error: "সিটি কর্পোরেশন বাধ্যতামূলক প্রয়োজন",
      }),
      ward_number: z.string({
        required_error: "ওয়ার্ড বাধ্যতামূলক প্রয়োজন",
      }),
      mouza: z.string().optional(),
      village: z.string({
        required_error: "গ্রাম বাধ্যতামূলক প্রয়োজন",
      }),
      house_house_holding_number: z.string().optional(),
      post_office: z.string({
        required_error: "পোস্ট অফিস বাধ্যতামূলক প্রয়োজন",
      }),
      postal_code: z.string({
        required_error: "পোস্টাল কোড বাধ্যতামূলক প্রয়োজন",
      }),
    }),
    permanent_address: z.object({
      division: z.string({
        required_error: "বিভাগ বাধ্যতামূলক প্রয়োজন",
      }),
      district: z.string({
        required_error: "জেলা বাধ্যতামূলক প্রয়োজন",
      }),
      sub_district: z.string({
        required_error: "উপজেলা বাধ্যতামূলক প্রয়োজন",
      }),
      city_corporation: z.string().optional(),
      union: z.string({
        required_error: "ইউনিয়ন বাধ্যতামূলক প্রয়োজন",
      }),
      ward_number: z.string({
        required_error: "ওয়ার্ড বাধ্যতামূলক প্রয়োজন",
      }),
      mouza: z.string().optional(),
      village: z.string({
        required_error: "গ্রাম বাধ্যতামূলক প্রয়োজন",
      }),
      house_house_holding_number: z.string().optional(),
      post_office: z.string({
        required_error: "পোস্ট অফিস বাধ্যতামূলক প্রয়োজন",
      }),
      postal_code: z.string({
        required_error: "পোস্টাল কোড বাধ্যতামূলক প্রয়োজন",
      }),
    }),
    other_guardian_info: z
      .object({
        name: z.string({
          required_error: "অবিভাবকের নাম বাধ্যতামূলক প্রয়োজন",
        }),
        nid: z.string().optional(),
        profession: z.string().optional(),
        relationship: z.string({
          required_error: "অবিভাবকের সাথে সম্পর্ক বাধ্যতামূলক প্রয়োজন",
        }),
        number: z.string().optional(),
      })
      .optional(),
    password: z.string({
      required_error: "পাসওয়ার্ড বাধ্যতামূলক প্রয়োজন",
    }),
  }),
});
const updateStudentZodSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    student: z.object({
      name_bangla: z.string().optional(),
      name_english: z.string().optional(),
      birth_registration_number: z.string().optional(),
      date_of_birth: z.string().optional(),
      birth_district: z.string().optional(),
      gender: z.enum([...GENDER_VALUES] as [string, ...string[]]).optional(),
      nationality: z.string().optional(),
      religion: z
        .enum([...RELIGION_VALUES] as [string, ...string[]])
        .optional(),
      desired_class: z
        .enum([...CLASS_VALUES] as [string, ...string[]])
        .optional(),
      marital_status: z
        .enum([...MARITAL_STATUS_VALUES] as [string, ...string[]])
        .optional(),
      blood_group: z
        .enum([...BLOOD_GROUP_TYPE_VALUES] as [string, ...string[]])
        .optional(),
      minority_ethnicity: z
        .enum([...YN_VALUES] as [string, ...string[]])
        .optional(),
      photo: z.string().optional().optional(),
      previous_exam_info: z
        .array(
          z.object({
            class_name: z
              .enum([...CLASS_VALUES] as [string, ...string[]])
              .optional(),
            exam_name: z.string().optional(),
            result: z.string().optional(),
            exam_time: z.string().optional(),
            institution_name: z.string().optional(),
          })
        )
        .optional(),
      hobbies: z.array(z.string()).optional(),
      books: z.array(
        z.string()
      ).optional(),
      favorite_books: z.array(z.string()).optional(),
      financial_assistance_needed: z
        .enum([...YN_VALUES] as [string, ...string[]])
        .optional(),
      opinion: z.string().optional(),
    }).optional(),
    mother_info: z.object({
      name_bangla: z.string().optional(),
      name_english: z.string().optional(),
      nid: z.string().optional(),
      date_of_birth: z.string().optional(),
      birth_registration: z.string().optional(),
      phone_number: z.string().optional(),
      profession: z.string().optional(),
      year_of_death: z.string().optional(),
    }).optional(),
    father_info: z.object({
      name_bangla: z.string().optional(),
      name_english: z.string().optional(),
      nid: z.string().optional(),
      date_of_birth: z.string().optional(),
      birth_registration: z.string().optional(),
      phone_number: z.string().optional(),
      profession: z.string().optional(),
      year_of_death: z.string().optional(),
    }).optional(),
    current_address: z.object({
      division: z.string().optional(),
      district: z.string().optional(),
      sub_district: z.string().optional(),
      city_corporation: z.string().optional(),
      union: z.string().optional(),
      ward_number: z.string().optional(),
      mouza: z.string().optional(),
      village: z.string().optional(),
      house_house_holding_number: z.string().optional(),
      post_office: z.string().optional(),
      postal_code: z.string().optional(),
    }).optional(),
    permanent_address: z.object({
      division: z.string().optional(),
      district: z.string().optional(),
      sub_district: z.string().optional(),
      city_corporation: z.string().optional(),
      union: z.string().optional(),
      ward_number: z.string().optional(),
      mouza: z.string().optional(),
      village: z.string().optional(),
      house_house_holding_number: z.string().optional(),
      post_office: z.string().optional(),
      postal_code: z.string().optional(),
    }).optional(),
    other_guardian_info: z
      .object({
        name: z.string().optional(),
        nid: z.string().optional(),
        profession: z.string().optional(),
        relationship: z.string().optional(),
        number: z.string().optional(),
      })
      .optional(),
  }),
});

const updateApprovedAdmition = z.object({
  body: z.object({
    // admission_approved: z.enum([...YN_VALUES] as [string, ...string[]]),
    userId: z.string({required_error:"ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন"}),
  }),
});

export const StudentValidation = {
  createStudentZodSchema,
  updateStudentZodSchema,
  updateApprovedAdmition,
};
