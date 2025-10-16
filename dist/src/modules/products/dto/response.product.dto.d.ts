import { ResponseCategoryDto } from './response.category.dto';
export declare class ResponseProductDto {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: ResponseCategoryDto;
}
