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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaudinaryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const cloudinary_service_1 = require("./cloudinary.service");
const roles_enum_1 = require("../auth/roles.enum");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const auth_guard_1 = require("../../guards/auth.guard");
const roles_guard_1 = require("../../guards/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let ClaudinaryController = class ClaudinaryController {
    cloudinaryService;
    constructor(cloudinaryService) {
        this.cloudinaryService = cloudinaryService;
    }
    uploadFile(file) {
        return this.cloudinaryService.uploadFile(file);
    }
};
exports.ClaudinaryController = ClaudinaryController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Subir archivo a Cloudinary',
        description: 'Carga una imagen a Cloudinary. Solo administradores. Soporta JPG, PNG y WebP. Máximo 200KB',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Carga de un archivo único',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'El archivo a subir (image/(jpeg|png|webp))',
                },
            },
            required: ['file'],
        },
    }),
    (0, common_1.Post)('upload'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        fileIsRequired: true,
        validators: [
            new common_1.MaxFileSizeValidator({
                maxSize: 200 * 1024,
                message: 'El tamaño del archivo no debe exceder 200KB.',
            }),
            new common_1.FileTypeValidator({
                fileType: 'image/(jpeg|png|webp)',
            }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof multer_1.File !== "undefined" && multer_1.File) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], ClaudinaryController.prototype, "uploadFile", null);
exports.ClaudinaryController = ClaudinaryController = __decorate([
    (0, common_1.Controller)('cloudinary'),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService])
], ClaudinaryController);
//# sourceMappingURL=cloudinary.controller.js.map