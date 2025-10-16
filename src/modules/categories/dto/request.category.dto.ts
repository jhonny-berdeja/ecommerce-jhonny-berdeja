import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RequestCategoryDto {
  @ApiProperty({ example: 'salud' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
