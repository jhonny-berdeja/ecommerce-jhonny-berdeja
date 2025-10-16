"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseProductDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponseProductDto {
    id;
    name;
    description;
    price;
    stock;
    imgUrl;
    category;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, imgUrl: { required: true, type: () => String }, category: { required: true, type: () => require("./response.category.dto").ResponseCategoryDto } };
    }
}
exports.ResponseProductDto = ResponseProductDto;
//# sourceMappingURL=response.product.dto.js.map