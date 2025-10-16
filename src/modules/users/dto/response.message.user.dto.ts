import { ApiProperty } from '@nestjs/swagger';

export class ResponseMessageUserDto {
  @ApiProperty({
    description: 'Mensaje de confirmación',
    example: 'the request was processed correctly',
  })
  message: 'the request was processed correctly';
  @ApiProperty({
    description: 'ID del usuario procesado',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  id: string;
}
