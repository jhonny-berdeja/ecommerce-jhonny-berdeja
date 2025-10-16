import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserDto {
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

  @ApiProperty({
    description: 'Nombre completo del usuario',
    example: 'Jhonny Berdeja',
  })
  name: string;

  @ApiProperty({
    description: 'Dirección del usuario',
    example: 'Av. Rivadavia 5000',
  })
  address: string;

  @ApiProperty({
    description: 'Número de teléfono del usuario',
    example: 1187654321,
    type: Number,
  })
  phone: number;

  @ApiProperty({
    description: 'País de residencia',
    example: 'Argentina',
  })
  country: string;

  @ApiProperty({
    description: 'Ciudad de residencia',
    example: 'Capital Federal',
  })
  city: string;
}
