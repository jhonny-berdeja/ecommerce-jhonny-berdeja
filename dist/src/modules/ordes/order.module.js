"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const products_module_1 = require("../products/products.module");
const users_module_1 = require("../users/users.module");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const order_repository_1 = require("./order.repository");
const typeorm_1 = require("@nestjs/typeorm");
const orderdetail_entity_1 = require("./orderdetail.entity");
const order_entity_1 = require("./order.entity");
const order_mapper_1 = require("./order.mapper");
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            typeorm_1.TypeOrmModule.forFeature([orderdetail_entity_1.OrderDetailEntity, order_entity_1.OrderEntity]),
        ],
        controllers: [order_controller_1.OrdersController],
        providers: [order_service_1.OrdersService, order_repository_1.OrdersRepository, order_mapper_1.OrderMapper],
    })
], OrdersModule);
//# sourceMappingURL=order.module.js.map