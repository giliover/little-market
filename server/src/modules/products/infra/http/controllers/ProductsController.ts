import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateProductService from '@modules/products/services/CreateProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      code,
      name,
      unity,
      category,
      description,
      discount,
      price,
    } = request.body;
    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      code,
      name,
      unity,
      category,
      description,
      discount,
      price,
    });

    return response.json(classToClass(product));
  }
}
