import { z } from 'zod';
import { YN_VALUES } from '../../../constant/userConstant';

const createTeachersAttendanceZodSchema = z.object({
  body: z.object({
   
    date: z.string({required_error:"তারিখ অবশ্যই দিতে হবে"}).trim(),
   teachers: z.array(
      z.object({
       teacher_userId: z.string({required_error:"শিক্ষার্থীর ইউজার আইডি অবশ্যই দিতে হবে"}).trim(),
       teacher: z.string({required_error:"শিক্ষার্থীর ডাটা আইডি অবশ্যই দিতে হবে"}).trim(),
        attendance:z.enum([...YN_VALUES] as [string, ...string[]]).optional(),
      })
    ),
  }),
});

const updateTeachersAttendanceZodSchema = z.object({
  body: z.object({
  
    date: z.string().trim().optional(),
    teachers: z.array(
      z.object({
        teacher_userId: z.string().trim().optional(),
        teacher: z.string().trim().optional(),
        attendance: z.enum([...YN_VALUES] as [string, ...string[]]).optional(),
      })
    ),
  }),
});

export const TeachersAttendanceValidation = {
  createTeachersAttendanceZodSchema,
  updateTeachersAttendanceZodSchema,
};
