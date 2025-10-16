import {
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

export class UpdateProductDto {
  @ApiProperty({
    required: false,
    example: 'Mesa',
  })
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  @Length(1, 50, {
    message: 'El nombre debe tener entre 1 y 50 caracteres.',
  })
  name: string;

  @ApiProperty({
    required: false,
    example: 'Mesa plegable electronica',
  })
  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto.' })
  @Length(10, 2000, {
    message: 'La descripción debe tener entre 10 y 2000 caracteres.',
  })
  description: string;

  @ApiProperty({
    required: false,
    example: 400,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El precio debe ser un número con hasta dos decimales.' },
  )
  @Min(0.01, { message: 'El precio debe ser un valor positivo.' })
  price: number;

  @ApiProperty({
    required: false,
    example: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0, { message: 'El stock no puede ser negativo.' })
  stock: number;

  @ApiProperty({
    example: 'https://placehold.co/600x400/2563EB/FFFFFF?text=Iphone+15',
  })
  @IsOptional()
  @IsUrl({}, { message: 'La URL de la imagen debe ser un formato válido.' })
  @Length(0, 255, { message: 'La URL es demasiado larga.' })
  imgUrl: string;

  @ApiProperty({
    required: false,
    example: 'a9afbe57-cf9a-400f-a5ed-f62099346fe4',
  })
  @IsOptional()
  @IsUUID('4', {
    message: 'El ID de la categoría debe ser un UUID válido.',
  })
  categoryId: string;
}
