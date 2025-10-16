import { ApiProperty } from '@nestjs/swagger';
import { RequestCategoryDto } from './request.category.dto';
import { categories } from '../categories.example';
import { IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class RequestCategoriesDto {
  @IsArray()
  @Type(() => RequestCategoryDto)
  @ApiProperty({ example: categories })
  categories: RequestCategoryDto[];
}
