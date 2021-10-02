import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';
interface IRequest {
  name: string;
  code: string;
  unity: string;
  category: number;
  id: string;
  description: string;
  price: string;
  discount: string;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    id,
    name,
    unity,
    category,
    description,
    price,
    discount,
  }: IRequest): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    product.name = name;
    product.unity = unity;
    product.category = category;
    product.description = description;
    product.price = price;
    product.discount = discount;

    return this.productsRepository.save(product);
  }
}

export default UpdateProfileService;
