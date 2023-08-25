import { Schema, model } from 'mongoose';

import { IStudent, StudentModel } from './interface.student';
import { CLASS_VALUES, GENDER_VALUES, MARITAL_STATUS_VALUES, RELIGION_VALUES, YN_VALUES } from './constant.student';

export const studentSchema = new Schema<IStudent, StudentModel>(
  {
    userId: { type: String, trim: true },
    student: {
      name_bangla: { type: String, trim: true },
      name_english: { type: String, trim: true },
      birth_registration_number: { type: String, trim: true },
      date_of_birth: { type: String, trim: true },
      birth_district: { type: String, trim: true },
      gender: { type: String, trim: true, enum: GENDER_VALUES},
      nationality: [{ type: String, trim: true }],
      religion: { type: String, trim: true, enum: RELIGION_VALUES},
      desired_class: {
        type: String,
        trim: true,
        enum: CLASS_VALUES,
      },
      marital_status: {
        type: String,
        trim: true,
        enum: MARITAL_STATUS_VALUES,
      },
      blood_group: { type: String, trim: true },
      minority_ethnicity: {
        type: String,
        trim: true,
        enum: YN_VALUES,
      },
      photo: { type: String, trim: true },
      previous_exam_info: [
        {
          class_name: {
            type: String,
            trim: true,
            enum: CLASS_VALUES,
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
    password:{ type: String, trim: true,min:6 }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Student = model<IStudent>('Student', studentSchema);
