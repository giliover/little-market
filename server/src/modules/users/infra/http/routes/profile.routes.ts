import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ProfileController from '../controllers/ProfileController';
import _auth from '../middlewares/_auth';
import role from '@config/role';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }),
  _auth([role.Admin, role.User]),
  profileController.update,
);
profileRouter.get('/', profileController.show);

export default profileRouter;
