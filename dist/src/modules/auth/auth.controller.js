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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_user_dto_1 = require("../users/dto/create.user.dto");
const request_signin_dto_1 = require("./dto/request.signin.dto");
const request_update_password_dto_1 = require("./dto/request.update.password.dto");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const auth_guard_1 = require("../../guards/auth.guard");
const roles_guard_1 = require("../../guards/roles.guard");
const roles_enum_1 = require("./roles.enum");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    signUp(user) {
        return this.authService.signUp(user);
    }
    signIn(signinDto) {
        return this.authService.signIn(signinDto.email, signinDto.password);
    }
    updatePassword(updatePasswordDto) {
        return this.authService.updatePassword(updatePasswordDto.email, updatePasswordDto.password);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Registrar un nuevo usuario',
        description: 'Crea una nueva cuenta de usuario con email, contraseña y datos personales',
    }),
    (0, common_1.Post)('signup'),
    openapi.ApiResponse({ status: 201, type: require("../users/dto/response.user.dto").ResponseUserDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Iniciar sesión',
        description: 'Autentica un usuario con email y contraseña, devolviendo un token JWT',
    }),
    (0, common_1.Post)('signin'),
    openapi.ApiResponse({ status: 201, type: require("./dto/response.token.dto").ResponseTokenDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_signin_dto_1.RequestSignInDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Actualizar contraseña de un usuario',
        description: 'Solo administradores pueden actualizar contraseñas. Requiere token JWT válido',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)('update-password'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.update.password.dto").ResponseUpdatePasswordDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_update_password_dto_1.RequestUpdatePasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updatePassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map