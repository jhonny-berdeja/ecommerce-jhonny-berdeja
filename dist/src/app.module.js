"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const products_module_1 = require("./modules/products/products.module");
const users_module_1 = require("./modules/users/users.module");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./modules/users/user.entity");
const product_entity_1 = require("./modules/products/product.entity");
const order_entity_1 = require("./modules/ordes/order.entity");
const orderdetail_entity_1 = require("./modules/ordes/orderdetail.entity");
const category_entity_1 = require("./modules/categories/category.entity");
const category_module_1 = require("./modules/categories/category.module");
const order_module_1 = require("./modules/ordes/order.module");
const core_1 = require("@nestjs/core");
const file_entity_1 = require("./modules/files/file.entity");
const file_module_1 = require("./modules/files/file.module");
const cloudinary_module_1 = require("./modules/cloudinary/cloudinary.module");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.loggerGlobal).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: './.env.development',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    database: configService.get('POSTGRES_DATABASE'),
                    host: configService.get('POSTGRES_HOST'),
                    port: configService.get('POSTGRES_PORT'),
                    username: configService.get('POSTGRES_USERNAME'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    entities: [
                        user_entity_1.UserEntity,
                        product_entity_1.ProductEntity,
                        order_entity_1.OrderEntity,
                        orderdetail_entity_1.OrderDetailEntity,
                        category_entity_1.CategoryEntity,
                        file_entity_1.FileEntity,
                    ],
                    synchronize: true,
                    logging: false,
                    dropSchema: false,
                }),
            }),
            auth_module_1.AuthModule,
            products_module_1.ProductsModule,
            users_module_1.UsersModule,
            category_module_1.CategoriesModule,
            order_module_1.OrdersModule,
            file_module_1.FilesModule,
            cloudinary_module_1.CloudinaryModule,
            jwt_1.JwtModule.registerAsync({
                global: true,
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '1h' },
                }),
            }),
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useValue: new common_1.ValidationPipe({
                    transform: true,
                    whitelist: true,
                    forbidNonWhitelisted: true,
                }),
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map