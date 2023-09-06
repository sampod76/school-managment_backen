import { z } from 'zod';

import {
  BLOOD_GROUP_TYPE_VALUES,
  GENDER_VALUES,
  MARITAL_STATUS_VALUES,
  RELIGION_VALUES,
  YN_VALUES,
} from '../../../constant/userConstant';
// 1A8ytGPemE2Ht4UnHtdo7N1dcME73A24G9
// 16NBtzZScNjcKUP7M1Pf8ro8wqbr2tvzJe
const createTeacherZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন',
    }),
    admission_approved: z
      .enum([...YN_VALUES] as [string, ...string[]])
      .optional(),
    teacher_info: z.object({
      name_bangla: z
        .string({
          required_error: 'শিক্ষকের নাম বাংলায় বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      name_english: z
        .string({
          required_error: 'শিক্ষকের নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      birth_registration_number: z.string().max(50).trim().optional(),
      date_of_birth: z
        .string({
          required_error: 'শিক্ষকের জন্ম তারিখ বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      birth_district: z
        .string({
          required_error: 'শিক্ষকের জেলা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      gender: z.enum([...GENDER_VALUES] as [string, ...string[]]),
      nationality: z
        .string({
          required_error: 'শিক্ষকের জাতীয়তা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      religion: z.enum([...RELIGION_VALUES] as [string, ...string[]]),
      subject: z.array(
        z
          .string({
            required_error: 'শিক্ষকের বিষয় বাধ্যতামূলক প্রয়োজন',
          })
          .min(1)
          .max(50)
          .trim()
      ),
      marital_status: z.enum([...MARITAL_STATUS_VALUES] as [
        string,
        ...string[]
      ]),
      blood_group: z
        .enum([...BLOOD_GROUP_TYPE_VALUES] as [string, ...string[]])
        .optional(),
      photo: z
        .string()
      
        .max(50)
        .trim(),
      minority_ethnicity: z.enum([...YN_VALUES] as [string, ...string[]]),
      phone_number: z
        .string({
          required_error: 'শিক্ষকের ফোন নাম্বার বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(20)
        .trim(),
      opinion: z.string().max(3000).trim().optional(),
    }),

    mother_info: z.object({
      name_bangla: z
        .string({
          required_error: 'মায়ের নাম বাংলায় বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      name_english: z
        .string({
          required_error: 'মায়ের নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      nid: z
        .string({
          required_error: 'মায়ের এন আইডি বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      date_of_birth: z
        .string({
          required_error: 'মায়ের জন্ম তারিখ বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      birth_registration: z.string().max(50).trim().optional(),
      phone_number: z.string().max(50).trim().optional(),
      profession: z
        .string({
          required_error: 'মায়ের পেশা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      year_of_death: z.string().min(1).max(50).trim(),
    }),

    father_info: z.object({
      name_bangla: z
        .string({
          required_error: 'বাবার নাম বাংলায় বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      name_english: z
        .string({
          required_error: 'বাবার নাম ইংরেজিতে বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      nid: z
        .string({
          required_error: 'বাবার এন আইডি বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      date_of_birth: z
        .string({
          required_error: 'বাবার জন্ম তারিখ বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      birth_registration: z.string().max(50).trim().optional(),
      phone_number: z
        .string({
          required_error: 'বাবার ফোন নাম্বার বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      profession: z
        .string({
          required_error: 'বাবার পেশা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      year_of_death: z.string().min(1).max(50).trim(),
    }),

    current_address: z.object({
      division: z
        .string({
          required_error: 'বর্তমান ঠিকানা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      district: z
        .string({
          required_error: 'জেলা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      sub_district: z
        .string({
          required_error: 'উপজেলা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      union: z
        .string({
          required_error: 'ইউনিয়ন বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      ward_number: z
        .string({
          required_error: 'ওয়ার্ড বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      village: z
        .string({
          required_error: 'গ্রাম বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      house_house_holding_number: z.string().max(50).trim().optional(),
      post_office: z
        .string({
          required_error: 'পোস্ট অফিস বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      postal_code: z.string().max(50).trim().optional(),
    }),

    permanent_address: z.object({
      division: z
        .string({
          required_error: 'স্থায়ী ঠিকানা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      district: z
        .string({
          required_error: 'জেলা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      sub_district: z
        .string({
          required_error: 'উপজেলা বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      union: z
        .string({
          required_error: 'ইউনিয়ন বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      ward_number: z
        .string({
          required_error: 'ওয়ার্ড বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      village: z
        .string({
          required_error: 'গ্রাম বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      house_house_holding_number: z.string().max(50).trim().optional(),
      post_office: z
        .string({
          required_error: 'পোস্ট অফিস বাধ্যতামূলক প্রয়োজন',
        })
        .min(1)
        .max(50)
        .trim(),
      postal_code: z.string().max(50).trim().optional(),
    }),

    guardian_info: z
      .object({
        name: z.string({
          required_error: 'অবিভাবকের নাম বাধ্যতামূলক প্রয়োজন',
        }),
        nid: z.string().optional(),
        profession: z.string().optional(),
        relationship: z.string({
          required_error: 'অবিভাবকের সাথে সম্পর্ক বাধ্যতামূলক প্রয়োজন',
        }),
        phone_number: z.string().optional(),
      })
      .optional(),
    educational_qualification: z.array(
      z.object({
        exam_name: z
          .string({
            required_error: 'পরীক্ষার নাম বাধ্যতামূলক প্রয়োজন',
          })
          .min(1)
          .max(50)
          .trim(),
        board: z
          .string({
            required_error: 'বোর্ড বাধ্যতামূলক প্রয়োজন',
          })
          .min(1)
          .max(50)
          .trim(),
        institution: z
          .string({
            required_error: 'শিক্ষা প্রতিষ্ঠান বাধ্যতামূলক প্রয়োজন',
          })
          .min(1)
          .max(50)
          .trim(),
        result: z
          .string({
            required_error: 'ফলাফল বাধ্যতামূলক প্রয়োজন',
          })
          .min(1)
          .max(50)
          .trim(),
        certificate_upload: z.string().max(50).trim().optional(),
      })
    ),
    previous_experience: z.array(
      z.object({
        institution: z
          .string({
            required_error: 'প্রতিষ্ঠান বাধ্যতামূলক প্রয়োজন',
          })
          .min(1)
          .max(50)
          .trim(),
        designation: z
          .string({
            required_error: 'উপাধি বাধ্যতামূলক প্রয়োজন',
          })
          .min(1)
          .max(50)
          .trim(),
        subject: z.array(
          z
            .string({
              required_error: 'বিষয় বাধ্যতামূলক প্রয়োজন',
            })
            .min(1)
            .max(50)
            .trim()
        ),
        employment_period: z.array(z.string().min(1).max(50).trim()).optional(),
      })
    ),
    training_courses: z.array(
      z.object({
        course_name: z
          .string({
            required_error: 'কোর্সের নাম বাধ্যতামূলক প্রয়োজন',
          })
          .min(1)
          .max(50)
          .trim(),
        course_subject: z.string().min(1).max(50).trim().optional(),
        course_duration: z.array(z.string().min(1).max(50).trim()).optional(),
        course_details: z.string().min(1).max(50).trim().optional(),
        certificate_upload: z.string().max(50).trim().optional(),
      })
    ),
    password: z.string(),
  }),
});

const updateTeacherZodSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    admission_approved: z
      .enum([...YN_VALUES] as [string, ...string[]])
      .optional(),
    teacher_info: z.object({
      name_bangla: z.string().max(50).trim().optional(),
      name_english: z
        .string()
       
        .max(50)
        .trim() .optional(),
      birth_registration_number: z.string().max(50).trim().optional(),
      date_of_birth: z
        .string()
       
        .max(50)
        .trim() .optional(),
      birth_district: z
        .string()
       
        .max(50)
        .trim() .optional(),
      gender: z.enum([...GENDER_VALUES] as [string, ...string[]]),
      nationality: z
        .string()
       
        .max(50)
        .trim() .optional(),
      religion: z.enum([...RELIGION_VALUES] as [string, ...string[]]),
      subject: z.array(
        z
          .string()
         
          .max(255)
          .trim() .optional()
      ),
      marital_status: z.enum([...MARITAL_STATUS_VALUES] as [
        string,
        ...string[]
      ]),
      blood_group: z
        .enum([...BLOOD_GROUP_TYPE_VALUES] as [string, ...string[]])
        .optional(),
      photo: z
        .string()
       
        .max(255)
        .trim() .optional(),
      minority_ethnicity: z.enum([...YN_VALUES] as [string, ...string[]]),
      opinion: z.string().min(1).max(1000).trim().optional(),
    }),
    mother_info: z.object({
      name_bangla: z
        .string()
       
        .max(50)
        .trim() .optional(),
      name_english: z
        .string()
       
        .max(50)
        .trim() .optional(),
      nid: z
        .string()
       
        .max(50)
        .trim() .optional(),
      date_of_birth: z
        .string()
       
        .max(50)
        .trim() .optional(),
      birth_registration: z.string().max(50).trim().optional(),
      phone_number: z.string().max(50).trim().optional(),
      profession: z
        .string()
       
        .max(50)
        .trim() .optional(),
      year_of_death: z.string().min(1).max(50).trim(),
    }),

    father_info: z.object({
      name_bangla: z
        .string()
       
        .max(50)
        .trim() .optional(),
      name_english: z
        .string()
       
        .max(50)
        .trim() .optional(),
      nid: z
        .string()
       
        .max(50)
        .trim() .optional(),
      date_of_birth: z
        .string()
       
        .max(50)
        .trim() .optional(),
      birth_registration: z.string().max(50).trim().optional(),
      phone_number: z
        .string()
       
        .max(50)
        .trim() .optional(),
      profession: z
        .string()
       
        .max(50)
        .trim() .optional(),
      year_of_death: z.string().min(1).max(50).trim(),
    }),

    current_address: z.object({
      division: z
        .string()
       
        .max(50)
        .trim() .optional(),
      district: z
        .string()
       
        .max(50)
        .trim() .optional(),
      sub_district: z
        .string()
       
        .max(50)
        .trim() .optional(),
      union: z
        .string()
       
        .max(50)
        .trim() .optional(),
      ward_number: z
        .string()
       
        .max(50)
        .trim() .optional(),
      village: z
        .string()
       
        .max(50)
        .trim() .optional(),
      house_house_holding_number: z.string().max(50).trim().optional(),
      post_office: z
        .string()
       
        .max(50)
        .trim() .optional(),
      postal_code: z.string().max(50).trim().optional(),
    }),

    permanent_address: z.object({
      division: z
        .string()
       
        .max(50)
        .trim() .optional(),
      district: z
        .string()
       
        .max(50)
        .trim() .optional(),
      sub_district: z
        .string()
       
        .max(50)
        .trim() .optional(),
      union: z
        .string()
       
        .max(50)
        .trim() .optional(),
      ward_number: z
        .string()
        
        .max(50)
        .trim() .optional(),
      village: z
        .string()
        
        .max(50)
        .trim() .optional(),
      house_house_holding_number: z.string().max(255).trim().optional(),
      post_office: z
        .string()
        
        .max(50)
        .trim() .optional(),
      postal_code: z.string().max(255).trim().optional(),
    }),

    guardian_info: z
      .object({
        name: z.string() .optional(),
        nid: z.string().optional(),
        profession: z.string().optional(),
        relationship: z.string() .optional(),
        phone_number: z.string().optional(),
      })
      .optional(),
    educational_qualification: z.array(
      z.object({
        exam_name: z
          .string()
          
          .max(50)
          .trim() .optional(),
        board: z
          .string()
          
          .max(50)
          .trim() .optional(),
        institution: z
          .string()
          
          .max(50)
          .trim() .optional(),
        result: z
          .string()
          
          .max(50)
          .trim() .optional(),
        certificate_upload: z.string().max(255).trim().optional(),
      })
    ),
    previous_experience: z.array(
      z.object({
        institution: z
          .string()
          
          .max(50)
          .trim() .optional(),
        designation: z
          .string()
          
          .max(50)
          .trim() .optional(),
        subject: z.array(
          z
            .string()
            
            .max(50)
            .trim() .optional()
        ),
        employment_period: z
          .string()
          
          .max(50)
          .trim() .optional(),
      })
    ),
    training_courses: z.array(
      z.object({
        course_name: z
          .string()
          
          .max(50)
          .trim() .optional(),
        course_subject: z.string().max(255).trim().optional(),
        course_duration: z
          .string()
          
          .max(50)
          .trim() .optional(),
        course_details: z.string().max(255).trim().optional(),
        certificate_upload: z.string().max(255).trim().optional(),
      })
    ),
    password: z.string() .optional(),
  }),
});

const updateApprovedAdmition = z.object({
  body: z.object({
    admission_approved: z.enum([...YN_VALUES] as [string, ...string[]]),
  }),
});

export const TeacherValidation = {
  createTeacherZodSchema,
  updateTeacherZodSchema,
  updateApprovedAdmition,
};
