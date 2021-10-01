import AppError from '@shared/errors/AppError';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeProductsRepository from '../repositories/fakes/FakeProductsRepository';
import AddProductCarouselService from './AddProductCarouselService';

let fakeProductsRepository: FakeProductsRepository;
let fakeStorageProvider: FakeStorageProvider;
let addProductCarousel: AddProductCarouselService;

describe('AddProductCarousel', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    fakeStorageProvider = new FakeStorageProvider();

    addProductCarousel = new AddProductCarouselService(
      fakeProductsRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to add carousel product', async () => {
    const product = await fakeProductsRepository.create({
      code: '001',
      name: 'Bombom',
      unity: 'UN',
      category: 1,
      description: 'description',
      price: '20.5',
      discount: '0.2',
    });

    await addProductCarousel.execute({
      product_id: product.id,
      carouselFilename: 'carousel.jpg',
    });

    expect(product.carousel).toStrictEqual(['carousel.jpg']);
  });

  it('should not be able to update carousel from non existing product', async () => {
    await expect(
      addProductCarousel.execute({
        product_id: 'non-existing-product',
        carouselFilename: 'carousel.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should accumulate the new carousel without deleting the old carousel', async () => {
    const product = await fakeProductsRepository.create({
      code: '001',
      name: 'Bombom',
      unity: 'UN',
      category: 1,
      description: 'description',
      price: '20.5',
      discount: '0.2',
    });

    await addProductCarousel.execute({
      product_id: product.id,
      carouselFilename: 'carousel1.jpg',
    });

    await addProductCarousel.execute({
      product_id: product.id,
      carouselFilename: 'carousel2.jpg',
    });

    expect(product.carousel).toStrictEqual(['carousel1.jpg', 'carousel2.jpg']);
  });
});
