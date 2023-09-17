"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsAttendanceValidation = void 0;
const zod_1 = require("zod");
const userConstant_1 = require("../../../constant/userConstant");
const createStudentsAttendanceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        classInfo: zod_1.z.object({
            name: zod_1.z.string({ required_error: "শ্রেণীর নাম অবশ্যই দিতে হবে" }).trim(),
            class: zod_1.z.string().trim().optional(),
        }),
        section: zod_1.z.object({
            name: zod_1.z.string().trim().optional(),
            section: zod_1.z.string().trim().optional(),
        }).optional(),
        date: zod_1.z.string({ required_error: "তারিখ অবশ্যই দিতে হবে" }).trim(),
        students: zod_1.z.array(zod_1.z.object({
            student_userId: zod_1.z.string({ required_error: "শিক্ষার্থীর ইউজার আইডি অবশ্যই দিতে হবে" }).trim(),
            student: zod_1.z.string({ required_error: "শিক্ষার্থীর ডাটা আইডি অবশ্যই দিতে হবে" }).trim(),
            attendance: zod_1.z.enum([...userConstant_1.YN_VALUES]).optional(),
        })),
    }),
});
const updateStudentsAttendanceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        classInfo: zod_1.z.object({
            name: zod_1.z.string().trim().optional(),
            class: zod_1.z.string().trim().optional(),
        }),
        section: zod_1.z.object({
            name: zod_1.z.string().trim().optional(),
            section: zod_1.z.string().trim().optional(),
        }),
        date: zod_1.z.string().trim().optional(),
        students: zod_1.z.array(zod_1.z.object({
            student_userId: zod_1.z.string().trim().optional(),
            student: zod_1.z.string().trim().optional(),
            attendance: zod_1.z.enum([...userConstant_1.YN_VALUES]).optional(),
        })),
    }),
});
exports.StudentsAttendanceValidation = {
    createStudentsAttendanceZodSchema,
    updateStudentsAttendanceZodSchema,
};
