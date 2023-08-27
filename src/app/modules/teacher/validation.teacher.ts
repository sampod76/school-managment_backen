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
      name_bangla: z.string().min(1).max(255).trim(),
      name_english: z.string().min(1).max(255).trim(),
      birth_registration_number: z.string().max(255).trim().optional(),
      date_of_birth: z.string().min(1).max(255).trim(),
      birth_district: z.string().min(1).max(255).trim(),
      gender: z.enum([...GENDER_VALUES] as [string, ...string[]]),
      nationality: z.string().min(1).max(255).trim(),
      religion: z.enum([...RELIGION_VALUES] as [string, ...string[]]),
      subject: z.array(z.string().min(1).max(255).trim()),
      marital_status: z.enum([...MARITAL_STATUS_VALUES] as [
        string,
        ...string[]
      ]),
      blood_group: z
        .enum([...BLOOD_GROUP_TYPE_VALUES] as [string, ...string[]])
        .optional(),
      photo: z.string().min(1).max(255).trim(),
      minority_ethnicity: z.enum([...YN_VALUES] as [string, ...string[]]),
      opinion: z.string().min(1).max(100).trim().optional(),
    }),
    mother_info: z.object({
      name_bangla: z.string().min(1).max(255).trim(),
      name_english: z.string().min(1).max(255).trim(),
      nid: z.string().min(1).max(255).trim(),
      date_of_birth: z.string().min(1).max(255).trim(),
      birth_registration: z.string().max(255).trim().optional(),
      phone_number: z.string().max(255).trim().optional(),
      profession: z.string().min(1).max(255).trim(),
      year_of_death: z.string().min(1).max(255).trim(),
    }),
    father_info: z.object({
      name_bangla: z.string().min(1).max(255).trim(),
      name_english: z.string().min(1).max(255).trim(),
      nid: z.string().min(1).max(255).trim(),
      date_of_birth: z.string().min(1).max(255).trim(),
      birth_registration: z.string().max(255).trim().optional(),
      phone_number: z.string().min(1).max(255).trim(),
      profession: z.string().min(1).max(255).trim(),
      year_of_death: z.string().min(1).max(255).trim(),
    }),
    current_address: z.object({
      division: z.string().min(1).max(255).trim(),
      district: z.string().min(1).max(255).trim(),
      sub_district: z.string().min(1).max(255).trim(),
      union: z.string().min(1).max(255).trim(),
      ward_number: z.string().min(1).max(255).trim(),
      village: z.string().min(1).max(255).trim(),
      house_house_holding_number: z.string().max(255).trim().optional(),
      post_office: z.string().min(1).max(255).trim(),
      postal_code: z.string().max(255).trim().optional(),
    }),
    permanent_address: z.object({
      division: z.string().min(1).max(255).trim(),
      district: z.string().min(1).max(255).trim(),
      sub_district: z.string().min(1).max(255).trim(),
      union: z.string().min(1).max(255).trim(),
      ward_number: z.string().min(1).max(255).trim(),
      village: z.string().min(1).max(255).trim(),
      house_house_holding_number: z.string().max(255).trim().optional(),
      post_office: z.string().min(1).max(255).trim(),
      postal_code: z.string().max(255).trim().optional(),
    }),
    guardian_info: z
      .object({
        name: z.string(),
        nid: z.string().optional(),
        profession: z.string().optional(),
        relationship: z.string(),
        phone_number: z.string().optional(),
      })
      .optional(),
    educational_qualification: z.array(
      z.object({
        exam_name: z.string().min(1).max(255).trim(),
        board: z.string().min(1).max(255).trim(),
        institution: z.string().min(1).max(255).trim(),
        result: z.string().min(1).max(255).trim(),
        certificate_upload: z.string().max(255).trim().optional(),
      })
    ),
    previous_experience: z.array(
      z.object({
        institution: z.string().min(1).max(255).trim(),
        designation: z.string().min(1).max(255).trim(),
        subject: z.array(z.string().min(1).max(255).trim()),
        employment_period: z.string().min(1).max(255).trim(),
      })
    ),
    training_courses: z.array(
      z.object({
        course_name: z.string().min(1).max(255).trim(),
        course_subject: z.string().min(1).max(255).trim().optional(),
        course_duration: z.string().min(1).max(255).trim(),
        course_details: z.string().min(1).max(255).trim().optional(),
        certificate_upload: z.string().max(255).trim().optional(),
      })
    ),
    password: z.string(),
  }),
});

const updateTeacherZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'ব্যবহারকারী আইডি বাধ্যতামূলক প্রয়োজন',
    }),
    admission_approved: z
      .enum([...YN_VALUES] as [string, ...string[]])
      .optional(),
    teacher_info: z.object({
      name_bangla: z.string().min(1).max(255).trim(),
      name_english: z.string().min(1).max(255).trim(),
      birth_registration_number: z.string().max(255).trim().optional(),
      date_of_birth: z.string().min(1).max(255).trim(),
      birth_district: z.string().min(1).max(255).trim(),
      gender: z.enum([...GENDER_VALUES] as [string, ...string[]]),
      nationality: z.string().min(1).max(255).trim(),
      religion: z.enum([...RELIGION_VALUES] as [string, ...string[]]),
      subject: z.array(z.string().min(1).max(255).trim()),
      marital_status: z.enum([...MARITAL_STATUS_VALUES] as [
        string,
        ...string[]
      ]),
      blood_group: z
        .enum([...BLOOD_GROUP_TYPE_VALUES] as [string, ...string[]])
        .optional(),
      photo: z.string().min(1).max(255).trim(),
      minority_ethnicity: z.enum([...YN_VALUES] as [string, ...string[]]),
      opinion: z.string().min(1).max(1000).trim().optional(),
    }),
    mother_info: z.object({
      name_bangla: z.string().min(1).max(255).trim(),
      name_english: z.string().min(1).max(255).trim(),
      nid: z.string().min(1).max(255).trim(),
      date_of_birth: z.string().min(1).max(255).trim(),
      birth_registration: z.string().max(255).trim().optional(),
      phone_number: z.string().max(255).trim().optional(),
      profession: z.string().min(1).max(255).trim(),
      year_of_death: z.string().min(1).max(255).trim(),
    }),
    father_info: z.object({
      name_bangla: z.string().min(1).max(255).trim(),
      name_english: z.string().min(1).max(255).trim(),
      nid: z.string().min(1).max(255).trim(),
      date_of_birth: z.string().min(1).max(255).trim(),
      birth_registration: z.string().max(255).trim().optional(),
      phone_number: z.string().min(1).max(255).trim(),
      profession: z.string().min(1).max(255).trim(),
      year_of_death: z.string().min(1).max(255).trim(),
    }),
    current_address: z.object({
      division: z.string().min(1).max(255).trim(),
      district: z.string().min(1).max(255).trim(),
      sub_district: z.string().min(1).max(255).trim(),
      union: z.string().min(1).max(255).trim(),
      ward_number: z.string().min(1).max(255).trim(),
      village: z.string().min(1).max(255).trim(),
      house_house_holding_number: z.string().max(255).trim().optional(),
      post_office: z.string().min(1).max(255).trim(),
      postal_code: z.string().max(255).trim().optional(),
    }),
    permanent_address: z.object({
      division: z.string().min(1).max(255).trim(),
      district: z.string().min(1).max(255).trim(),
      sub_district: z.string().min(1).max(255).trim(),
      union: z.string().min(1).max(255).trim(),
      ward_number: z.string().min(1).max(255).trim(),
      village: z.string().min(1).max(255).trim(),
      house_house_holding_number: z.string().max(255).trim().optional(),
      post_office: z.string().min(1).max(255).trim(),
      postal_code: z.string().max(255).trim().optional(),
    }),
    guardian_info: z
      .object({
        name: z.string(),
        nid: z.string().optional(),
        profession: z.string().optional(),
        relationship: z.string(),
        phone_number: z.string().optional(),
      })
      .optional(),
    educational_qualification: z.array(
      z.object({
        exam_name: z.string().min(1).max(255).trim(),
        board: z.string().min(1).max(255).trim(),
        institution: z.string().min(1).max(255).trim(),
        result: z.string().min(1).max(255).trim(),
        certificate_upload: z.string().max(255).trim().optional(),
      })
    ),
    previous_experience: z.array(
      z.object({
        institution: z.string().min(1).max(255).trim(),
        designation: z.string().min(1).max(255).trim(),
        subject: z.array(z.string().min(1).max(255).trim()),
        employment_period: z.string().min(1).max(255).trim(),
      })
    ),
    training_courses: z.array(
      z.object({
        course_name: z.string().min(1).max(255).trim(),
        course_subject: z.string().min(1).max(255).trim().optional(),
        course_duration: z.string().min(1).max(255).trim(),
        course_details: z.string().min(1).max(255).trim().optional(),
        certificate_upload: z.string().max(255).trim().optional(),
      })
    ),
    password: z.string(),
  }),
});

const updataAdmitionsData = z.object({
  body: z.object({
    admission_approved: z.enum([...YN_VALUES] as [string, ...string[]]),
  }),
});

export const TeacherValidation = {
  createTeacherZodSchema,
  updateTeacherZodSchema,
  updataAdmitionsData,
};
