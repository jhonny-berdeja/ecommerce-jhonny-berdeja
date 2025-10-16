import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsUrl,
  IsUUID,
  Length,
  Min,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @Length(1, 50, {
    message: 'El nombre debe tener entre 1 y 50 caracteres.',
  })
  @ApiProperty({ example: 'Telefono' })
  name: string;

  @IsNotEmpty({ message: 'La descripción es obligatoria.' })
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @Length(10, 2000, {
    message: 'La descripción debe tener entre 10 y 2000 caracteres.',
  })
  @ApiProperty({ example: 'Tactil con recarga solar de bateria' })
  description: string;

  @IsNotEmpty({ message: 'El precio es obligatorio.' })
  @Type(() => Number)
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El precio debe ser un número con hasta dos decimales.' },
  )
  @Min(0.01, { message: 'El precio debe ser un valor positivo.' })
  @ApiProperty({ example: 500 })
  price: number;

  @IsNotEmpty({ message: 'El stock es obligatorio.' })
  @Type(() => Number)
  @IsNumber()
  @Min(0, { message: 'El stock no puede ser negativo.' })
  @ApiProperty({ example: 50 })
  stock: number;

  @IsOptional()
  @IsUrl({}, { message: 'La URL de la imagen debe ser un formato válido.' })
  @Length(0, 255, { message: 'La URL es demasiado larga.' })
  @ApiProperty({
    example: 'https://placehold.co/600x400/2563EB/FFFFFF?text=Iphone+15',
  })
  imgUrl: string;

  @IsOptional()
  @IsUUID('4', {
    message: 'El ID de la categoría debe ser un UUID válido.',
  })
  categoryId: string;

  @IsNotEmpty({ message: 'La categoría es obligatorio.' })
  @IsString({ message: 'La categoría debe ser una cadena de texto.' })
  @ApiProperty({
    example: 'smartphone',
  })
  category: string;
}
