import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderEntity } from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersRepository } from 'src/modules/users/users.repository';
import { ProductsRepository } from 'src/modules/products/products.repository';
import { OrderDetailEntity } from './orderdetail.entity';
import { ProductEntity } from 'src/modules/products/product.entity';
import { UserEntity } from 'src/modules/users/user.entity';

@Injectable()
export class OrdersRepository {
  constructor(
    private productsRepository: ProductsRepository,
    private usersRepository: UsersRepository,
    @InjectRepository(OrderEntity)
    private ordersRepository: Repository<OrderEntity>,
    @InjectRepository(OrderDetailEntity)
    private orderDetailRepository: Repository<OrderDetailEntity>,
  ) {}

  async getOrderById(id: string): Promise<OrderEntity> {
    const order = await this.ordersRepository.findOne({
      where: { id },
      relations: {
        user: true,
        orderDetail: {
          products: {
            category: true,
          },
        },
      },
    });

    if (!order) {
      throw new BadRequestException(`No existe la orden con id ${id}`);
    }
    return order;
  }

  async subtractOneToStock(
    productsId: string[],
  ): Promise<[number, ProductEntity[]]> {
    const productsWithStockGreaterThanZero =
      await this.productsRepository.getProductsWithStockGreaterThanZero(
        productsId,
      );

    const total = this.productsRepository.calculateTotalCost(
      productsWithStockGreaterThanZero,
    );

    const updatedProducts = productsWithStockGreaterThanZero.map(
      async (product) =>
        await this.productsRepository.subtractOneToStock(product),
    );

    return [total, await Promise.all(updatedProducts)];
  }

  async saveUserInOrder(user: UserEntity): Promise<OrderEntity> {
    const orderEntity = new OrderEntity();
    orderEntity.user = user;
    return await this.ordersRepository.save(orderEntity);
  }

  buildOrderDetailEntity(
    order: OrderEntity,
    products: ProductEntity[],
    total: number,
  ) {
    const orderDetail = new OrderDetailEntity();
    orderDetail.order = order;
    orderDetail.price = Number(total);
    orderDetail.products = products;
    return orderDetail;
  }

  async addOrder(userId: string, productsId: string[]): Promise<OrderEntity> {
    const user = await this.usersRepository.getUserById(userId);
    const [total, updatedProducts] = await this.subtractOneToStock(productsId);
    const orderSaved = await this.saveUserInOrder(user);
    const orderDetail = this.buildOrderDetailEntity(
      orderSaved,
      updatedProducts,
      total,
    );
    await this.orderDetailRepository.save(orderDetail);
    return await this.getOrderById(orderSaved.id);
  }
}
