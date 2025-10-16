"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMessageUserDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponseMessageUserDto {
    message;
    id;
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String }, id: { required: true, type: () => String } };
    }
}
exports.ResponseMessageUserDto = ResponseMessageUserDto;
//# sourceMappingURL=response.message.user.dto.js.map