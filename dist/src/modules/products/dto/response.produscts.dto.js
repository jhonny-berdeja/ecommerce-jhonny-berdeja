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
exports.ResponseProductsDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const response_product_dto_1 = require("./response.product.dto");
class ResponseProductsDto {
    products;
    static _OPENAPI_METADATA_FACTORY() {
        return { products: { required: true, type: () => [require("./response.product.dto").ResponseProductDto] } };
    }
}
exports.ResponseProductsDto = ResponseProductsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de productos',
        type: [response_product_dto_1.ResponseProductDto],
        example: [
            {
                id: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
                name: 'Laptop Dell XPS 13',
                description: 'Laptop ultraportátil con procesador Intel Core i7, 16GB RAM, SSD 512GB',
                price: 1299.99,
                stock: 45,
                imgUrl: 'https://example.com/images/laptop-dell-xps-13.jpg',
                category: {
                    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
                    name: 'Electrónica',
                },
            },
            {
                id: 'c3d4e5f6-g7h8-0123-cdef-123456789012',
                name: 'Monitor LG 27"',
                description: 'Monitor 4K con panel IPS, resolución 3840x2160, 144Hz',
                price: 499.99,
                stock: 23,
                imgUrl: 'https://example.com/images/monitor-lg-27.jpg',
                category: {
                    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
                    name: 'Electrónica',
                },
            },
        ],
    }),
    __metadata("design:type", Array)
], ResponseProductsDto.prototype, "products", void 0);
//# sourceMappingURL=response.produscts.dto.js.map