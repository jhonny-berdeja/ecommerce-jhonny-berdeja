import { ResponseOrderDetailDto } from './response.orderdetail.dto';
import { ResponseUserOrderDto } from './response.user.order.dto';
export declare class ResponseOrderDto {
    id: string;
    user: ResponseUserOrderDto;
    orderDetail: ResponseOrderDetailDto;
}
