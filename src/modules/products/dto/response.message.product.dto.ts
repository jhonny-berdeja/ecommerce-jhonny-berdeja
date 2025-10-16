import { ApiProperty } from '@nestjs/swagger';

export class ResponseMessageProductDto {
  @ApiProperty({
    description: 'Mensaje de confirmación',
    example: 'the request was processed correctly',
  })
  message: 'the request was processed correctly';
  @ApiProperty({
    description: 'ID del producto procesado',
    example: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
  })
  id: string;
}
