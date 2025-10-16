import { OrderEntity } from 'src/modules/ordes/order.entity';
import { Role } from 'src/modules/auth/roles.enum';
export declare class UserEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    country: string;
    address: string;
    city: string;
    roles: Role[];
    orders: OrderEntity[];
}
