import { Injectable } from '@nestjs/common';
import { ResponseFileDto } from './dto/response.file.dto';
import { FilesRepository } from './files.repository';
import { FilesMapper } from './file.mapper';
import { File } from 'multer';
import { CloudinaryService } from 'src/modules/cloudinary/cloudinary.service';
import { ProductsService } from 'src/modules/products/products.service';
import { ResponseFilesDto } from './dto/response.files.dto';
import { ResponseMessageProductDto } from '../products/dto/response.message.product.dto';

@Injectable()
export class FilesService {
  constructor(
    private filesRepository: FilesRepository,
    private filesMapprer: FilesMapper,
    private cloudinaryService: CloudinaryService,
    private productsService: ProductsService,
  ) {}

  async getFiles(): Promise<ResponseFilesDto> {
    const files = await this.filesRepository.getFiles();
    return this.filesMapprer.mapToResponseFilesDto(files);
  }

  async addFile(file: File): Promise<ResponseFileDto> {
    const fileEntity = this.filesMapprer.mapFileToFileEntity(file);
    const fileSaved = await this.filesRepository.addFile(fileEntity);
    return this.filesMapprer.mapFileEntityToResponseFileDto(fileSaved);
  }

  async updateImageInProduct(
    idProduct: string,
    file: File,
  ): Promise<ResponseMessageProductDto> {
    await this.productsService.getProductById(idProduct);
    const fileCreated = await this.cloudinaryService.uploadFile(file);
    const updateProductDto = this.filesMapprer.buildUpdateProductDto(
      fileCreated.url,
    );
    return await this.productsService.updateProduct(
      idProduct,
      updateProductDto,
    );
  }
}
