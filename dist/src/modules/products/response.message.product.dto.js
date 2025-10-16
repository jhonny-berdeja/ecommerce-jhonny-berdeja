"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMessageProductDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponseMessageProductDto {
    message;
    id;
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String }, id: { required: true, type: () => String } };
    }
}
exports.ResponseMessageProductDto = ResponseMessageProductDto;
//# sourceMappingURL=response.message.product.dto.js.map