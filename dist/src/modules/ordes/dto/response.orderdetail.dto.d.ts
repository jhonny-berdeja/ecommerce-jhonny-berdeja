import { ResponseProductOrderDto } from './response.product.order.dto';
export declare class ResponseOrderDetailDto {
    id: string;
    price: number;
    products: ResponseProductOrderDto[];
}
