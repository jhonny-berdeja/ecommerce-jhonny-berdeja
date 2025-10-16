import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    required: false,
    description: 'ID de usuario (usualmente en la ruta).',
  })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({
    required: false,
    example: 'nuevo.email@ejemplo.com',
    description: 'Correo electrónico del usuario.',
  })
  @IsEmail(
    {},
    {
      message: 'El correo electrónico debe tener una estructura válida.',
    },
  )
  @IsOptional()
  email: string;

  @ApiProperty({
    required: false,
    example: 'Juan Pérez',
    description: 'Nombre completo del usuario.',
  })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @IsOptional()
  @Length(3, 80, {
    message: 'El nombre debe tener entre 3 y 80 caracteres.',
  })
  name: string;

  @IsOptional()
  @IsString()
  @Length(8, 15, {
    message: 'La contraseña debe tener entre 8 y 15 caracteres.',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
    message:
      'La contraseña debe contener al menos una minúscula, una mayúscula, un número y uno de los caracteres especiales: !@#$%^&*.',
  })
  password: string;

  @ApiProperty({
    required: false,
    example: 'Calle Falsa 123',
    description: 'Nueva dirección.',
  })
  @IsString({ message: 'La dirección debe ser una cadena de texto.' })
  @IsOptional()
  @Length(3, 80, {
    message: 'La dirección debe tener entre 3 y 80 caracteres.',
  })
  address: string;

  @ApiProperty({
    required: false,
    example: 5555,
    description: 'Nuevo número de teléfono.',
  })
  @IsNumber(
    {},
    {
      message: 'El número de teléfono debe ser un valor numérico.',
    },
  )
  @IsOptional()
  phone: number;

  @ApiProperty({
    required: false,
    example: 'Chile',
    description: 'Nuevo país de residencia.',
  })
  @IsString({ message: 'El país debe ser una cadena de texto.' })
  @IsOptional()
  @Length(5, 20, {
    message: 'El país debe tener entre 5 y 20 caracteres.',
  })
  country: string;

  @ApiProperty({
    required: false,
    example: 'Santiago',
    description: 'Nueva ciudad de residencia.',
  })
  @IsString({ message: 'La ciudad debe ser una cadena de texto.' })
  @IsOptional()
  @Length(5, 20, {
    message: 'La ciudad debe tener entre 5 y 20 caracteres.',
  })
  city: string;
}
