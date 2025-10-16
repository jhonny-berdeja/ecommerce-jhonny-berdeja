import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoriesRepository: Repository<CategoryEntity>,
  ) {}

  async getCategories(): Promise<CategoryEntity[]> {
    return await this.categoriesRepository.find();
  }

  async getCategiryByName(categoryName: string): Promise<CategoryEntity> {
    const categoryExist = await this.categoriesRepository.findOneBy({
      name: categoryName,
    });
    if (!categoryExist) {
      throw new ConflictException(
        `La categoria con name ${categoryName} no existe`,
      );
    }
    return categoryExist;
  }

  async getCategiryById(id: string): Promise<CategoryEntity> {
    const categoryExist = await this.categoriesRepository.findOneBy({
      id: id,
    });
    if (!categoryExist) {
      throw new ConflictException(`La categoria con id ${id} no existe`);
    }
    return categoryExist;
  }

  async addCategory(category: CategoryEntity): Promise<CategoryEntity> {
    const categoryExist = await this.categoriesRepository.findOneBy({
      name: category.name,
    });
    if (categoryExist) {
      throw new BadRequestException(
        `La categoria con name ${category.name} ya existe`,
      );
    }
    const categoryCreated = this.categoriesRepository.create(category);
    return this.categoriesRepository.save(categoryCreated);
  }
}
