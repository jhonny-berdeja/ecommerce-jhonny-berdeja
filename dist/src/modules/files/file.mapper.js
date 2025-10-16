"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesMapper = void 0;
const response_file_dto_1 = require("./dto/response.file.dto");
const file_entity_1 = require("./file.entity");
const response_files_dto_1 = require("./dto/response.files.dto");
const update_product_dto_1 = require("../products/dto/update.product.dto");
class FilesMapper {
    mapFileEntityToResponseFileDto(file) {
        const fileResponseDto = new response_file_dto_1.ResponseFileDto();
        fileResponseDto.id = file.id;
        fileResponseDto.name = file.name;
        fileResponseDto.mineType = file.mineType;
        fileResponseDto.data = file.data;
        return fileResponseDto;
    }
    mapFileToFileEntity({ originalname, mimetype, buffer }) {
        const fileEntity = new file_entity_1.FileEntity();
        fileEntity.name = originalname;
        fileEntity.mineType = mimetype;
        fileEntity.data = buffer;
        return fileEntity;
    }
    mapToResponseFilesDto(files) {
        const responseFiles = files.map((file) => this.mapFileEntityToResponseFileDto(file));
        const reponseFilesDto = new response_files_dto_1.ResponseFilesDto();
        reponseFilesDto.responseFilesDto = responseFiles;
        return reponseFilesDto;
    }
    buildUpdateProductDto(url) {
        const updateProductDto = new update_product_dto_1.UpdateProductDto();
        updateProductDto.imgUrl = url;
        return updateProductDto;
    }
}
exports.FilesMapper = FilesMapper;
//# sourceMappingURL=file.mapper.js.map