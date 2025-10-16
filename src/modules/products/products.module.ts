import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { ProductMapper } from './product.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { CategoriesModule } from 'src/modules/categories/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), CategoriesModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository, ProductMapper],
  exports: [
    TypeOrmModule.forFeature([ProductEntity]),
    ProductsRepository,
    ProductsService,
    ProductMapper,
  ],
})
export class ProductsModule {}
