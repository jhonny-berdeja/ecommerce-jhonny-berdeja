import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CategoryEntity } from 'src/modules/categories/category.entity';
import { OrderDetailEntity } from 'src/modules/ordes/orderdetail.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({
    type: 'varchar',
    nullable: true,
    default: 'default_product_image.jpg',
  })
  imgUrl: string;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;

  @Column()
  categoryId: string;

  @ManyToMany(() => OrderDetailEntity, (orderDetail) => orderDetail.products)
  @JoinTable({ name: 'product_order_details' })
  orderDetails: OrderDetailEntity[];
}
