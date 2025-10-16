import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  Length,
  Matches,
  IsArray,
  ArrayNotEmpty,
  IsEnum,
} from 'class-validator';
import { Role } from 'src/modules/auth/roles.enum';

export class CreateUserDto {
  @IsEmail(
    {},
    {
      message: 'El correo electrónico debe tener una estructura válida.',
    },
  )
  @IsNotEmpty()
  @ApiProperty({ example: 'jhonny.berdeja@gmail.com' })
  email: string;

  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @Length(3, 50, {
    message: 'El nombre debe tener entre 3 y 50 caracteres.',
  })
  @ApiProperty({
    example: 'Jhonny Berdeja',
    description: 'El nombre debe tener entre 3 y 50 caracteres',
  })
  name: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @IsString()
  @Length(8, 15, {
    message: 'La contraseña debe tener entre 8 y 15 caracteres.',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
    message:
      'La contraseña debe contener al menos una minúscula, una mayúscula, un número y uno de los caracteres especiales: !@#$%^&*.',
  })
  @ApiProperty({
    example: 'Password100!!',
    description:
      'La contraseña debe contener al menos una minúscula, una mayúscula, un número y uno de los caracteres especiales: !@#$%^&*.',
  })
  password: string;

  @IsString({ message: 'La dirección debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La dirección es obligatoria.' })
  @Length(3, 80, {
    message: 'La dirección debe tener entre 3 y 80 caracteres.',
  })
  @ApiProperty({
    example: 'Av. Rivadavia 5000',
    description: 'El nombre debe tener entre 3 y 50 caracteres',
  })
  address: string;

  @IsNumber(
    {},
    {
      message: 'El número de teléfono debe ser un valor numérico.',
    },
  )
  @IsNotEmpty({ message: 'El número de teléfono es obligatorio.' })
  @ApiProperty({
    example: '1187654321',
  })
  phone: number;

  @IsString({ message: 'El país debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'El país es obligatorio.' })
  @Length(5, 20, {
    message: 'El país debe tener entre 5 y 20 caracteres.',
  })
  @ApiProperty({
    example: 'Argentina',
    description: 'El país debe tener entre 5 y 20 caracteres.',
  })
  country: string;

  @IsString({ message: 'La ciudad debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La ciudad es obligatoria.' })
  @Length(5, 20, {
    message: 'La ciudad debe tener entre 5 y 20 caracteres.',
  })
  @ApiProperty({
    example: 'Capital Federal',
    description: 'La ciudad debe tener entre 5 y 20 caracteres.',
  })
  city: string;

  @IsArray({
    message: 'Los roles deben ser proporcionados como una lista (array).',
  })
  @ArrayNotEmpty({ message: 'La lista de roles no puede estar vacía.' })
  @IsEnum(Role, {
    each: true,
    message: `Cada rol debe ser uno de los siguientes valores: ${Object.values(Role).join(', ')}`,
  })
  @ApiProperty({
    example: [Role.ADMIN, Role.USER],
    description: `Cada rol debe ser uno de los siguientes valores: ${Object.values(Role).join(', ')}`,
  })
  roles: Role[];
}
