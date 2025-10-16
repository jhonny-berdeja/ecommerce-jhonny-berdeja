"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./src/modules/users/user.entity");
const product_entity_1 = require("./src/modules/products/product.entity");
const order_entity_1 = require("./src/modules/ordes/order.entity");
const orderdetail_entity_1 = require("./src/modules/ordes/orderdetail.entity");
const category_entity_1 = require("./src/modules/categories/category.entity");
(0, dotenv_1.config)({ path: './.env.development' });
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [
        user_entity_1.UserEntity,
        product_entity_1.ProductEntity,
        order_entity_1.OrderEntity,
        orderdetail_entity_1.OrderDetailEntity,
        category_entity_1.CategoryEntity,
    ],
    migrations: ['src/database/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
exports.default = dataSource;
//# sourceMappingURL=typeorm-cli.config.js.map