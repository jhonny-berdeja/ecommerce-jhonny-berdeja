"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseProductsDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponseProductsDto {
    products;
    static _OPENAPI_METADATA_FACTORY() {
        return { products: { required: true, type: () => [require("./response.product.dto").ResponseProductDto] } };
    }
}
exports.ResponseProductsDto = ResponseProductsDto;
//# sourceMappingURL=response.produscts.dto.js.map