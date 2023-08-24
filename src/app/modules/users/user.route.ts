import express from 'express';
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
import validateRequestZod from '../../middlewares/validateRequestZod';
import { userController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

// router.get('/:id', authMiddleware(ENUM_USER_ROLE.ADMIN), userController.getSingleUser);
router.get('/', /* auth(ENUM_USER_ROLE.ADMIN), */ userController.getAllUsers);

router.post(
  '/create-user',
  validateRequestZod(UserValidation.createUserZodSchema),
  userController.createUser
);

// router.patch(
//   '/:id',
//   validateRequest(UserValidation.updateUserZodSchema),
//   auth(ENUM_USER_ROLE.ADMIN),
//   userController.updateUser
// );

// router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), userController.deleteUser);

export const UserRoutes = router;
