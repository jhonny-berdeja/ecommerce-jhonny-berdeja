import { CategoryEntity } from 'src/modules/categories/category.entity';
import { OrderDetailEntity } from 'src/modules/ordes/orderdetail.entity';
export declare class ProductEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: CategoryEntity;
    categoryId: string;
    orderDetails: OrderDetailEntity[];
}
