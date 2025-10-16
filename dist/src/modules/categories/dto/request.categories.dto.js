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
exports.RequestCategoriesDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const request_category_dto_1 = require("./request.category.dto");
const categories_example_1 = require("../categories.example");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class RequestCategoriesDto {
    categories;
    static _OPENAPI_METADATA_FACTORY() {
        return { categories: { required: true, type: () => [require("./request.category.dto").RequestCategoryDto] } };
    }
}
exports.RequestCategoriesDto = RequestCategoriesDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => request_category_dto_1.RequestCategoryDto),
    (0, swagger_1.ApiProperty)({ example: categories_example_1.categories }),
    __metadata("design:type", Array)
], RequestCategoriesDto.prototype, "categories", void 0);
//# sourceMappingURL=request.categories.dto.js.map