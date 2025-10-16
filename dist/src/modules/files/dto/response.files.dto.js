"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseFilesDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponseFilesDto {
    responseFilesDto;
    static _OPENAPI_METADATA_FACTORY() {
        return { responseFilesDto: { required: true, type: () => [require("./response.file.dto").ResponseFileDto] } };
    }
}
exports.ResponseFilesDto = ResponseFilesDto;
//# sourceMappingURL=response.files.dto.js.map