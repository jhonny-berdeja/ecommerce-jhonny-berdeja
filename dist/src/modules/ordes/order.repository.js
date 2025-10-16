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
exports.OrdersRepository = void 0;
const common_1 = require("@nestjs/common");
const order_entity_1 = require("./order.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_repository_1 = require("../users/users.repository");
const products_repository_1 = require("../products/products.repository");
const orderdetail_entity_1 = require("./orderdetail.entity");
let OrdersRepository = class OrdersRepository {
    productsRepository;
    usersRepository;
    ordersRepository;
    orderDetailRepository;
    constructor(productsRepository, usersRepository, ordersRepository, orderDetailRepository) {
        this.productsRepository = productsRepository;
        this.usersRepository = usersRepository;
        this.ordersRepository = ordersRepository;
        this.orderDetailRepository = orderDetailRepository;
    }
    async getOrderById(id) {
        const order = await this.ordersRepository.findOne({
            where: { id },
            relations: {
                user: true,
                orderDetail: {
                    products: {
                        category: true,
                    },
                },
            },
        });
        if (!order) {
            throw new common_1.BadRequestException(`No existe la orden con id ${id}`);
        }
        return order;
    }
    async subtractOneToStock(productsId) {
        const productsWithStockGreaterThanZero = await this.productsRepository.getProductsWithStockGreaterThanZero(productsId);
        const total = this.productsRepository.calculateTotalCost(productsWithStockGreaterThanZero);
        const updatedProducts = productsWithStockGreaterThanZero.map(async (product) => await this.productsRepository.subtractOneToStock(product));
        return [total, await Promise.all(updatedProducts)];
    }
    async saveUserInOrder(user) {
        const orderEntity = new order_entity_1.OrderEntity();
        orderEntity.user = user;
        return await this.ordersRepository.save(orderEntity);
    }
    buildOrderDetailEntity(order, products, total) {
        const orderDetail = new orderdetail_entity_1.OrderDetailEntity();
        orderDetail.order = order;
        orderDetail.price = Number(total);
        orderDetail.products = products;
        return orderDetail;
    }
    async addOrder(userId, productsId) {
        const user = await this.usersRepository.getUserById(userId);
        const [total, updatedProducts] = await this.subtractOneToStock(productsId);
        const orderSaved = await this.saveUserInOrder(user);
        const orderDetail = this.buildOrderDetailEntity(orderSaved, updatedProducts, total);
        await this.orderDetailRepository.save(orderDetail);
        return await this.getOrderById(orderSaved.id);
    }
};
exports.OrdersRepository = OrdersRepository;
exports.OrdersRepository = OrdersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(order_entity_1.OrderEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(orderdetail_entity_1.OrderDetailEntity)),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository,
        users_repository_1.UsersRepository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersRepository);
//# sourceMappingURL=order.repository.js.map