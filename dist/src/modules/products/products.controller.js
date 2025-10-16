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
exports.ProductsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const auth_guard_1 = require("../../guards/auth.guard");
const create_product_dto_1 = require("./dto/create.product.dto");
const update_product_dto_1 = require("./dto/update.product.dto");
const roles_enum_1 = require("../auth/roles.enum");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const roles_guard_1 = require("../../guards/roles.guard");
const swagger_1 = require("@nestjs/swagger");
const request_products_dto_1 = require("./dto/request.products.dto");
let ProductsController = class ProductsController {
    productsService;
    constructor(productsService) {
        this.productsService = productsService;
    }
    getProducts() {
        return this.productsService.getProducts();
    }
    getProductByPage(query) {
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 5;
        return this.productsService.getProductByPage(page, limit);
    }
    getProductById(id) {
        return this.productsService.getProductById(id);
    }
    createProduct(product) {
        return this.productsService.addProduct(product);
    }
    createProducts(productsDto) {
        return this.productsService.addProducts(productsDto.products);
    }
    updateProduct(id, product) {
        return this.productsService.updateProduct(id, product);
    }
    deleteProduct(id) {
        return this.productsService.deleteProduct(id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener todos los productos',
        description: 'Devuelve una lista completa de todos los productos disponibles. Accesible para admins y usuarios autenticados',
    }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.produscts.dto").ResponseProductsDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener productos paginados',
        description: 'Devuelve una lista de productos con paginación. Permite especificar página y cantidad de elementos por página',
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
    openapi.ApiResponse({ status: 200, type: require("./dto/response.produscts.dto").ResponseProductsDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductByPage", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener producto por ID',
        description: 'Obtiene los detalles completos de un producto específico. Accesible para admins y usuarios autenticados',
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'ID único del producto (UUID)',
        example: 'b2c3d4e5-f6g7-8901-bcde-f12345678901',
        type: 'string',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN, roles_enum_1.Role.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.product.dto").ResponseProductDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear un nuevo producto',
        description: 'Crea un nuevo producto en el catálogo. Solo administradores pueden realizar esta acción',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 201, type: require("./dto/response.product.dto").ResponseProductDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear múltiples productos',
        description: 'Crea varios productos de una vez en el catálogo. Solo administradores pueden realizar esta acción',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('create-products'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 201, type: require("./dto/response.produscts.dto").ResponseProductsDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_products_dto_1.RequestProductsDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "createProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Actualizar producto',
        description: 'Actualiza los datos de un producto específico. Solo administradores pueden realizar esta acción',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.message.product.dto").ResponseMessageProductDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar producto',
        description: 'Elimina un producto específico de la base de datos. Solo administradores pueden realizar esta acción',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(roles_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: require("./dto/response.message.product.dto").ResponseMessageProductDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "deleteProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map