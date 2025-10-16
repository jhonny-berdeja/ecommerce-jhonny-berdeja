"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseUserDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponseUserDto {
    id;
    email;
    name;
    address;
    phone;
    country;
    city;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, email: { required: true, type: () => String }, name: { required: true, type: () => String }, address: { required: true, type: () => String }, phone: { required: true, type: () => Number }, country: { required: true, type: () => String }, city: { required: true, type: () => String } };
    }
}
exports.ResponseUserDto = ResponseUserDto;
//# sourceMappingURL=response.user.dto.js.map