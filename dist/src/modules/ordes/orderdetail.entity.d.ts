import { OrderEntity } from 'src/modules/ordes/order.entity';
import { ProductEntity } from 'src/modules/products/product.entity';
export declare class OrderDetailEntity {
    id: string;
    price: number;
    order: OrderEntity;
    order_id: string;
    products: ProductEntity[];
}
