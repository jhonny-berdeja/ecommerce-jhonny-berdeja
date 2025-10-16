import { OrderEntity } from './order.entity';
import { Repository } from 'typeorm';
import { UsersRepository } from 'src/modules/users/users.repository';
import { ProductsRepository } from 'src/modules/products/products.repository';
import { OrderDetailEntity } from './orderdetail.entity';
import { ProductEntity } from 'src/modules/products/product.entity';
import { UserEntity } from 'src/modules/users/user.entity';
export declare class OrdersRepository {
    private productsRepository;
    private usersRepository;
    private ordersRepository;
    private orderDetailRepository;
    constructor(productsRepository: ProductsRepository, usersRepository: UsersRepository, ordersRepository: Repository<OrderEntity>, orderDetailRepository: Repository<OrderDetailEntity>);
    getOrderById(id: string): Promise<OrderEntity>;
    subtractOneToStock(productsId: string[]): Promise<[number, ProductEntity[]]>;
    saveUserInOrder(user: UserEntity): Promise<OrderEntity>;
    buildOrderDetailEntity(order: OrderEntity, products: ProductEntity[], total: number): OrderDetailEntity;
    addOrder(userId: string, productsId: string[]): Promise<OrderEntity>;
}
