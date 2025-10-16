import { OrdersService } from './order.service';
import { RequestOrderDto } from './dto/request.order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getOrderById(id: string): Promise<import("./dto/response.order.dto").ResponseOrderDto>;
    addOrder(order: RequestOrderDto): Promise<import("./dto/response.order.dto").ResponseOrderDto>;
}
