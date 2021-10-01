import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import UpdateProductService from './UpdateProductService';

let fakeProductsRepository: FakeProductsRepository;
let updateProductService: UpdateProductService;

describe('UpdateProductProduct', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();

    updateProductService = new UpdateProductService(fakeProductsRepository);
  });

  it('should be able to create the product product', async () => {
    const product = await fakeProductsRepository.create({
      code: '002',
      name: 'Arroz',
      unity: 'UN',
      category: 0,
      description: 'description0',
      price: '20.5',
      discount: '0.2',
    });

    expect(product).toHaveProperty('id');
  });
  it('should be able to update the product without change the code and id', async () => {
    const product = await fakeProductsRepository.create({
      code: '002',
      name: 'Arroz',
      unity: 'UN',
      category: 1,
      description: 'description0',
      price: '20.5',
      discount: '0.2',
    });

    const updatedProduct = await updateProductService.execute({
      id: product.id,
      code: product.code,
      name: 'Bombom',
      unity: 'UN',
      category: 2,
      description: 'description1',
      price: '20.5',
      discount: '0.2',
    });

    expect(updatedProduct).toEqual({
      id: product.id,
      carousel: [],
      code: product.code,
      name: 'Bombom',
      unity: 'UN',
      category: 2,
      description: 'description1',
      price: '20.5',
      discount: '0.2',
    });
  });
});
