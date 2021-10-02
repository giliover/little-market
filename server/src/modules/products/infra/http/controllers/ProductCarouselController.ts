import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AddProductCarouselService from '@modules/products/services/AddProductCarouselService';

export default class ProductCarouselController {
  public async add(request: Request, response: Response): Promise<Response> {
    const { product_id } = <{ product_id: string }>request.headers;
    const addProductCarousel = container.resolve(AddProductCarouselService);
    const product = await addProductCarousel.execute({
      product_id,
      carouselFilename: request.file.filename,
    });

    return response.json(classToClass(product));
  }
}
