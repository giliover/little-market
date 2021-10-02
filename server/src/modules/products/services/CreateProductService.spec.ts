import AppError from '@shared/errors/AppError';
import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import CreateProductService from './CreateProductService';

let fakeProductsRepository: FakeProductsRepository;
let createProduct: CreateProductService;

describe('CreateProduct', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    createProduct = new CreateProductService(fakeProductsRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createProduct.execute({
      code: '001',
      name: 'Bombom',
      unity: 'UN',
      category: 1,
      description: 'description',
      price: '20.5',
      discount: '0.2',
    });

    expect(user).toHaveProperty('id');
  });

  it('should be able to create a new user with same from another', async () => {
    const user = await createProduct.execute({
      code: '001',
      name: 'Bombom',
      unity: 'UN',
      category: 1,
      description: 'description',
      price: '20.5',
      discount: '0.2',
    });

    expect(user).toHaveProperty('id');

    await expect(
      createProduct.execute({
        code: '001',
        name: 'Bombom',
        unity: 'UN',
        category: 1,
        description: 'description',
        price: '20.5',
        discount: '0.2',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
