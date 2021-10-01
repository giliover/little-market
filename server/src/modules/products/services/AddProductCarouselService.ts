import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  product_id: string;
  carouselFilename: string;
}

@injectable()
class UpdateProductAvatarService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    product_id,
    carouselFilename,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(product_id);

    if (!product) {
      throw new AppError('Product not found', 401);
    }

    if (!product.carousel) {
      product.carousel = [];
    }

    if (product.carousel.length > 5) {
      throw new AppError('Max limit of 5 images', 401);
    }

    const filename = await this.storageProvider.saveFile(carouselFilename);

    product.carousel.push(filename);

    await this.productsRepository.save(product);

    return product;
  }
}

export default UpdateProductAvatarService;
