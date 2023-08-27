import { Model } from 'mongoose';
import { yesNoType } from '../../interface/enumType';

export type classType =
  | 'প্রথম'
  | 'দ্বিতীয়'
  | 'তৃতীয়'
  | 'চতুর্থ'
  | 'পঞ্চম'
  | 'ষষ্ঠ'
  | 'সপ্তম'
  | 'অষ্টম'
  | 'নবম'
  | 'দশম';

export type genderType = 'পুরুষ' | 'মহিলা' | 'অন্যান্য';

export type religionType =
  | 'ইসলাম'
  | 'হিন্দুধর্ম'
  | 'বৌদ্ধধর্ম'
  | 'খ্রিস্টানধর্ম'
  | 'অন্য';

export type marital_status_type =
  | 'অবিবাহিত'
  | 'বিবাহিত'
  | 'তালাকপ্রাপ্ত'
  | 'বিপত্নীক/বিধবা';

export type bloodGroupType =
  | 'এ পজিটিভ'
  | 'এ নেগেটিভ'
  | 'বি পজিটিভ'
  | 'বি নেগেটিভ'
  | 'এবি পজিটিভ'
  | 'এবি নেগেটিভ'
  | 'এবি পজিটিভ'
  | 'এবি নেগেটিভ'
  | 'ও পজিটিভ'
  | 'ও নেগেটিভ';


export type ITeacher = {
  userId: string;
  password: string;
  admission_approved?: yesNoType;
  teacher_info: {
    name_bangla: string;
    name_english: string;
    birth_registration_number?: string;
    date_of_birth: string;
    birth_district: string;
    gender: genderType; //type of
    nationality: string;
    religion: religionType; //type of
    subject: string[];
    marital_status: marital_status_type; //type of
    blood_group?: bloodGroupType;//type of
    photo: string;
    minority_ethnicity: string;
    opinion?: string;
  };
  mother_info: {
    name_bangla: string;
    name_english: string;
    nid: string;
    date_of_birth: string;
    birth_registration?: string;
    phone_number?: string;
    profession: string;
    year_of_death: string;
  };
  father_info: {
    name_bangla: string;
    name_english: string;
    nid: string;
    date_of_birth: string;
    birth_registration?: string;
    phone_number: string;
    profession: string;
    year_of_death: string;
  };
  current_address: {
    division: string;
    district: string;
    sub_district: string;
    union: string;
    ward_number: string;
    // mouza: string;
    village: string;
    house_house_holding_number?: string;
    post_office: string;
    postal_code?: string;
  };
  permanent_address: {
    division: string;
    district: string;
    sub_district: string;
    union: string;
    ward_number: string;
    // mouza: string;
    village: string;
    house_house_holding_number?: string;
    post_office: string;
    postal_code?: string;
  };
  educational_qualification: {
    exam_name: string;
    board: string;
    institution: string;
    result: string;
    certificate_upload?: string;
  }[];
  previous_experience?: {
    institution: string;
    designation: string;
    subject: string[];
    employment_period: string;
  }[];
  training_courses?: {
    course_name: string;
    course_subject?: string;
    course_duration: string;
    course_details?: string;
    certificate_upload?: string;
  }[];
  guardian_info: {
    name: string;
    nid: string;
    profession: string;
    relationship: string;
    phone_number: string;
  };
  special_skills?: string[];
}


export type TeacherModel = Model<ITeacher, Record<string, unknown>>;

export type ITeacherFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};
