import { z } from 'zod';
import {
  ENUM_BLOOD_GROUP_TYPE,
  ENUM_CLASS,
  ENUM_GENDER,
  ENUM_MARITAL_STATUS,
  ENUM_RELIGION,
  ENUM_YN,
} from '../../../enums/usersEnums';

const createStudentZodSchema = z.object({
  body: z.object({
    userId: z.string(),
    students: z.object({
      name_bangla: z.string(),
      name_english: z.string(),
      birth_registration_number: z.string().optional(),
      date_of_birth: z.string(),
      birth_district: z.string().optional(),
      gender: z
        .enum([...Object.values(ENUM_GENDER)] as [string, ...string[]])
        ,
      nationality: z.string().optional(),
      religion: z
        .enum([...Object.values(ENUM_RELIGION)] as [string, ...string[]])
        ,
      desired_class: z
        .enum([...Object.values(ENUM_CLASS)] as [string, ...string[]])
      ,
      marital_status: z
        .enum([...Object.values(ENUM_MARITAL_STATUS)] as [string, ...string[]])
       ,
      blood_group: z
        .enum([...Object.values(ENUM_BLOOD_GROUP_TYPE)] as [
          string,
          ...string[]
        ])
        .optional(),
      minority_ethnicity: z
        .enum([...Object.values(ENUM_YN)] as [string, ...string[]])
       ,
      photo: z.string().optional(),
      previous_exam_info: z
        .array(
          z.object({
            class_name: z
              .enum([...Object.values(ENUM_CLASS)] as [string, ...string[]])
              ,
            exam_name: z.string(),
            result: z.string(),
            exam_time: z.string().optional(),
            institution_name: z.string().optional(),
          })
        )
        .optional(),
      hobbies: z.array(z.string()).optional(),
      favorite_books: z.array(z.string()).optional(),
      financial_assistance_needed: z
        .enum([...Object.values(ENUM_YN)] as [string, ...string[]])
        ,
      opinion: z.string(),
    }),
    mother_info: z.object({
      name_bangla: z.string(),
      name_english: z.string(),
      nid: z.string(),
      date_of_birth: z.string(),
      birth_registration: z.string().optional(),
      phone_number: z.string().optional(),
      profession: z.string().optional(),
      year_of_death: z.string().optional(),
    }),
    father_info: z.object({
      name_bangla: z.string(),
      name_english: z.string(),
      nid: z.string(),
      date_of_birth: z.string(),
      birth_registration: z.string().optional(),
      phone_number: z.string().optional(),
      profession: z.string().optional(),
      year_of_death: z.string().optional(),
    }),
    address: z.object({
      division: z.string(),
      district: z.string(),
      sub_district: z.string(),
      city_corporation: z.string().optional(),
      union: z.string(),
      ward_number: z.string(),
      mouza: z.string().optional(),
      village: z.string(),
      house_house_holding_number: z.string().optional(),
      post_office: z.string(),
      postal_code: z.string(),
    }),
    guardianInfo: z
      .object({
        name: z.string(),
        nid: z.string().optional(),
        profession: z.string().optional(),
        relationship: z.string(),
        number: z.string().optional(),
      })
      .optional(),
      password:z.string()
  }),
});
const updateStudentZodSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    students: z.object({
      name_bangla: z.string().optional(),
      name_english: z.string().optional(),
      birth_registration_number: z.string().optional(),
      date_of_birth: z.string().optional(),
      birth_district: z.string().optional(),
      gender: z
        .enum([...Object.values(ENUM_GENDER)] as [string, ...string[]])
        .optional(),
      nationality: z.string().optional(),
      religion: z
        .enum([...Object.values(ENUM_RELIGION)] as [string, ...string[]])
        .optional(),
      desired_class: z
        .enum([...Object.values(ENUM_CLASS)] as [string, ...string[]])
        .optional(),
      marital_status: z
        .enum([...Object.values(ENUM_MARITAL_STATUS)] as [string, ...string[]])
        .optional(),
      blood_group: z
        .enum([...Object.values(ENUM_BLOOD_GROUP_TYPE)] as [
          string,
          ...string[]
        ])
        .optional(),
      minority_ethnicity: z
        .enum([...Object.values(ENUM_YN)] as [string, ...string[]])
        .optional(),
      photo: z.string().optional().optional(),
      previous_exam_info: z
        .array(
          z.object({
            class_name: z
              .enum([...Object.values(ENUM_CLASS)] as [string, ...string[]])
              .optional(),
            exam_name: z.string().optional(),
            result: z.string().optional(),
            exam_time: z.string().optional(),
            institution_name: z.string().optional(),
          })
        )
        .optional(),
      hobbies: z.array(z.string()).optional(),
      favorite_books: z.array(z.string()).optional(),
      financial_assistance_needed: z
        .enum([...Object.values(ENUM_YN)] as [string, ...string[]])
        .optional(),
      opinion: z.string(),
    }),
    mother_info: z.object({
      name_bangla: z.string().optional(),
      name_english: z.string().optional(),
      nid: z.string().optional(),
      date_of_birth: z.string().optional(),
      birth_registration: z.string().optional(),
      phone_number: z.string().optional(),
      profession: z.string().optional(),
      year_of_death: z.string().optional(),
    }),
    father_info: z.object({
      name_bangla: z.string().optional(),
      name_english: z.string().optional(),
      nid: z.string().optional(),
      date_of_birth: z.string().optional(),
      birth_registration: z.string().optional(),
      phone_number: z.string().optional(),
      profession: z.string().optional(),
      year_of_death: z.string().optional(),
    }),
    address: z.object({
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
    }),
    guardianInfo: z
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

export const StudentValidation = {
  createStudentZodSchema,
  updateStudentZodSchema,
};
