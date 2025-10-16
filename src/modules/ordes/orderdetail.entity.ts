import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { OrderEntity } from 'src/modules/ordes/order.entity';
import { ProductEntity } from 'src/modules/products/product.entity';

@Entity('order_details')
export class OrderDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  price: number;

  @OneToOne(() => OrderEntity, (order) => order.orderDetail)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @Column()
  order_id: string;

  @ManyToMany(() => ProductEntity, (product) => product.orderDetails)
  products: ProductEntity[];
}
