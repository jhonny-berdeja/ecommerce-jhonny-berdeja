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
exports.ResponseProductOrderDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const response_category_order_dto_1 = require("./response.category.order.dto");
class ResponseProductOrderDto {
    id;
    name;
    price;
    category;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, price: { required: true, type: () => Number }, category: { required: true, type: () => require("./response.category.order.dto").ResponseCategoryOrderDto } };
    }
}
exports.ResponseProductOrderDto = ResponseProductOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único del producto',
        example: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
    }),
    __metadata("design:type", String)
], ResponseProductOrderDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del producto',
        example: 'Laptop Dell XPS 13',
    }),
    __metadata("design:type", String)
], ResponseProductOrderDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio del producto',
        example: 249.87,
        type: Number,
    }),
    __metadata("design:type", Number)
], ResponseProductOrderDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Categoría a la que pertenece el producto',
        type: response_category_order_dto_1.ResponseCategoryOrderDto,
    }),
    __metadata("design:type", response_category_order_dto_1.ResponseCategoryOrderDto)
], ResponseProductOrderDto.prototype, "category", void 0);
//# sourceMappingURL=response.product.order.dto.js.map