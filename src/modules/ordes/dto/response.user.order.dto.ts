import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserOrderDto {
  @ApiProperty({
    description: 'ID único del usuario',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  id: string;

  @ApiProperty({
    description: 'Email del usuario',
    example: 'jhonny.berdeja@gmail.com',
  })
  email: string;
}
