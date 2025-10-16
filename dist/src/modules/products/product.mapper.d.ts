import { CreateProductDto } from './dto/create.product.dto';
import { ProductEntity } from './product.entity';
import { ResponseProductDto } from './dto/response.product.dto';
import { ResponseProductsDto } from './dto/response.produscts.dto';
import { UpdateProductDto } from './dto/update.product.dto';
export declare class ProductMapper {
    mapUpdateProductDtoToProductEntity(product: UpdateProductDto): ProductEntity;
    mapToReponseProductDto(product: ProductEntity): ResponseProductDto;
    mapResponseProductsDto(productsEntity: ProductEntity[]): ResponseProductsDto;
    mapCreateProductDtoToProductEntity(product: CreateProductDto): ProductEntity;
}
