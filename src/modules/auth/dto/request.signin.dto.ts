import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RequestSignInDto {
  @ApiProperty({ example: 'jhonny.berdeja@gmail.com' })
  @IsNotEmpty({
    message: 'Email o password incorrecto',
  })
  email: string;

  @ApiProperty({ example: 'Password100!!' })
  @IsNotEmpty({
    message: 'Email o password incorrecto',
  })
  password: string;
}
