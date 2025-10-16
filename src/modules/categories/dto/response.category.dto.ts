import { ApiProperty } from '@nestjs/swagger';

export class ResponseCategoryDto {
  @ApiProperty({
    example: 'a1b2c3d4-e5f6-7g8h-i9j0-k1l2m3n4o5p6',
    description: 'ID único de la categoría, generado por la base de datos.',
  })
  id: string;

  @ApiProperty({
    example: 'smartphone',
    description: 'Nombre de la categoría (ej: moda, tecnología, hogar).',
  })
  name: string;
}
