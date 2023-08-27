import { Schema, model } from 'mongoose';
import {
  BLOOD_GROUP_TYPE_VALUES,
  GENDER_VALUES,
  MARITAL_STATUS_VALUES,
  RELIGION_VALUES,
  YN_VALUES,
} from '../../../constant/userConstant';
import { ITeacher, TeacherModel } from './interface.teacher';

export const teacherSchema = new Schema<ITeacher, TeacherModel>(
  {
    password: { type: String, trim: true },
    admission_approved: { type: String, trim: true }, // Assuming `yesNoType` is a string-based type
    teacher_info: {
      name_bangla: { type: String, trim: true },
      name_english: { type: String, trim: true },
      birth_registration_number: { type: String, trim: true },
      date_of_birth: { type: String, trim: true },
      birth_district: { type: String, trim: true },
      gender: { type: String, trim: true, enum: GENDER_VALUES }, // Assuming `genderType` is a string-based type
      nationality: { type: String, trim: true },
      religion: { type: String, trim: true, enum: RELIGION_VALUES }, // Assuming `religionType` is a string-based type
      subject: [String],
      marital_status: { type: String, trim: true, enum: MARITAL_STATUS_VALUES }, // Assuming `marital_status_type` is a string-based type
      blood_group: { type: String, trim: true, enum: BLOOD_GROUP_TYPE_VALUES }, // Assuming `bloodGroupType` is a string-based type
      photo: { type: String, trim: true },
      minority_ethnicity: { type: String, trim: true, enum: YN_VALUES },
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
        employment_period: { type: String, trim: true },
      },
    ],

    training_courses: [
      {
        course_name: { type: String, trim: true },
        course_subject: { type: String, trim: true },
        course_duration: { type: String, trim: true },
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Teacher = model<ITeacher>('Teacher', teacherSchema);
