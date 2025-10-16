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
exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const roles_enum_1 = require("../auth/roles.enum");
class CreateUserDto {
    email;
    name;
    password;
    address;
    phone;
    country;
    city;
    roles;
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, format: "email" }, name: { required: true, type: () => String, minLength: 3, maxLength: 50 }, password: { required: true, type: () => String, minLength: 8, maxLength: 15, pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).+$/" }, address: { required: true, type: () => String, minLength: 3, maxLength: 80 }, phone: { required: true, type: () => Number }, country: { required: true, type: () => String, minLength: 5, maxLength: 20 }, city: { required: true, type: () => String, minLength: 5, maxLength: 20 }, roles: { required: true, enum: require("../auth/roles.enum").Role, isArray: true, minItems: 1 } };
    }
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, {
        message: 'El correo electrónico debe tener una estructura válida.',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: 'jhonny.berdeja@gmail.com' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de texto.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio.' }),
    (0, class_validator_1.Length)(3, 50, {
        message: 'El nombre debe tener entre 3 y 50 caracteres.',
    }),
    (0, swagger_1.ApiProperty)({
        example: 'Jhonny Berdeja',
        description: 'El nombre debe tener entre 3 y 50 caracteres',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La contraseña es obligatoria.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 15, {
        message: 'La contraseña debe tener entre 8 y 15 caracteres.',
    }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
        message: 'La contraseña debe contener al menos una minúscula, una mayúscula, un número y uno de los caracteres especiales: !@#$%^&*.',
    }),
    (0, swagger_1.ApiProperty)({
        example: 'Password100!!',
        description: 'La contraseña debe contener al menos una minúscula, una mayúscula, un número y uno de los caracteres especiales: !@#$%^&*.',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La dirección debe ser una cadena de texto.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La dirección es obligatoria.' }),
    (0, class_validator_1.Length)(3, 80, {
        message: 'La dirección debe tener entre 3 y 80 caracteres.',
    }),
    (0, swagger_1.ApiProperty)({
        example: 'Av. Rivadavia 5000',
        description: 'El nombre debe tener entre 3 y 50 caracteres',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, {
        message: 'El número de teléfono debe ser un valor numérico.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El número de teléfono es obligatorio.' }),
    (0, swagger_1.ApiProperty)({
        example: '5000',
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El país debe ser una cadena de texto.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El país es obligatorio.' }),
    (0, class_validator_1.Length)(5, 20, {
        message: 'El país debe tener entre 5 y 20 caracteres.',
    }),
    (0, swagger_1.ApiProperty)({
        example: 'Argentina',
        description: 'El país debe tener entre 5 y 20 caracteres.',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La ciudad debe ser una cadena de texto.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La ciudad es obligatoria.' }),
    (0, class_validator_1.Length)(5, 20, {
        message: 'La ciudad debe tener entre 5 y 20 caracteres.',
    }),
    (0, swagger_1.ApiProperty)({
        example: 'Capital Federal',
        description: 'La ciudad debe tener entre 5 y 20 caracteres.',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsArray)({
        message: 'Los roles deben ser proporcionados como una lista (array).',
    }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'La lista de roles no puede estar vacía.' }),
    (0, class_validator_1.IsEnum)(roles_enum_1.Role, {
        each: true,
        message: `Cada rol debe ser uno de los siguientes valores: ${Object.values(roles_enum_1.Role).join(', ')}`,
    }),
    (0, swagger_1.ApiProperty)({
        example: ['admin'],
        description: `Cada rol debe ser uno de los siguientes valores: ${Object.values(roles_enum_1.Role).join(', ')}`,
    }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "roles", void 0);
//# sourceMappingURL=create.user.dto.js.map