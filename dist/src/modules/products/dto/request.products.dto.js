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
exports.RequestProductsDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const products_example_1 = require("../products.example");
const class_validator_1 = require("class-validator");
class RequestProductsDto {
    products;
    static _OPENAPI_METADATA_FACTORY() {
        return { products: { required: true, type: () => [require("./create.product.dto").CreateProductDto] } };
    }
}
exports.RequestProductsDto = RequestProductsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: products_example_1.products }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], RequestProductsDto.prototype, "products", void 0);
//# sourceMappingURL=request.products.dto.js.map