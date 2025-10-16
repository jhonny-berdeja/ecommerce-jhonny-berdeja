import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { CategoriesController } from './category.controller';
import { CategoriesService } from './category.service';
import { CategoriesRepository } from './category.repository';
import { CategoryMapper } from './category.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoriesRepository, CategoryMapper],
  exports: [
    //TypeOrmModule.forFeature([CategoryEntity]),
    //CategoriesRepository,
    CategoriesService,
  ],
})
export class CategoriesModule {}
