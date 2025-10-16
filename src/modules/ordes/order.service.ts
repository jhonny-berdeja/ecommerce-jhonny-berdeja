import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './order.repository';
import { RequestOrderDto } from './dto/request.order.dto';
import { OrderMapper } from './order.mapper';
import { ResponseOrderDto } from './dto/response.order.dto';

@Injectable()
export class OrdersService {
  constructor(
    private ordersRepository: OrdersRepository,
    private orderMapper: OrderMapper,
  ) {}

  async getOrderById(id: string): Promise<ResponseOrderDto> {
    const orderEntity = await this.ordersRepository.getOrderById(id);
    return this.orderMapper.mapToResponseOrderDto(orderEntity);
  }

  async addOrder(orderDto: RequestOrderDto): Promise<ResponseOrderDto> {
    const orderEntity = await this.ordersRepository.addOrder(
      orderDto.userId,
      orderDto.productsId,
    );
    return this.orderMapper.mapToResponseOrderDto(orderEntity);
  }
}
