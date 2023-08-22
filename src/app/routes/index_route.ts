import express from 'express';
// import { AuthRouter } from '../modules/auth/auth.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { FileUploadeRoute } from '../modules/fileUploade/route.fileUploade';
import { UserRoutes } from '../modules/user/user.route';

//https://docs.google.com/document/d/1gTsTpFvhfZB-2y0_BbZQVzmbG3YwsZwPrwAbsYqpOzM/edit
const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },

  {
    // only user login and refresh-token
    path: '/auth',
    route: AuthRoutes,
  },


  {
    path: '/upload',
    route: FileUploadeRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
