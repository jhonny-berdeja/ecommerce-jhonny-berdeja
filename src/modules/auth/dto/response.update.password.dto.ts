import { ApiProperty } from '@nestjs/swagger';

export class ResponseUpdatePasswordDto {
  @ApiProperty({
    description: 'Mensaje de respuesta de cambio de contraseña',
    example: 'Contraseña actualizada exitosamente',
  })
  message: string;
}
