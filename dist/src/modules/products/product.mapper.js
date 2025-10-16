"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapper = void 0;
const product_entity_1 = require("./product.entity");
const response_category_dto_1 = require("./dto/response.category.dto");
const response_product_dto_1 = require("./dto/response.product.dto");
const response_produscts_dto_1 = require("./dto/response.produscts.dto");
function mapCreateProductDtoToProductEntity(createProductDto) {
    const productEntity = new product_entity_1.ProductEntity();
    productEntity.name = createProductDto.name;
    productEntity.description = createProductDto.description;
    productEntity.price = createProductDto.price;
    productEntity.stock = createProductDto.stock;
    productEntity.imgUrl = createProductDto.imgUrl;
    productEntity.categoryId = createProductDto.categoryId;
    return productEntity;
}
function mapToReponseProductDto(product) {
    const responseProductDto = new response_product_dto_1.ResponseProductDto();
    responseProductDto.id = product.id;
    responseProductDto.name = product.name;
    responseProductDto.description = product.description;
    responseProductDto.price = product.price;
    responseProductDto.stock = product.stock;
    responseProductDto.imgUrl = product.imgUrl;
    const responseCategoryDto = new response_category_dto_1.ResponseCategoryDto();
    responseCategoryDto.id = product.category.id;
    responseCategoryDto.name = product.category.name;
    responseProductDto.category = responseCategoryDto;
    return responseProductDto;
}
function mapUpdateProductDtoToProductEntity(updateProductDto) {
    const productEntity = new product_entity_1.ProductEntity();
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
function mapResponseProductsDto(productsEntity) {
    const products = productsEntity.map((product) => mapToReponseProductDto(product));
    const responseProductsDto = new response_produscts_dto_1.ResponseProductsDto();
    responseProductsDto.products = products;
    return responseProductsDto;
}
class ProductMapper {
    mapUpdateProductDtoToProductEntity(product) {
        return mapUpdateProductDtoToProductEntity(product);
    }
    mapToReponseProductDto(product) {
        return mapToReponseProductDto(product);
    }
    mapResponseProductsDto(productsEntity) {
        return mapResponseProductsDto(productsEntity);
    }
    mapCreateProductDtoToProductEntity(product) {
        return mapCreateProductDtoToProductEntity(product);
    }
}
exports.ProductMapper = ProductMapper;
//# sourceMappingURL=product.mapper.js.map