import { Types } from 'mongoose';

export type ITeacherSalary = {
  teacher_name: string;
  teacher_designation: string;
  teacher_salary_scale: 'A' | 'B';
  salary: string;
  //Reeference of Teacher Id
  user: Types.ObjectId;
  status: 'active' | 'inactive';
};
