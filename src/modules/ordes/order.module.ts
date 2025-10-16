import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/modules/products/products.module';
import { UsersModule } from 'src/modules/users/users.module';
import { OrdersController } from './order.controller';
import { OrdersService } from './order.service';
import { OrdersRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailEntity } from './orderdetail.entity';
import { OrderEntity } from './order.entity';
import { OrderMapper } from './order.mapper';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    TypeOrmModule.forFeature([OrderDetailEntity, OrderEntity]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository, OrderMapper],
})
export class OrdersModule {}
