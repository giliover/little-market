import { uuid } from 'uuidv4';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import Product from '../../infra/typeorm/entities/Product';

class FakeProductsRepository implements IProductsRepository {
  private products: Product[] = [];

  public async findByCode(code: string): Promise<Product | undefined> {
    const findProduct = this.products.find(product => product.code === code);

    return findProduct;
  }
  public async findById(id: string): Promise<Product | undefined> {
    const findProduct = this.products.find(product => product.id === id);

    return findProduct;
  }

  public async create(productData: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, { id: uuid() }, productData);

    product.carousel = [];

    this.products.push(product);

    return product;
  }

  public async save(product: Product): Promise<Product> {
    const findIndex = this.products.findIndex(
      findProduct => findProduct.id === product.id,
    );

    this.products[findIndex] = product;

    return product;
  }
}

export default FakeProductsRepository;
