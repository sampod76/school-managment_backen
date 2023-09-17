"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachersAttendanceValidation = void 0;
const zod_1 = require("zod");
const userConstant_1 = require("../../../constant/userConstant");
const createTeachersAttendanceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.string({ required_error: "তারিখ অবশ্যই দিতে হবে" }).trim(),
        teachers: zod_1.z.array(zod_1.z.object({
            teacher_userId: zod_1.z.string({ required_error: "শিক্ষার্থীর ইউজার আইডি অবশ্যই দিতে হবে" }).trim(),
            teacher: zod_1.z.string({ required_error: "শিক্ষার্থীর ডাটা আইডি অবশ্যই দিতে হবে" }).trim(),
            attendance: zod_1.z.enum([...userConstant_1.YN_VALUES]).optional(),
        })),
    }),
});
const updateTeachersAttendanceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.string().trim().optional(),
        teachers: zod_1.z.array(zod_1.z.object({
            teacher_userId: zod_1.z.string().trim().optional(),
            teacher: zod_1.z.string().trim().optional(),
            attendance: zod_1.z.enum([...userConstant_1.YN_VALUES]).optional(),
        })),
    }),
});
exports.TeachersAttendanceValidation = {
    createTeachersAttendanceZodSchema,
    updateTeachersAttendanceZodSchema,
};
