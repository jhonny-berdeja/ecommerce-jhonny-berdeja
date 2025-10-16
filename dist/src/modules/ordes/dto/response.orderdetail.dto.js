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
exports.ResponseOrderDetailDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const response_product_order_dto_1 = require("./response.product.order.dto");
class ResponseOrderDetailDto {
    id;
    price;
    products;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, price: { required: true, type: () => Number }, products: { required: true, type: () => [require("./response.product.order.dto").ResponseProductOrderDto] } };
    }
}
exports.ResponseOrderDetailDto = ResponseOrderDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único del detalle de orden',
        example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    }),
    __metadata("design:type", String)
], ResponseOrderDetailDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Precio total de la orden',
        example: 249.87,
        type: Number,
    }),
    __metadata("design:type", Number)
], ResponseOrderDetailDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de productos incluidos en la orden',
        type: [response_product_order_dto_1.ResponseProductOrderDto],
    }),
    __metadata("design:type", Array)
], ResponseOrderDetailDto.prototype, "products", void 0);
//# sourceMappingURL=response.orderdetail.dto.js.map