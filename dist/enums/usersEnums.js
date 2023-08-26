"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUM_BLOOD_GROUP_TYPE = exports.ENUM_CLASS = exports.ENUM_MARITAL_STATUS = exports.ENUM_RELIGION = exports.ENUM_YN = exports.ENUM_GENDER = exports.ENUM_USER_ROLE = void 0;
var ENUM_USER_ROLE;
(function (ENUM_USER_ROLE) {
    ENUM_USER_ROLE["SUPER_ADMIN"] = "super-admin";
    ENUM_USER_ROLE["ADMIN"] = "admin";
    ENUM_USER_ROLE["TEACHER"] = "teacher";
    ENUM_USER_ROLE["STUDENT"] = "student";
})(ENUM_USER_ROLE || (exports.ENUM_USER_ROLE = ENUM_USER_ROLE = {}));
var ENUM_GENDER;
(function (ENUM_GENDER) {
    ENUM_GENDER["MALE"] = "\u09AA\u09C1\u09B0\u09C1\u09B7";
    ENUM_GENDER["FEMALE"] = "\u09AE\u09B9\u09BF\u09B2\u09BE";
    ENUM_GENDER["OTHER"] = "\u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF";
})(ENUM_GENDER || (exports.ENUM_GENDER = ENUM_GENDER = {}));
var ENUM_YN;
(function (ENUM_YN) {
    ENUM_YN["YES"] = "\u09B9\u09CD\u09AF\u09BE\u0981";
    ENUM_YN["NO"] = "\u09A8\u09BE";
})(ENUM_YN || (exports.ENUM_YN = ENUM_YN = {}));
var ENUM_RELIGION;
(function (ENUM_RELIGION) {
    ENUM_RELIGION["ISLAM"] = "\u0987\u09B8\u09B2\u09BE\u09AE";
    ENUM_RELIGION["HINDUISM"] = "\u09B9\u09BF\u09A8\u09CD\u09A6\u09C1\u09A7\u09B0\u09CD\u09AE";
    ENUM_RELIGION["BUDDHISM"] = "\u09AC\u09CC\u09A6\u09CD\u09A7\u09A7\u09B0\u09CD\u09AE";
    ENUM_RELIGION["CHRISTIANITY"] = "\u0996\u09CD\u09B0\u09BF\u09B8\u09CD\u099F\u09BE\u09A8\u09A7\u09B0\u09CD\u09AE";
    ENUM_RELIGION["OTHER"] = "\u0985\u09A8\u09CD\u09AF";
})(ENUM_RELIGION || (exports.ENUM_RELIGION = ENUM_RELIGION = {}));
var ENUM_MARITAL_STATUS;
(function (ENUM_MARITAL_STATUS) {
    ENUM_MARITAL_STATUS["UNMARRIED"] = "\u0985\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4";
    ENUM_MARITAL_STATUS["MARRIED"] = "\u09AC\u09BF\u09AC\u09BE\u09B9\u09BF\u09A4";
    ENUM_MARITAL_STATUS["DIVORCED"] = "\u09A4\u09BE\u09B2\u09BE\u0995\u09AA\u09CD\u09B0\u09BE\u09AA\u09CD\u09A4";
    ENUM_MARITAL_STATUS["WIDOWED"] = "\u09AC\u09BF\u09AA\u09A4\u09CD\u09A8\u09C0\u0995/\u09AC\u09BF\u09A7\u09AC\u09BE";
})(ENUM_MARITAL_STATUS || (exports.ENUM_MARITAL_STATUS = ENUM_MARITAL_STATUS = {}));
var ENUM_CLASS;
(function (ENUM_CLASS) {
    ENUM_CLASS["ONE"] = "\u09AA\u09CD\u09B0\u09A5\u09AE";
    ENUM_CLASS["TWO"] = "\u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC";
    ENUM_CLASS["THREE"] = "\u09A4\u09C3\u09A4\u09C0\u09AF\u09BC";
    ENUM_CLASS["FOUR"] = "\u099A\u09A4\u09C1\u09B0\u09CD\u09A5";
    ENUM_CLASS["FIVE"] = "\u09AA\u099E\u09CD\u099A\u09AE";
    ENUM_CLASS["SIX"] = "\u09B7\u09B7\u09CD\u09A0";
    ENUM_CLASS["SEVEN"] = "\u09B8\u09AA\u09CD\u09A4\u09AE";
    ENUM_CLASS["EIGHT"] = "\u0985\u09B7\u09CD\u099F\u09AE";
    ENUM_CLASS["NINE"] = "\u09A8\u09AC\u09AE";
    ENUM_CLASS["TEN"] = "\u09A6\u09B6\u09AE";
})(ENUM_CLASS || (exports.ENUM_CLASS = ENUM_CLASS = {}));
var ENUM_BLOOD_GROUP_TYPE;
(function (ENUM_BLOOD_GROUP_TYPE) {
    ENUM_BLOOD_GROUP_TYPE["A_POSITIVE"] = "\u098F \u09AA\u099C\u09BF\u099F\u09BF\u09AD";
    ENUM_BLOOD_GROUP_TYPE["A_NEGATIVE"] = "\u098F \u09A8\u09C7\u0997\u09C7\u099F\u09BF\u09AD";
    ENUM_BLOOD_GROUP_TYPE["B_POSITIVE"] = "\u09AC\u09BF \u09AA\u099C\u09BF\u099F\u09BF\u09AD";
    ENUM_BLOOD_GROUP_TYPE["B_NEGATIVE"] = "\u09AC\u09BF \u09A8\u09C7\u0997\u09C7\u099F\u09BF\u09AD";
    ENUM_BLOOD_GROUP_TYPE["AB_POSITIVE"] = "\u098F\u09AC\u09BF \u09AA\u099C\u09BF\u099F\u09BF\u09AD";
    ENUM_BLOOD_GROUP_TYPE["AB_NEGATIVE"] = "\u098F\u09AC\u09BF \u09A8\u09C7\u0997\u09C7\u099F\u09BF\u09AD";
    ENUM_BLOOD_GROUP_TYPE["O_POSITIVE"] = "\u0993 \u09AA\u099C\u09BF\u099F\u09BF\u09AD";
    ENUM_BLOOD_GROUP_TYPE["O_NEGATIVE"] = "\u0993 \u09A8\u09C7\u0997\u09C7\u099F\u09BF\u09AD";
})(ENUM_BLOOD_GROUP_TYPE || (exports.ENUM_BLOOD_GROUP_TYPE = ENUM_BLOOD_GROUP_TYPE = {}));
// export const ENUM_USER_ROLE = {
//   SUPER_ADMIN: 'super-admin',
//   ADMIN: 'admin',
//   TEACHER: 'teacher',
//   STUDENT: "student",
// };
// export const ENUM_GENDER = {
//   MALE: 'পুরুষ',
//   FEMALE: 'মহিলা',
//   OTHER: 'অন্যান্য',
// };
// export const ENUM_YN = {
//   YES: 'হ্যাঁ',
//   NO: 'না',
// };
// export const ENUM_RELIGION = {
//   ISLAM: 'ইসলাম',
//   HINDUISM: 'হিন্দুধর্ম',
//   BUDDHISM: 'বৌদ্ধধর্ম',
//   CHRISTIANITY: 'খ্রিস্টানধর্ম',
//   OTHER: 'অন্য',
// };
// export const ENUM_MARITAL_STATUS = {
//   UNMARRIED: 'অবিবাহিত',
//   MARRIED: 'বিবাহিত',
//   DIVORCED: 'তালাকপ্রাপ্ত',
//   WIDOWED: 'বিপত্নীক/বিধবা',
// };
// export const ENUM_CLASS = {
//   ONE: 'প্রথম',
//   TWO: 'দ্বিতীয়',
//   THREE: 'তৃতীয়',
//   FOUR: 'চতুর্থ',
//   FIVE: 'পঞ্চম',
//   SIX: 'ষষ্ঠ',
//   SEVEN: 'সপ্তম',
//   EIGHT: 'অষ্টম',
//   NINE: 'নবম',
//   TEN: 'দশম',
// };
// export const ENUM_BLOOD_GROUP_TYPE = {
//   A_POSITIVE : "এ পজিটিভ",
//   A_NEGATIVE : "এ নেগেটিভ",
//   B_POSITIVE : "বি পজিটিভ",
//   B_NEGATIVE : "বি নেগেটিভ",
//   AB_POSITIVE : "এবি পজিটিভ",
//   AB_NEGATIVE : "এবি নেগেটিভ",
//   O_POSITIVE : "ও পজিটিভ",
//   O_NEGATIVE : "ও নেগেটিভ",
// };
