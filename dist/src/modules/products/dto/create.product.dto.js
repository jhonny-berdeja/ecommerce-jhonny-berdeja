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
exports.CreateProductDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateProductDto {
    name;
    description;
    price;
    stock;
    imgUrl;
    categoryId;
    category;
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 1, maxLength: 50 }, description: { required: true, type: () => String, minLength: 10, maxLength: 2000 }, price: { required: true, type: () => Number, minimum: 0.01 }, stock: { required: true, type: () => Number, minimum: 0 }, imgUrl: { required: true, type: () => String, format: "uri", minLength: 0, maxLength: 255 }, categoryId: { required: true, type: () => String, format: "uuid" }, category: { required: true, type: () => String } };
    }
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio.' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de texto.' }),
    (0, class_validator_1.Length)(1, 50, {
        message: 'El nombre debe tener entre 1 y 50 caracteres.',
    }),
    (0, swagger_1.ApiProperty)({ example: 'Telefono' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La descripción es obligatoria.' }),
    (0, class_validator_1.IsString)({ message: 'La descripción debe ser una cadena de texto.' }),
    (0, class_validator_1.Length)(10, 2000, {
        message: 'La descripción debe tener entre 10 y 2000 caracteres.',
    }),
    (0, swagger_1.ApiProperty)({ example: 'Tactil con recarga solar de bateria' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El precio es obligatorio.' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }, { message: 'El precio debe ser un número con hasta dos decimales.' }),
    (0, class_validator_1.Min)(0.01, { message: 'El precio debe ser un valor positivo.' }),
    (0, swagger_1.ApiProperty)({ example: 500 }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El stock es obligatorio.' }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'El stock no puede ser negativo.' }),
    (0, swagger_1.ApiProperty)({ example: 50 }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'La URL de la imagen debe ser un formato válido.' }),
    (0, class_validator_1.Length)(0, 255, { message: 'La URL es demasiado larga.' }),
    (0, swagger_1.ApiProperty)({
        example: 'https://placehold.co/600x400/2563EB/FFFFFF?text=Iphone+15',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "imgUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)('4', {
        message: 'El ID de la categoría debe ser un UUID válido.',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La categoría es obligatorio.' }),
    (0, class_validator_1.IsString)({ message: 'La categoría debe ser una cadena de texto.' }),
    (0, swagger_1.ApiProperty)({
        example: 'smartphone',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "category", void 0);
//# sourceMappingURL=create.product.dto.js.map