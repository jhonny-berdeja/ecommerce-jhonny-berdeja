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
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const files_repository_1 = require("./files.repository");
const file_mapper_1 = require("./file.mapper");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const products_service_1 = require("../products/products.service");
let FilesService = class FilesService {
    filesRepository;
    filesMapprer;
    cloudinaryService;
    productsService;
    constructor(filesRepository, filesMapprer, cloudinaryService, productsService) {
        this.filesRepository = filesRepository;
        this.filesMapprer = filesMapprer;
        this.cloudinaryService = cloudinaryService;
        this.productsService = productsService;
    }
    async getFiles() {
        const files = await this.filesRepository.getFiles();
        return this.filesMapprer.mapToResponseFilesDto(files);
    }
    async addFile(file) {
        const fileEntity = this.filesMapprer.mapFileToFileEntity(file);
        const fileSaved = await this.filesRepository.addFile(fileEntity);
        return this.filesMapprer.mapFileEntityToResponseFileDto(fileSaved);
    }
    async updateImageInProduct(idProduct, file) {
        await this.productsService.getProductById(idProduct);
        const fileCreated = await this.cloudinaryService.uploadFile(file);
        const updateProductDto = this.filesMapprer.buildUpdateProductDto(fileCreated.url);
        return await this.productsService.updateProduct(idProduct, updateProductDto);
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [files_repository_1.FilesRepository,
        file_mapper_1.FilesMapper,
        cloudinary_service_1.CloudinaryService,
        products_service_1.ProductsService])
], FilesService);
//# sourceMappingURL=files.service.js.map