import express from 'express';
// import { AuthRouter } from '../modules/auth/auth.route';
import { FileUploadeRoute } from '../modules/fileUploade/route.fileUploade';

//https://docs.google.com/document/d/1gTsTpFvhfZB-2y0_BbZQVzmbG3YwsZwPrwAbsYqpOzM/edit
const router = express.Router();

const moduleRoutes = [
  // {
  //   path: '/users',
  //   route: UserRoute,
  // },



  // {
  //   // only user login and refresh-token
  //   path: '/auth',
  //   route: AuthRouter,
  // },
  
  {
    path: '/upload',
    route: FileUploadeRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
