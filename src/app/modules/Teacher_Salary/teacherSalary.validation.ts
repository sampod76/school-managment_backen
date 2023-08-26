import { z } from 'zod';

const createTeacherSalaryZodSchema = z.object({
  body: z.object({
    teacher_name: z.string({
      required_error: 'Teacher Name is required',
    }),
    teacher_designation: z.string({
      required_error: 'Teacher designation is required',
    }),
    teacher_salary_scale: z.enum(['A','B'],{
      required_error: 'Teacher salary_scale is required',
    }),
    salary: z.string({
      required_error: 'Teacher salary is required',
    }),
    status: z.enum(['active', 'inactive'], {
      required_error: 'Status is required',
    }),
  }),
});

const updateTeacherSalaryZodSchema = z.object({
  body: z.object({
    teacher_name: z.string().optional(),
    teacher_designation: z.enum(['A', 'B']).optional(),
    teacher_salary_scale: z.string().optional(),
    salary: z.string().optional(),
    status: z.enum(['active', 'inactive']).optional(),
  }),
});

export const TeacherSalaryValidation = {
    createTeacherSalaryZodSchema,
    updateTeacherSalaryZodSchema,
};