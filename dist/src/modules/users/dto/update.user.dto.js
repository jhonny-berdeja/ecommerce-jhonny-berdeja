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
exports.UpdateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateUserDto {
    id;
    email;
    name;
    password;
    address;
    phone;
    country;
    city;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => String }, email: { required: true, type: () => String, format: "email" }, name: { required: true, type: () => String, minLength: 3, maxLength: 80 }, password: { required: true, type: () => String, minLength: 8, maxLength: 15, pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).+$/" }, address: { required: true, type: () => String, minLength: 3, maxLength: 80 }, phone: { required: true, type: () => Number }, country: { required: true, type: () => String, minLength: 5, maxLength: 20 }, city: { required: true, type: () => String, minLength: 5, maxLength: 20 } };
    }
}
exports.UpdateUserDto = UpdateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'ID de usuario (usualmente en la ruta).',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: 'nuevo.email@ejemplo.com',
        description: 'Correo electrónico del usuario.',
    }),
    (0, class_validator_1.IsEmail)({}, {
        message: 'El correo electrónico debe tener una estructura válida.',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: 'Juan Pérez',
        description: 'Nombre completo del usuario.',
    }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de texto.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(3, 80, {
        message: 'El nombre debe tener entre 3 y 80 caracteres.',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 15, {
        message: 'La contraseña debe tener entre 8 y 15 caracteres.',
    }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
        message: 'La contraseña debe contener al menos una minúscula, una mayúscula, un número y uno de los caracteres especiales: !@#$%^&*.',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: 'Calle Falsa 123',
        description: 'Nueva dirección.',
    }),
    (0, class_validator_1.IsString)({ message: 'La dirección debe ser una cadena de texto.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(3, 80, {
        message: 'La dirección debe tener entre 3 y 80 caracteres.',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: 5555,
        description: 'Nuevo número de teléfono.',
    }),
    (0, class_validator_1.IsNumber)({}, {
        message: 'El número de teléfono debe ser un valor numérico.',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: 'Chile',
        description: 'Nuevo país de residencia.',
    }),
    (0, class_validator_1.IsString)({ message: 'El país debe ser una cadena de texto.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 20, {
        message: 'El país debe tener entre 5 y 20 caracteres.',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: 'Santiago',
        description: 'Nueva ciudad de residencia.',
    }),
    (0, class_validator_1.IsString)({ message: 'La ciudad debe ser una cadena de texto.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(5, 20, {
        message: 'La ciudad debe tener entre 5 y 20 caracteres.',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "city", void 0);
//# sourceMappingURL=update.user.dto.js.map