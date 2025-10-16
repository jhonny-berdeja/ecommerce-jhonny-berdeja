import { OrdersRepository } from './order.repository';
import { RequestOrderDto } from './dto/request.order.dto';
import { OrderMapper } from './order.mapper';
import { ResponseOrderDto } from './dto/response.order.dto';
export declare class OrdersService {
    private ordersRepository;
    private orderMapper;
    constructor(ordersRepository: OrdersRepository, orderMapper: OrderMapper);
    getOrderById(id: string): Promise<ResponseOrderDto>;
    addOrder(orderDto: RequestOrderDto): Promise<ResponseOrderDto>;
}
