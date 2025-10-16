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
exports.ResponseProductDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const response_category_dto_1 = require("./response.category.dto");
class ResponseProductDto {
    id;
    name;
    description;
    price;
    stock;
    imgUrl;
    category;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, imgUrl: { required: true, type: () => String }, category: { required: true, type: () => require("./response.category.dto").ResponseCategoryDto } };
    }
}
exports.ResponseProductDto = ResponseProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único del producto',
        example: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
    }),
    __metadata("design:type", String)
], ResponseProductDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del producto',
        example: 'Laptop Dell XPS 13',
    }),
    __metadata("design:type", String)
], ResponseProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción detallada del producto',
        example: 'Laptop ultraportátil con procesador Intel Core i7, 16GB RAM, SSD 512GB',
    }),
    __metadata("design:type", String)
], ResponseProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio del producto en USD',
        example: 1299.99,
        type: Number,
    }),
    __metadata("design:type", Number)
], ResponseProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Cantidad disponible en stock',
        example: 45,
        type: Number,
    }),
    __metadata("design:type", Number)
], ResponseProductDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL de la imagen del producto',
        example: 'https://example.com/images/laptop-dell-xps-13.jpg',
    }),
    __metadata("design:type", String)
], ResponseProductDto.prototype, "imgUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categoría a la que pertenece el producto',
        type: response_category_dto_1.ResponseCategoryDto,
    }),
    __metadata("design:type", response_category_dto_1.ResponseCategoryDto)
], ResponseProductDto.prototype, "category", void 0);
//# sourceMappingURL=response.product.dto.js.map