import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  name: string;
  code: string;
  unity: string;
  category: number;
  description: string;
  price: string;
  discount: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    code,
    name,
    unity,
    category,
    description,
    discount,
    price,
  }: IRequest): Promise<Product> {
    const checkProductExists = await this.productsRepository.findByCode(code);

    if (checkProductExists) {
      throw new AppError('Product already exist');
    }

    const product = await this.productsRepository.create({
      code,
      name,
      unity,
      category,
      description,
      discount,
      price,
    });

    return product;
  }
}

export default CreateProductService;
