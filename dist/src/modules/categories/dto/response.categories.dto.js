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
exports.ResponseCategoriesDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const response_category_dto_1 = require("./response.category.dto");
const categories_example_1 = require("../categories.example");
class ResponseCategoriesDto {
    categories;
    static _OPENAPI_METADATA_FACTORY() {
        return { categories: { required: true, type: () => [require("./response.category.dto").ResponseCategoryDto] } };
    }
}
exports.ResponseCategoriesDto = ResponseCategoriesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [response_category_dto_1.ResponseCategoryDto],
        description: 'Arreglo que contiene todas las categorías disponibles.',
        example: categories_example_1.categories,
    }),
    __metadata("design:type", Array)
], ResponseCategoriesDto.prototype, "categories", void 0);
//# sourceMappingURL=response.categories.dto.js.map