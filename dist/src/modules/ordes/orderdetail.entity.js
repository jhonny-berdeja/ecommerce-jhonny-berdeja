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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const order_entity_1 = require("./order.entity");
const product_entity_1 = require("../products/product.entity");
let OrderDetailEntity = class OrderDetailEntity {
    id;
    price;
    order;
    order_id;
    products;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, price: { required: true, type: () => Number }, order: { required: true, type: () => require("./order.entity").OrderEntity }, order_id: { required: true, type: () => String }, products: { required: true, type: () => [require("../products/product.entity").ProductEntity] } };
    }
};
exports.OrderDetailEntity = OrderDetailEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false,
    }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => order_entity_1.OrderEntity, (order) => order.orderDetail),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", order_entity_1.OrderEntity)
], OrderDetailEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => product_entity_1.ProductEntity, (product) => product.orderDetails),
    __metadata("design:type", Array)
], OrderDetailEntity.prototype, "products", void 0);
exports.OrderDetailEntity = OrderDetailEntity = __decorate([
    (0, typeorm_1.Entity)('order_details')
], OrderDetailEntity);
//# sourceMappingURL=orderdetail.entity.js.map