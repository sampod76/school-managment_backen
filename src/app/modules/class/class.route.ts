import express from 'express';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { classController } from './class.controller';
import { ClassValidation } from './class.validation';
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

// router.get('/:id', authMiddleware(ENUM_USER_ROLE.ADMIN), userController.getSingleUser);
// router.get('/', auth(ENUM_USER_ROLE.ADMIN), userController.getAllUsers);

router.post(
  '/create-class',
  validateRequestZod(ClassValidation.createClassZodSchema),
  classController.createClass
);

// router.patch(
//   '/:id',
//   validateRequest(UserValidation.updateUserZodSchema),
//   auth(ENUM_USER_ROLE.ADMIN),
//   userController.updateUser
// );

// router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), userController.deleteUser);

export const ClassRoutes = router;
