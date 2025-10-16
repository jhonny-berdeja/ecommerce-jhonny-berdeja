import { ApiProperty } from '@nestjs/swagger';
import { ResponseCategoryOrderDto } from './response.category.order.dto';

export class ResponseProductOrderDto {
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
    description: 'Precio del producto',
    example: 249.87,
    type: Number,
  })
  price: number;

  @ApiProperty({
    description: 'Categoría a la que pertenece el producto',
    type: ResponseCategoryOrderDto,
  })
  category: ResponseCategoryOrderDto;
}
