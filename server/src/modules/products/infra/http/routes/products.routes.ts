import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ProductsController from '../controllers/ProductsController';
import role from '@config/role';
import _auth from '@modules/users/infra/http/middlewares/_auth';
import uploadConfig from '@config/upload';
import ProductCarouselController from '../controllers/ProductCarouselController';
import multer from 'multer';

const productsRouter = Router();
const productsController = new ProductsController();
const productCarouselController = new ProductCarouselController();
const upload = multer(uploadConfig.multer);

productsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      code: Joi.string().required(),
      unity: Joi.string().required(),
      description: Joi.string().required(),
      category: Joi.number().required(),
      price: Joi.number().required(),
      discount: Joi.number().required(),
    },
  }),
  productsController.create,
);

productsRouter.patch(
  '/carousel',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      product_id: Joi.string().required(),
    }).unknown(),
  }),
  _auth([role.Admin]),
  upload.single('carousel'),
  productCarouselController.add,
);

export default productsRouter;
