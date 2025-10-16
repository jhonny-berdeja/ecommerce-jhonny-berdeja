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
exports.ResponseOrderDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const response_orderdetail_dto_1 = require("./response.orderdetail.dto");
const response_user_order_dto_1 = require("./response.user.order.dto");
class ResponseOrderDto {
    id;
    user;
    orderDetail;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, user: { required: true, type: () => require("./response.user.order.dto").ResponseUserOrderDto }, orderDetail: { required: true, type: () => require("./response.orderdetail.dto").ResponseOrderDetailDto } };
    }
}
exports.ResponseOrderDto = ResponseOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único de la orden',
        example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    }),
    __metadata("design:type", String)
], ResponseOrderDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Datos del usuario que realizó la orden',
        type: response_user_order_dto_1.ResponseUserOrderDto,
    }),
    __metadata("design:type", response_user_order_dto_1.ResponseUserOrderDto)
], ResponseOrderDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detalles de la orden (productos y precio)',
        type: response_orderdetail_dto_1.ResponseOrderDetailDto,
    }),
    __metadata("design:type", response_orderdetail_dto_1.ResponseOrderDetailDto)
], ResponseOrderDto.prototype, "orderDetail", void 0);
//# sourceMappingURL=response.order.dto.js.map