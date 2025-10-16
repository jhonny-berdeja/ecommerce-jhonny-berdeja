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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const files_service_1 = require("./files.service");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const roles_enum_1 = require("../auth/roles.enum");
const auth_guard_1 = require("../../guards/auth.guard");
const roles_guard_1 = require("../../guards/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let FileController = class FileController {
    filesService;
    constructor(filesService) {
        this.filesService = filesService;
    }
    getFiles() {
        return this.filesService.getFiles();
    }
    uploadFile(file) {
        return this.filesService.addFile(file);
    }
    updateImageInProduct(file, idProduct) {
        return this.filesService.updateImageInProduct(idProduct, file);
    }
};
exports.FileController = FileController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener todos los archivos',
        description: 'Devuelve una lista de todos los archivos cargados. Accesible para admins y usuarios autenticados',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.files.dto").ResponseFilesDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FileController.prototype, "getFiles", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Subir un archivo',
        description: 'Carga un archivo de imagen. Solo administradores. Soporta JPG, PNG y WebP',
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
    openapi.ApiResponse({ status: 201, type: require("./dto/response.file.dto").ResponseFileDto }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [File]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "uploadFile", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Actualizar imagen de producto',
        description: 'Carga una imagen para un producto específico, reemplazando la anterior. Solo administradores. Máximo 200KB. Soporta JPG, PNG y WebP',
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
    (0, common_1.Post)('uploadImage/:idProduct'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201, type: require("../products/dto/response.message.product.dto").ResponseMessageProductDto }),
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
    __param(1, (0, common_1.Param)('idProduct')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [File, String]),
    __metadata("design:returntype", void 0)
], FileController.prototype, "updateImageInProduct", null);
exports.FileController = FileController = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FileController);
//# sourceMappingURL=file.controller.js.map