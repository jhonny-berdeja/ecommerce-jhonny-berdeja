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
exports.ResponseMessageProductDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class ResponseMessageProductDto {
    message;
    id;
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String }, id: { required: true, type: () => String } };
    }
}
exports.ResponseMessageProductDto = ResponseMessageProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mensaje de confirmación',
        example: 'the request was processed correctly',
    }),
    __metadata("design:type", String)
], ResponseMessageProductDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del producto procesado',
        example: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
    }),
    __metadata("design:type", String)
], ResponseMessageProductDto.prototype, "id", void 0);
//# sourceMappingURL=response.message.product.dto.js.map