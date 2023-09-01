import express from 'express';
import { TeacherSalaryRoute } from '../modules/Teacher_Salary/teacherSalary.route';
import { WorkScheduleRoute } from '../modules/WorkSchedule/workSchedule.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/book/book.route';
import { ClassRoutes } from '../modules/class/class.route';
import { EventsRoute } from '../modules/event/event.route';
import { FileUploadeRoute } from '../modules/fileUploade/route.fileUploade';
import { ExpenseRoutes } from '../modules/new_expense/newExpense.route';
import { EarningRoutes } from '../modules/new_income/newIncome.route';
import { NoticeRoutes } from '../modules/notices/route.notices';
import { SectionRoutes } from '../modules/section/section.route';
import { StudentRoutes } from '../modules/student/route.student';
import { TeacherRoutes } from '../modules/teacher/route.teacher';
import { UserRoutes } from '../modules/users/user.route';
import { WorkPlanRoute } from '../modules/work-plan/workPlan.route';

//https://docs.google.com/document/d/1gTsTpFvhfZB-2y0_BbZQVzmbG3YwsZwPrwAbsYqpOzM/edit
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  //sampod
  {
    path: '/students',
    route: StudentRoutes,
  },
  //sampod
  {
    path: '/teachers',
    route: TeacherRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/section',
    route: SectionRoutes,
  },
  {
    path: '/classes',
    route: ClassRoutes,
  },
  {
    path: '/income',
    route: EarningRoutes,
  },
  {
    path: '/expense',
    route: ExpenseRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/teacher_salary',
    route: TeacherSalaryRoute,
  },
  {
    path: '/work_schedule',
    route: WorkScheduleRoute,
  },
  {
    path: '/work_plan',
    route: WorkPlanRoute,
  },
  {
    path: '/events',
    route: EventsRoute,
  },
  //sampod
  {
    path: '/notices',
    route: NoticeRoutes,
  },
  {
    path: '/upload',
    route: FileUploadeRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
