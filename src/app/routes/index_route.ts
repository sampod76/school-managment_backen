import express from 'express';
// import { AuthRouter } from '../modules/auth/auth.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BookRoutes } from '../modules/book/book.route';
import { ClassRoutes } from '../modules/class/class.route';
import { FileUploadeRoute } from '../modules/fileUploade/route.fileUploade';
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
    // only user login and refresh-token
    path: '/auth',
    route: AuthRoutes,
  },
  {
    // only user login and refresh-token
    path: '/section',
    route: SectionRoutes,
  },
  {
    // only user login and refresh-token
    path: '/class',
    route: ClassRoutes,
  },
  {
    // only user login and refresh-token
    path: '/book',
    route: BookRoutes,
  },
  {
    path: '/upload',
    route: FileUploadeRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
