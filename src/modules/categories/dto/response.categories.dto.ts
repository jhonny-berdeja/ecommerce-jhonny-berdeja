import { ApiProperty } from '@nestjs/swagger';
import { ResponseCategoryDto } from './response.category.dto';
import { categories } from '../categories.example';

export class ResponseCategoriesDto {
  @ApiProperty({
    type: [ResponseCategoryDto],
    description: 'Arreglo que contiene todas las categorías disponibles.',
    example: categories,
  })
  categories: ResponseCategoryDto[];
}
