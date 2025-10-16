import { ResponseCategoryOrderDto } from './response.category.order.dto';
export declare class ResponseProductOrderDto {
    id: string;
    name: string;
    price: number;
    category: ResponseCategoryOrderDto;
}
