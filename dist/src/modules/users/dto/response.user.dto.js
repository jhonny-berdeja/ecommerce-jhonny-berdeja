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
exports.ResponseUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class ResponseUserDto {
    id;
    email;
    name;
    address;
    phone;
    country;
    city;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, email: { required: true, type: () => String }, name: { required: true, type: () => String }, address: { required: true, type: () => String }, phone: { required: true, type: () => Number }, country: { required: true, type: () => String }, city: { required: true, type: () => String } };
    }
}
exports.ResponseUserDto = ResponseUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID único del usuario',
        example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email del usuario',
        example: 'jhonny.berdeja@gmail.com',
    }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre completo del usuario',
        example: 'Jhonny Berdeja',
    }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dirección del usuario',
        example: 'Av. Rivadavia 5000',
    }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Número de teléfono del usuario',
        example: 1187654321,
        type: Number,
    }),
    __metadata("design:type", Number)
], ResponseUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'País de residencia',
        example: 'Argentina',
    }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ciudad de residencia',
        example: 'Capital Federal',
    }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "city", void 0);
//# sourceMappingURL=response.user.dto.js.map