import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { loggerGlobal } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserEntity } from './modules/users/user.entity';
import { ProductEntity } from './modules/products/product.entity';
import { OrderEntity } from './modules/ordes/order.entity';
import { OrderDetailEntity } from './modules/ordes/orderdetail.entity';
import { CategoryEntity } from './modules/categories/category.entity';
import { CategoriesModule } from './modules/categories/category.module';
import { OrdersModule } from './modules/ordes/order.module';
import { APP_PIPE } from '@nestjs/core';
import { FileEntity } from './modules/files/file.entity';
import { FilesModule } from './modules/files/file.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env.development',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        database: configService.get('POSTGRES_DATABASE'),
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        entities: [
          UserEntity,
          ProductEntity,
          OrderEntity,
          OrderDetailEntity,
          CategoryEntity,
          FileEntity,
        ],
        synchronize: true,
        logging: false,
        dropSchema: false,
      }),
    }),
    AuthModule,
    ProductsModule,
    UsersModule,
    CategoriesModule,
    OrdersModule,
    FilesModule,
    CloudinaryModule,
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerGlobal).forRoutes('*');
  }
}
