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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const auth_guard_1 = require("../../guards/auth.guard");
const update_user_dto_1 = require("./dto/update.user.dto");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const roles_enum_1 = require("../auth/roles.enum");
const roles_guard_1 = require("../../guards/roles.guard");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    getRoles() {
        return 'test de acceso con roles ok';
    }
    getUsers() {
        return this.usersService.getUsers();
    }
    getUserByPage(query) {
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 5;
        return this.usersService.getUserByPage(page, limit);
    }
    getUserById(id) {
        return this.usersService.getUserById(id);
    }
    updateUser(id, user) {
        return this.usersService.updateUser(id, user);
    }
    deleteUser(id) {
        return this.usersService.deleteUser(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('test-admin'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getRoles", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener todos los usuarios',
        description: 'Devuelve una lista completa de todos los usuarios registrados. Solo administradores',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.users.dto").ResponseUsersDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener usuarios paginados',
        description: 'Devuelve una lista de usuarios con paginación. Permite especificar página y cantidad de elementos por página. Accesible para admins y usuarios autenticados',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
        type: Number,
        description: 'Número de página deseado (ej: 1)',
        example: 1,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        type: Number,
        description: 'Cantidad de elementos por página (ej: 10)',
        example: 5,
    }),
    (0, common_1.Get)('page'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.users.dto").ResponseUsersDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserByPage", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener usuario por ID',
        description: 'Obtiene los detalles completos de un usuario específico. Requiere ser admin o usuario autenticado',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID único del usuario (UUID)',
        example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        type: 'string',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.user.dto").ResponseUserDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Actualizar usuario',
        description: 'Actualiza los datos de un usuario específico. Solo administradores pueden realizar esta acción',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID único del usuario a actualizar (UUID)',
        example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        type: 'string',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.message.user.dto").ResponseMessageUserDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar usuario',
        description: 'Elimina un usuario específico de la base de datos. Solo administradores pueden realizar esta acción',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID único del usuario a eliminar (UUID)',
        example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
        type: 'string',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.message.user.dto").ResponseMessageUserDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map