import { ApiProperty } from '@nestjs/swagger';

export class ResponseTokenDto {
  @ApiProperty({
    description: 'Mensaje de respuesta',
    example: 'Generated token ok',
  })
  message: string;

  @ApiProperty({
    description: 'Token JWT para autenticación',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  token: string;
}
