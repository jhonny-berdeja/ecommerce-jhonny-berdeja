import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RequestUpdatePasswordDto {
  @ApiProperty({ example: 'jhonny.berdeja@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    required: true,
    example: 'ClaveSegura123!',
    description: 'Nueva contraseña (debe cumplir los requisitos de seguridad).',
  })
  @IsNotEmpty()
  password: string;
}
