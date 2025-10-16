import { ApiProperty } from '@nestjs/swagger';
import { ResponseOrderDetailDto } from './response.orderdetail.dto';
import { ResponseUserOrderDto } from './response.user.order.dto';

export class ResponseOrderDto {
  @ApiProperty({
    description: 'ID único de la orden',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  id: string;

  @ApiProperty({
    description: 'Datos del usuario que realizó la orden',
    type: ResponseUserOrderDto,
  })
  user: ResponseUserOrderDto;

  @ApiProperty({
    description: 'Detalles de la orden (productos y precio)',
    type: ResponseOrderDetailDto,
  })
  orderDetail: ResponseOrderDetailDto;
}
