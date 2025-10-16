import { OrderEntity } from './order.entity';
import { ResponseOrderDto } from './dto/response.order.dto';
export declare class OrderMapper {
    mapToResponseOrderDto(order: OrderEntity): ResponseOrderDto;
}
