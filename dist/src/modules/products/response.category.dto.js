"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCategoryDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponseCategoryDto {
    id;
    name;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
}
exports.ResponseCategoryDto = ResponseCategoryDto;
//# sourceMappingURL=response.category.dto.js.map