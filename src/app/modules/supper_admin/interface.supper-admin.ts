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

export type IPreviousExamInfo = {
  class_name: classType; //type of
  exam_name: string;
  result: string;
  exam_time?: string;
  institution_name?: string;
};

export type IStudent = {
  userId: string;
  teacher: {
    name_bangla: string;
    name_english: string;
    birth_registration_number?: string;
    date_of_birth: string;
    birth_district?: string;
    gender: string;
    nationality?: string;
    religion: religionType; //type of
    desired_class: classType; //type of
    marital_status?: marital_status_type; //type of
    blood_group?: bloodGroupType; //type of
    minority_ethnicity: yesNoType; //yes , no
    photo?: string;
    previous_exam_info?: IPreviousExamInfo[];
    // previous_exam_info?: {
    //   class_name: classType;
    //   exam_name: string;
    //   result: string;
    //   exam_time?: string;
    //   institution_name?: string;
    // }[];
    hobbies?: string[];
    favorite_books?: string[];
    financial_assistance_needed?: yesNoType; //type of
    opinion: string;
  };
  mother_info: {
    name_bangla: string;
    name_english: string;
    nid: string;
    date_of_birth: string;
    birth_registration?: string;
    phone_number?: string;
    profession?: string;
    year_of_death?: string;
  };
  father_info: {
    name_bangla: string;
    name_english: string;
    nid: string;
    date_of_birth: string;
    birth_registration?: string;
    phone_number?: string;
    profession?: string;
    year_of_death?: string;
  };
  address: {
    division: string;
    district: string;
    sub_district: string;
    city_corporation?: string;
    union: string;
    ward_number: string;
    mouza?: string;
    village: string;
    house_house_holding_number?: string;
    post_office: string;
    postal_code: string;
  };
  other_guardian_info?: {
    name: string;
    nid?: string;
    profession?: string;
    relationship: string;
    number?: string;
  };
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;

export type IStudentFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};
