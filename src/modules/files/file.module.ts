import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FilesService } from './files.service';
import { FilesRepository } from './files.repository';
import { FilesMapper } from './file.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './file.entity';
import { ProductsModule } from 'src/modules/products/products.module';
import { CloudinaryModule } from 'src/modules/cloudinary/cloudinary.module';
//import { CategoriesModule } from 'src/categories/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity]),
    ProductsModule,
    CloudinaryModule,
    //CategoriesModule,
  ],
  controllers: [FileController],
  providers: [FilesService, FilesRepository, FilesMapper],
})
export class FilesModule {}
