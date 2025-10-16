import { CategoryEntity } from './category.entity';
import { RequestCategoryDto } from './dto/request.category.dto';
import { ResponseCategoriesDto } from './dto/response.categories.dto';
import { ResponseCategoryDto } from './dto/response.category.dto';
export declare class CategoryMapper {
    mapToResponseCategoriesDto(categories: CategoryEntity[]): ResponseCategoriesDto;
    mapToResponseCategoryDto(category: CategoryEntity): ResponseCategoryDto;
    mapToCategotyEntity(category: RequestCategoryDto): CategoryEntity;
}
