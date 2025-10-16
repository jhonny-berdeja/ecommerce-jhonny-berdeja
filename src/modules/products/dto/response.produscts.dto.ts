import { ApiProperty } from '@nestjs/swagger';
import { ResponseProductDto } from './response.product.dto';

export class ResponseProductsDto {
  @ApiProperty({
    description: 'Lista de productos',
    type: [ResponseProductDto],
    example: [
      {
        id: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
        name: 'Laptop Dell XPS 13',
        description:
          'Laptop ultraportátil con procesador Intel Core i7, 16GB RAM, SSD 512GB',
        price: 1299.99,
        stock: 45,
        imgUrl: 'https://example.com/images/laptop-dell-xps-13.jpg',
        category: {
          id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
          name: 'Electrónica',
        },
      },
      {
        id: 'c3d4e5f6-g7h8-0123-cdef-123456789012',
        name: 'Monitor LG 27"',
        description: 'Monitor 4K con panel IPS, resolución 3840x2160, 144Hz',
        price: 499.99,
        stock: 23,
        imgUrl: 'https://example.com/images/monitor-lg-27.jpg',
        category: {
          id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
          name: 'Electrónica',
        },
      },
    ],
  })
  products: ResponseProductDto[];
}
