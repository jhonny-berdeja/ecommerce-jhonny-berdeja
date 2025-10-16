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
exports.CategoriesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const request_category_dto_1 = require("./dto/request.category.dto");
const category_service_1 = require("./category.service");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const roles_enum_1 = require("../auth/roles.enum");
const auth_guard_1 = require("../../guards/auth.guard");
const roles_guard_1 = require("../../guards/roles.guard");
const swagger_1 = require("@nestjs/swagger");
const request_categories_dto_1 = require("./dto/request.categories.dto");
let CategoriesController = class CategoriesController {
    categoriesService;
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    getCategories() {
        return this.categoriesService.getCategories();
    }
    createCategory(category) {
        return this.categoriesService.createCategory(category);
    }
    createCategories(requestCategories) {
        return this.categoriesService.createCategories(requestCategories);
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener todas las categorías',
        description: 'Devuelve una lista de todas las categorías disponibles. Accesible para admins y usuarios autenticados',
    }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.categories.dto").ResponseCategoriesDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getCategories", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear una categoría',
        description: 'Crea una nueva categoría en la base de datos. Solo administradores',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create-category'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 201, type: require("../products/dto/response.category.dto").ResponseCategoryDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_category_dto_1.RequestCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "createCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear múltiples categorías',
        description: 'Crea varias categorías de una vez. Solo administradores',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create-categories'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 201, type: require("./dto/response.categories.dto").ResponseCategoriesDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_categories_dto_1.RequestCategoriesDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "createCategories", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [category_service_1.CategoriesService])
], CategoriesController);
//# sourceMappingURL=category.controller.js.map