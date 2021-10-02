import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { celebrate, Segments, Joi } from 'celebrate';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';
import _auth  from '../middlewares/_auth';
import role from '@config/role';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig.multer);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      role: Joi.string().valid(role.User).required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  _auth([role.Admin, role.User]),
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
