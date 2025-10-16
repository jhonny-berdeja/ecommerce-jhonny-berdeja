"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const product_mapper_1 = require("./product.mapper");
const category_service_1 = require("../categories/category.service");
const response_produscts_dto_1 = require("./dto/response.produscts.dto");
const response_message_product_dto_1 = require("./dto/response.message.product.dto");
let ProductsService = class ProductsService {
    productsRepository;
    productMapper;
    categoriesService;
    constructor(productsRepository, productMapper, categoriesService) {
        this.productsRepository = productsRepository;
        this.productMapper = productMapper;
        this.categoriesService = categoriesService;
    }
    async getProducts() {
        const productsEntity = await this.productsRepository.getProducts();
        return this.productMapper.mapResponseProductsDto(productsEntity);
    }
    async getProductById(id) {
        const product = await this.productsRepository.getProductById(id);
        return this.productMapper.mapToReponseProductDto(product);
    }
    async getProductByPage(page, limit) {
        const products = await this.productsRepository.getProductByPage(page, limit);
        return this.productMapper.mapResponseProductsDto(products);
    }
    async addProduct(product) {
        const categoryId = await this.categoriesService.getIdByCategoryName(product.category);
        const newProduct = { ...product, categoryId: categoryId };
        const productEntity = this.productMapper.mapCreateProductDtoToProductEntity(newProduct);
        const productEntityAdded = await this.productsRepository.addProduct(productEntity);
        return this.productMapper.mapToReponseProductDto(productEntityAdded);
    }
    async addProducts(products) {
        const produstsAdded = await Promise.all(products.map(async (product) => {
            return await this.addProduct(product);
        }));
        const responseProductsDto = new response_produscts_dto_1.ResponseProductsDto();
        responseProductsDto.products = produstsAdded;
        return responseProductsDto;
    }
    async updateProduct(id, product) {
        await this.categoriesService.getIdByCategoryId(product.categoryId);
        const productEntity = this.productMapper.mapUpdateProductDtoToProductEntity(product);
        const productUpdated = await this.productsRepository.updateProduct(id, productEntity);
        const responseMessageProductDto = new response_message_product_dto_1.ResponseMessageProductDto();
        responseMessageProductDto.id = productUpdated.id;
        return responseMessageProductDto;
    }
    async deleteProduct(id) {
        const productEntity = await this.productsRepository.deleteProduct(id);
        const responseMessageProductDto = new response_message_product_dto_1.ResponseMessageProductDto();
        responseMessageProductDto.id = productEntity.id;
        return responseMessageProductDto;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository,
        product_mapper_1.ProductMapper,
        category_service_1.CategoriesService])
], ProductsService);
//# sourceMappingURL=products.service.js.map