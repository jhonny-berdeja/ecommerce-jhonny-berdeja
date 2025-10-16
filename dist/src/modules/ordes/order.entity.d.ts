import { UserEntity } from 'src/modules/users/user.entity';
import { OrderDetailEntity } from 'src/modules/ordes/orderdetail.entity';
export declare class OrderEntity {
    id: string;
    user: UserEntity;
    user_id: string;
    orderDetail: OrderDetailEntity;
    date: Date;
}
