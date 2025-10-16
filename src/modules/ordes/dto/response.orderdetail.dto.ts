import { ApiProperty } from '@nestjs/swagger';
import { ResponseProductOrderDto } from './response.product.order.dto';

export class ResponseOrderDetailDto {
  @ApiProperty({
    description: 'ID único del detalle de orden',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  id: string;

  @ApiProperty({
    description: 'Precio total de la orden',
    example: 249.87,
    type: Number,
  })
  price: number;

  @ApiProperty({
    description: 'Lista de productos incluidos en la orden',
    type: [ResponseProductOrderDto],
  })
  products: ResponseProductOrderDto[];
}
