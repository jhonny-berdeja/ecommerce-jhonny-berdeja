import { CreateProductDto } from './dto/create.product.dto';
import { ProductEntity } from './product.entity';
import { ResponseCategoryDto } from './dto/response.category.dto';
import { ResponseProductDto } from './dto/response.product.dto';
import { ResponseProductsDto } from './dto/response.produscts.dto';
import { UpdateProductDto } from './dto/update.product.dto';

function mapCreateProductDtoToProductEntity(
  createProductDto: CreateProductDto,
): ProductEntity {
  const productEntity = new ProductEntity();
  productEntity.name = createProductDto.name;
  productEntity.description = createProductDto.description;
  productEntity.price = createProductDto.price;
  productEntity.stock = createProductDto.stock;
  productEntity.imgUrl = createProductDto.imgUrl;
  productEntity.categoryId = createProductDto.categoryId;
  return productEntity;
}
function mapToReponseProductDto(product: ProductEntity): ResponseProductDto {
  const responseProductDto = new ResponseProductDto();
  responseProductDto.id = product.id;
  responseProductDto.name = product.name;
  responseProductDto.description = product.description;
  responseProductDto.price = product.price;
  responseProductDto.stock = product.stock;
  responseProductDto.imgUrl = product.imgUrl;
  const responseCategoryDto = new ResponseCategoryDto();
  responseCategoryDto.id = product.category.id;
  responseCategoryDto.name = product.category.name;
  responseProductDto.category = responseCategoryDto;
  return responseProductDto;
}
function mapUpdateProductDtoToProductEntity(
  updateProductDto: UpdateProductDto,
): ProductEntity {
  const productEntity = new ProductEntity();
  if (updateProductDto.name) {
    productEntity.name = updateProductDto.name;
  }
  if (updateProductDto.description) {
    productEntity.description = updateProductDto.description;
  }
  if (updateProductDto.imgUrl) {
    productEntity.imgUrl = updateProductDto.imgUrl;
  }
  if (updateProductDto.price) {
    productEntity.price = updateProductDto.price;
  }
  if (updateProductDto.stock) {
    productEntity.stock = updateProductDto.stock;
  }
  if (updateProductDto.categoryId) {
    productEntity.categoryId = updateProductDto.categoryId;
  }
  return productEntity;
}
function mapResponseProductsDto(productsEntity: ProductEntity[]) {
  const products = productsEntity.map((product) =>
    mapToReponseProductDto(product),
  );
  const responseProductsDto = new ResponseProductsDto();
  responseProductsDto.products = products;
  return responseProductsDto;
}
export class ProductMapper {
  mapUpdateProductDtoToProductEntity(product: UpdateProductDto): ProductEntity {
    return mapUpdateProductDtoToProductEntity(product);
  }
  mapToReponseProductDto(product: ProductEntity): ResponseProductDto {
    return mapToReponseProductDto(product);
  }
  mapResponseProductsDto(productsEntity: ProductEntity[]) {
    return mapResponseProductsDto(productsEntity);
  }
  mapCreateProductDtoToProductEntity(product: CreateProductDto): ProductEntity {
    return mapCreateProductDtoToProductEntity(product);
  }
}
