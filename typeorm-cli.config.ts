import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { UserEntity } from 'src/modules/users/user.entity';
import { ProductEntity } from 'src/modules/products/product.entity';
import { OrderEntity } from 'src/modules/ordes/order.entity';
import { OrderDetailEntity } from 'src/modules/ordes/orderdetail.entity';
import { CategoryEntity } from 'src/modules/categories/category.entity';

config({ path: './.env.development' });

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [
    UserEntity,
    ProductEntity,
    OrderEntity,
    OrderDetailEntity,
    CategoryEntity,
  ],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
  logging: true,
});

export default dataSource;
