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
exports.RequestOrderDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RequestOrderDto {
    userId;
    productsId;
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => String, format: "uuid" }, productsId: { required: true, type: () => [String], format: "uuid", minItems: 1 } };
    }
}
exports.RequestOrderDto = RequestOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'da5aaa13-d1e7-4229-934f-681b2f0c0725' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID de usuario es obligatorio.' }),
    (0, class_validator_1.IsUUID)('4', { message: 'El ID de usuario debe ser un UUID válido.' }),
    __metadata("design:type", String)
], RequestOrderDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            'e7aa1451-af77-408f-a1b4-cf5e1a3582ba',
            'e8cd209f-f13a-4d91-b27e-153628be361d',
            '6d5d2d3a-e5c7-4690-89a7-b5f18680b59f',
        ],
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El array de productos no puede estar vacío.' }),
    (0, class_validator_1.ArrayMinSize)(1, {
        message: 'Se requiere al menos un producto para la orden.',
    }),
    (0, class_validator_1.IsUUID)('4', {
        each: true,
        message: 'Cada ID de producto en la lista debe ser un UUID válido.',
    }),
    __metadata("design:type", Array)
], RequestOrderDto.prototype, "productsId", void 0);
//# sourceMappingURL=request.order.dto.js.map