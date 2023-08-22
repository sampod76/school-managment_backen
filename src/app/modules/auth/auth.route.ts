import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
// import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

// router.post(
//   '/',
//   validateRequest(AuthValidation.loginZodSchema),
//   AuthController.loginAdmin
// );

router.post(
  '/login',
  validateRequestZod(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

router.post(
  '/refresh-token',
  validateRequestZod(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);

export const AuthRoutes = router;
