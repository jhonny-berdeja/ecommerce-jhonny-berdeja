import { ApiProperty } from '@nestjs/swagger';

export class ResponseFileDto {
  @ApiProperty({
    example: '6',
    description: 'ID único asignado al archivo en la base de datos.',
  })
  id: string;

  @ApiProperty({
    example: 'documento_final.pdf',
    description: 'Nombre del archivo, ya sea el original o uno generado.',
  })
  name: string;

  @ApiProperty({
    example: 'application/pdf',
    description:
      'Tipo MIME del contenido del archivo (ej: image/jpeg, application/pdf).',
  })
  mineType: string;

  @ApiProperty({
    example: {
      type: 'Buffer',
      data: [137, 80, 78, 71],
    },
    description: 'Contenido binario del archivo, codificado en Base64.',
    type: 'string',
  })
  data: Buffer;
}
