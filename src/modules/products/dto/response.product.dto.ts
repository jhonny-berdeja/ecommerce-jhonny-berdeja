import { ApiProperty } from '@nestjs/swagger';
import { ResponseCategoryDto } from './response.category.dto';

export class ResponseProductDto {
  @ApiProperty({
    description: 'ID único del producto',
    example: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
  })
  id: string;

  @ApiProperty({
    description: 'Nombre del producto',
    example: 'Laptop Dell XPS 13',
  })
  name: string;

  @ApiProperty({
    description: 'Descripción detallada del producto',
    example:
      'Laptop ultraportátil con procesador Intel Core i7, 16GB RAM, SSD 512GB',
  })
  description: string;

  @ApiProperty({
    description: 'Precio del producto en USD',
    example: 1299.99,
    type: Number,
  })
  price: number;

  @ApiProperty({
    description: 'Cantidad disponible en stock',
    example: 45,
    type: Number,
  })
  stock: number;

  @ApiProperty({
    description: 'URL de la imagen del producto',
    example: 'https://example.com/images/laptop-dell-xps-13.jpg',
  })
  imgUrl: string;

  @ApiProperty({
    description: 'Categoría a la que pertenece el producto',
    type: ResponseCategoryDto,
  })
  category: ResponseCategoryDto;
}
