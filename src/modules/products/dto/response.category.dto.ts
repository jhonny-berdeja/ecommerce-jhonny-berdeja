import { ApiProperty } from '@nestjs/swagger';

export class ResponseCategoryDto {
  @ApiProperty({
    description: 'ID único de la categoría',
    example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  })
  id: string;

  @ApiProperty({
    description: 'Nombre de la categoría',
    example: 'Electrónica',
  })
  name: string;
}
