import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductMapper } from './product.mapper';
import { ProductEntity } from './product.entity';
import { ResponseProductDto } from './dto/response.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { CategoriesService } from 'src/modules/categories/category.service';
import { ResponseProductsDto } from './dto/response.produscts.dto';
import { ResponseMessageProductDto } from './dto/response.message.product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepository,
    private productMapper: ProductMapper,
    private categoriesService: CategoriesService,
  ) {}

  async getProducts(): Promise<ResponseProductsDto> {
    const productsEntity = await this.productsRepository.getProducts();
    return this.productMapper.mapResponseProductsDto(productsEntity);
  }

  async getProductById(id: string): Promise<ResponseProductDto> {
    const product = await this.productsRepository.getProductById(id);
    return this.productMapper.mapToReponseProductDto(product);
  }

  async getProductByPage(
    page: number,
    limit: number,
  ): Promise<ResponseProductsDto> {
    const products = await this.productsRepository.getProductByPage(
      page,
      limit,
    );
    return this.productMapper.mapResponseProductsDto(products);
  }

  async addProduct(product: CreateProductDto): Promise<ResponseProductDto> {
    const categoryId = await this.categoriesService.getIdByCategoryName(
      product.category,
    );
    const newProduct = { ...product, categoryId: categoryId };
    const productEntity =
      this.productMapper.mapCreateProductDtoToProductEntity(newProduct);
    const productEntityAdded =
      await this.productsRepository.addProduct(productEntity);
    return this.productMapper.mapToReponseProductDto(productEntityAdded);
  }

  async addProducts(
    products: CreateProductDto[],
  ): Promise<ResponseProductsDto> {
    const produstsAdded = await Promise.all(
      products.map(async (product) => {
        return await this.addProduct(product);
      }),
    );
    const responseProductsDto = new ResponseProductsDto();
    responseProductsDto.products = produstsAdded;
    return responseProductsDto;
  }

  async updateProduct(
    id: string,
    product: UpdateProductDto,
  ): Promise<ResponseMessageProductDto> {
    await this.categoriesService.getIdByCategoryId(product.categoryId);
    const productEntity: ProductEntity =
      this.productMapper.mapUpdateProductDtoToProductEntity(product);
    const productUpdated = await this.productsRepository.updateProduct(
      id,
      productEntity,
    );
    const responseMessageProductDto = new ResponseMessageProductDto();
    responseMessageProductDto.id = productUpdated.id;
    return responseMessageProductDto;
  }

  async deleteProduct(id: string): Promise<ResponseMessageProductDto> {
    const productEntity: ProductEntity =
      await this.productsRepository.deleteProduct(id);
    const responseMessageProductDto = new ResponseMessageProductDto();
    responseMessageProductDto.id = productEntity.id;
    return responseMessageProductDto;
  }
}
