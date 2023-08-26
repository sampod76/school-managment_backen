import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/book/book.route';
import { ClassRoutes } from '../modules/class/class.route';
import { FileUploadeRoute } from '../modules/fileUploade/route.fileUploade';
import { ExpenseRoutes } from '../modules/new_expense/newExpense.route';
import { EarningRoutes } from '../modules/new_income/newIncome.route';
import { SectionRoutes } from '../modules/section/section.route';
import { StudentRoutes } from '../modules/student/route.student';
import { UserRoutes } from '../modules/users/user.route';

//https://docs.google.com/document/d/1gTsTpFvhfZB-2y0_BbZQVzmbG3YwsZwPrwAbsYqpOzM/edit
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
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
    path: '/upload',
    route: FileUploadeRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
