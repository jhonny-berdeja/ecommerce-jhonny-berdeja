import { ApiProperty } from '@nestjs/swagger';
import { ResponseUserDto } from './response.user.dto';

export class ResponseUsersDto {
  @ApiProperty({
    description: 'Lista de usuarios',
    type: [ResponseUserDto],
    example: [
      {
        id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        email: 'jhonny.berdeja@gmail.com',
        name: 'Jhonny Berdeja',
        address: 'Av. Rivadavia 5000',
        phone: 1187654321,
        country: 'Argentina',
        city: 'Capital Federal',
      },
      {
        id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        email: 'maria.garcia@gmail.com',
        name: 'María García',
        address: 'Calle Florida 123',
        phone: 1134567890,
        country: 'Argentina',
        city: 'Buenos Aires',
      },
      {
        id: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
        email: 'carlos.lopez@gmail.com',
        name: 'Carlos López',
        address: 'Av. Corrientes 456',
        phone: 1145678901,
        country: 'Argentina',
        city: 'San Isidro',
      },
    ],
  })
  users: ResponseUserDto[];
}
