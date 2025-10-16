import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ArrayMinSize } from 'class-validator';

export class RequestOrderDto {
  @ApiProperty({ example: 'da5aaa13-d1e7-4229-934f-681b2f0c0725' })
  @IsNotEmpty({ message: 'El ID de usuario es obligatorio.' })
  @IsUUID('4', { message: 'El ID de usuario debe ser un UUID válido.' })
  userId: string;

  @ApiProperty({
    example: [
      'e7aa1451-af77-408f-a1b4-cf5e1a3582ba',
      'e8cd209f-f13a-4d91-b27e-153628be361d',
      '6d5d2d3a-e5c7-4690-89a7-b5f18680b59f',
    ],
  })
  @IsNotEmpty({ message: 'El array de productos no puede estar vacío.' })
  @ArrayMinSize(1, {
    message: 'Se requiere al menos un producto para la orden.',
  })
  @IsUUID('4', {
    each: true,
    message: 'Cada ID de producto en la lista debe ser un UUID válido.',
  })
  productsId: string[];
}
