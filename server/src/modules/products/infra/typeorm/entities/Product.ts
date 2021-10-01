import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import uploadConfig from '@config/upload';
import { Expose } from 'class-transformer';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;

  @Column()
  unity: string;

  @Column()
  category: number;

  @Column()
  description: string;

  @Column({ type: 'real' })
  price: string;

  @Column("text", { array: true, default: "{}" })
  carousel: string[];

  @Column({ type: 'real' })
  discount: string;

  @Expose({ name: 'carousel_urls' })
  getCarouselUrl(): string[] | null {
    if (!this.carousel) return null;

    switch (uploadConfig.driver) {
      case 'disk':
        let CAROUSELARRAY = this.carousel.map(
          filename => `${process.env.APP_API_URL}/files/${filename}`,
        );
        return CAROUSELARRAY;
      case 's3':
        CAROUSELARRAY = this.carousel.map(
          filename =>
            `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${filename}`,
        );
        return CAROUSELARRAY;
      default:
        return null;
    }
  }
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
