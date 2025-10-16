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
exports.ResponseFileDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class ResponseFileDto {
    id;
    name;
    mineType;
    data;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, mineType: { required: true, type: () => String }, data: { required: true } };
    }
}
exports.ResponseFileDto = ResponseFileDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '6',
        description: 'ID único asignado al archivo en la base de datos.',
    }),
    __metadata("design:type", String)
], ResponseFileDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'documento_final.pdf',
        description: 'Nombre del archivo, ya sea el original o uno generado.',
    }),
    __metadata("design:type", String)
], ResponseFileDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'application/pdf',
        description: 'Tipo MIME del contenido del archivo (ej: image/jpeg, application/pdf).',
    }),
    __metadata("design:type", String)
], ResponseFileDto.prototype, "mineType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            type: 'Buffer',
            data: [137, 80, 78, 71],
        },
        description: 'Contenido binario del archivo, codificado en Base64.',
        type: 'string',
    }),
    __metadata("design:type", Buffer)
], ResponseFileDto.prototype, "data", void 0);
//# sourceMappingURL=response.file.dto.js.map