import { z } from 'zod';
import { YN_VALUES } from '../../../constant/userConstant';

const createStudentsAttendanceZodSchema = z.object({
  body: z.object({
    classInfo: z.object({
      name: z.string({required_error:"শ্রেণীর নাম অবশ্যই দিতে হবে"}).trim(),
      class: z.string().trim().optional(),
    }),
    section: z.object({
      name: z.string().trim().optional(),
      section: z.string().trim().optional(),
    }).optional(),
    date: z.string({required_error:"তারিখ অবশ্যই দিতে হবে"}).trim(),
    students: z.array(
      z.object({
        student_userId: z.string({required_error:"শিক্ষার্থীর ইউজার আইডি অবশ্যই দিতে হবে"}).trim(),
        student: z.string({required_error:"শিক্ষার্থীর ডাটা আইডি অবশ্যই দিতে হবে"}).trim(),
        attendance: z.enum([...YN_VALUES] as [string, ...string[]]).optional(),
      })
    ),
  }),
});

const updateStudentsAttendanceZodSchema = z.object({
  body: z.object({
    classInfo: z.object({
      name: z.string().trim().optional(),
      class: z.string().trim().optional(),
    }),
    section: z.object({
      name: z.string().trim().optional(),
      section: z.string().trim().optional(),
    }),
    date: z.string().trim().optional(),
    students: z.array(
      z.object({
        student_userId: z.string().trim().optional(),
        student: z.string().trim().optional(),
        attendance: z.enum([...YN_VALUES] as [string, ...string[]]).optional(),
      })
    ),
  }),
});

export const StudentsAttendanceValidation = {
  createStudentsAttendanceZodSchema,
  updateStudentsAttendanceZodSchema,
};
