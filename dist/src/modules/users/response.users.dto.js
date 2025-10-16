"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseUsersDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponseUsersDto {
    users;
    static _OPENAPI_METADATA_FACTORY() {
        return { users: { required: true, type: () => [require("./response.user.dto").ResponseUserDto] } };
    }
}
exports.ResponseUsersDto = ResponseUsersDto;
//# sourceMappingURL=response.users.dto.js.map