import { Schema, model } from 'mongoose';
import { STATUS } from '../../interface/enumType';
import { ITeacherSalary } from './teacherSalary.interface';
const teacherSalarySchema = new Schema<ITeacherSalary>(
  {
    teacher_name: {
      type: String,
      required: true,
    },
    teacher_designation: {
      type: String,
      required: true,
    },
    teacher_salary_scale: {
      type: String,
      enum:['A','B'],
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum:STATUS,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

export const TeacherSalaryModel = model<ITeacherSalary>('Teacher_Salary', teacherSalarySchema);