import { Injectable } from '@nestjs/common';
import { RequestCategoryDto } from './dto/request.category.dto';
import { CategoriesRepository } from './category.repository';
import { CategoryMapper } from './category.mapper';
import { ResponseCategoriesDto } from './dto/response.categories.dto';
import { RequestCategoriesDto } from './dto/request.categories.dto';
import { ResponseCategoryDto } from 'src/modules/products/dto/response.category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    private categoriesRepository: CategoriesRepository,
    private categoryMapper: CategoryMapper,
  ) {}

  async getCategories(): Promise<ResponseCategoriesDto> {
    const categories = await this.categoriesRepository.getCategories();
    return this.categoryMapper.mapToResponseCategoriesDto(categories);
  }

  async getIdByCategoryName(categoryName: string): Promise<string> {
    const category =
      await this.categoriesRepository.getCategiryByName(categoryName);
    return category.id;
  }

  async getIdByCategoryId(id: string): Promise<string> {
    const category = await this.categoriesRepository.getCategiryById(id);
    return category.name;
  }

  async createCategory(
    category: RequestCategoryDto,
  ): Promise<ResponseCategoryDto> {
    const categoryEntity = this.categoryMapper.mapToCategotyEntity(category);
    const categoryEntityCreated =
      await this.categoriesRepository.addCategory(categoryEntity);
    return this.categoryMapper.mapToResponseCategoryDto(categoryEntityCreated);
  }

  async createCategories(
    requestCategories: RequestCategoriesDto,
  ): Promise<ResponseCategoriesDto> {
    const categoriesCreated = await Promise.all(
      requestCategories.categories.map(async (category) => {
        return await this.createCategory(category);
      }),
    );
    const responseCategoriesDto = new ResponseCategoriesDto();
    responseCategoriesDto.categories = categoriesCreated;
    return responseCategoriesDto;
  }
}
