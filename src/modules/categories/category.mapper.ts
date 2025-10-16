import { CategoryEntity } from './category.entity';
import { RequestCategoryDto } from './dto/request.category.dto';
import { ResponseCategoriesDto } from './dto/response.categories.dto';
import { ResponseCategoryDto } from './dto/response.category.dto';

function mapToResponseCategoryDto(
  category: CategoryEntity,
): ResponseCategoryDto {
  const resoponseCategoryDto = new ResponseCategoryDto();
  if (category.id) resoponseCategoryDto.id = category.id;
  if (category.name) resoponseCategoryDto.name = category.name;
  return resoponseCategoryDto;
}

function mapToResponseCategoriesDto(
  categories: CategoryEntity[],
): ResponseCategoriesDto {
  const reponseCategories: ResponseCategoryDto[] = categories.map((category) =>
    mapToResponseCategoryDto(category),
  );
  const responseCategoriesDto = new ResponseCategoriesDto();
  responseCategoriesDto.categories = reponseCategories;
  return responseCategoriesDto;
}

function mapToCategotyEntity(category: RequestCategoryDto): CategoryEntity {
  const categoryEntity = new CategoryEntity();
  if (category.name) categoryEntity.name = category.name;
  return categoryEntity;
}

export class CategoryMapper {
  mapToResponseCategoriesDto(categories: CategoryEntity[]) {
    return mapToResponseCategoriesDto(categories);
  }

  mapToResponseCategoryDto(category: CategoryEntity) {
    return mapToResponseCategoryDto(category);
  }

  mapToCategotyEntity(category: RequestCategoryDto) {
    return mapToCategotyEntity(category);
  }
}
