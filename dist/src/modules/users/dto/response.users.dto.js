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
exports.ResponseUsersDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const response_user_dto_1 = require("./response.user.dto");
class ResponseUsersDto {
    users;
    static _OPENAPI_METADATA_FACTORY() {
        return { users: { required: true, type: () => [require("./response.user.dto").ResponseUserDto] } };
    }
}
exports.ResponseUsersDto = ResponseUsersDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de usuarios',
        type: [response_user_dto_1.ResponseUserDto],
        example: [
            {
                id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
                email: 'jhonny.berdeja@gmail.com',
                name: 'Jhonny Berdeja',
                address: 'Av. Rivadavia 5000',
                phone: 1187654321,
                country: 'Argentina',
                city: 'Capital Federal',
            },
            {
                id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
                email: 'maria.garcia@gmail.com',
                name: 'María García',
                address: 'Calle Florida 123',
                phone: 1134567890,
                country: 'Argentina',
                city: 'Buenos Aires',
            },
            {
                id: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
                email: 'carlos.lopez@gmail.com',
                name: 'Carlos López',
                address: 'Av. Corrientes 456',
                phone: 1145678901,
                country: 'Argentina',
                city: 'San Isidro',
            },
        ],
    }),
    __metadata("design:type", Array)
], ResponseUsersDto.prototype, "users", void 0);
//# sourceMappingURL=response.users.dto.js.map