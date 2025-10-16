import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from './create.product.dto';
import { products } from '../products.example';
import { IsNotEmpty } from 'class-validator';

export class RequestProductsDto {
  @ApiProperty({ example: products })
  @IsNotEmpty()
  products: CreateProductDto[];
}
